'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import useRecordingSessions from '@/hooks/useRecordingSessions';

type RecognitionRefType = SpeechRecognition | null;

export default function useAudioTranscriptions() {
  const [isCopied, setIsCopied] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [finalTranscript, setFinalTranscript] = useState('');
  const [transcript, setTranscript] = useState('');
  const recongnitionRef = useRef<RecognitionRefType>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isRestartingRef = useRef<boolean>(false);

  const { setSessions } = useRecordingSessions();

  const restartRecognition = useCallback(() => {
    if (!recongnitionRef.current) return;
    isRestartingRef.current = true;
    // Clear any existing restart timeout
    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
    }

    restartTimeoutRef.current = setTimeout(() => {
      if (recongnitionRef.current && isListening) {
        try {
          recongnitionRef.current!.start();
          isRestartingRef.current = false;
        } catch (error) {
          console.warn('Failed to restart recognition:', error);
          restartTimeoutRef.current = setTimeout(() => {
            restartRecognition();
          }, 1000);
        }
      } else {
        isRestartingRef.current = false;
      }
    }, 100);
  }, [isListening]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        console.error('Speech recognition is not supported in your browser ');
        return;
      }
      const recognitionClient = new SpeechRecognition();
      recognitionClient.continuous = true;
      recognitionClient.interimResults = true;
      recognitionClient.lang = 'en-IN';
      recognitionClient.maxAlternatives = 3;

      recognitionClient.onresult = (event: SpeechRecognitionEvent) => {
        let interimTranscript = finalTranscript;
        let finalTranscriptResult = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscriptResult += transcript + '';
          }
          interimTranscript += transcript;
        }

        if (finalTranscriptResult) {
          setFinalTranscript(prev => prev + finalTranscriptResult);
          setTranscript(finalTranscript + ' ');
        }
        setTranscript(interimTranscript);
      };

      recognitionClient.onerror = (event: SpeechRecognitionErrorEvent) => {
        switch (event.error) {
          case 'no-speech':
            // Common - just restart without showing error
            if (isListening) {
              restartRecognition();
            }
            return;
          case 'aborted':
            // Restart if we should still be recording
            if (isListening && !isRestartingRef.current) {
              restartRecognition();
            }
            return;
          default:
            console.error('Speech recognition error', event.message);
            setIsListening(false);
        }
      };

      recognitionClient.onend = () => {
        console.log('Stopped listening');
        setIsListening(false);
      };
      recongnitionRef.current = recognitionClient;
    }
    return () => {
      clearSession();
    };
  }, []);

  const clearSession = () => {
    setFinalTranscript('');
    setTranscript('');
  };

  const startRecording = () => {
    clearSession();
    recongnitionRef?.current?.start();
  };
  const stopRecording = () => {
    const name = prompt('Provide session name ?') || '';
    setSessions(prev => [
      ...prev,
      { name, transcript: finalTranscript, createdAt: new Date() },
    ]);
  };

  const toggleListening = () => {
    if (!recongnitionRef.current) return;
    isListening ? stopRecording() : startRecording();
    setIsListening(!isListening);
  };

  const copyToClipboard = () => {
    setIsCopied(prev => !prev);
    navigator.clipboard.writeText(finalTranscript).finally(() => {
      setTimeout(() => {
        setIsCopied(prev => !prev);
      }, 1000);
    });
  };

  return {
    // state
    isCopied,
    isListening,
    transcript,
    finalTranscript,
    // actions
    setIsCopied,
    setIsListening,
    setTranscript,
    setFinalTranscript,
    toggleListening,
    clearSession,
    copyToClipboard,
  };
}
