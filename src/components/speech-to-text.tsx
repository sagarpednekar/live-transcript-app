"use client";

import { useAudioTranscriptions } from "@/hooks";
import Button from "@/shared/ui/button";
import IconBox from "@/shared/ui/icon";

export default function SpeechToText() {
    const {
        isCopied,
        isListening,
        transcript,
        finalTranscript,
        copyToClipboard,
        clearSession,
        toggleListening,
    } = useAudioTranscriptions();

    return (
        <div className="p-8 w-full">
            {/* <!-- Recording Status Bar --> */}
            <div className="bg-gray-50 flex justify-center items-center gap-2 p-4 mb-6">
                <div
                    className={`h-3 w-3  rounded-full ${isListening ? "bg-red-500 animate-pulse" : "bg-green-500"
                        }`}
                ></div>
                <span>{isListening ? "Recording In Progress" : "Ready"}</span>
            </div>
            {/* <!-- Recording action buttons -->  */}
            <div className="flex justify-center gap-2 mb-4 ">
                <Button
                    clickHandler={toggleListening}
                    customCss="bg-red-700 text-white"
                    iconName={isListening ? "MicOff" : "Mic"}
                >
                    {isListening ? "Stop Recording" : "Start Recording"}
                </Button>

                <Button
                    clickHandler={clearSession}
                    customCss="bg-gray-200  focus:ring-2"
                    iconName="Trash"
                >
                    Clear
                </Button>
            </div>

            {/* <!-- Transcript generator box --> */}
            <div>
                <div className="p-2 bg-gray-200 flex justify-end">
                    <Button
                        clickHandler={copyToClipboard}
                        iconName={isCopied ? "CopyCheck" : "Copy"}
                        size="md"
                    ></Button>
                </div>

                <div className="bg-gray-50 p-4 relative border-dashed border-2 whitespace-pre-wrap rounded border-gray-300 min-h-96 leading-relaxed">
                    {!(transcript || finalTranscript) && (
                        <p className="text-gray-500 p-2 ">
                            {"Click 'Start Recording' to begin transcription..."}
                        </p>
                    )}
                    {isListening && transcript && (
                        <div>
                            <div className="flex items-center gap-2">
                                <div
                                    className={`h-3 w-3  rounded-full bg-red-500 animate-pulse`}
                                ></div>
                                Live captions
                            </div>
                            <p className="text-gray-900 p-2 capitalize-first">
                                {transcript} <span className="animate-ping">|</span>
                            </p>
                        </div>
                    )}
                    {!isListening && finalTranscript && (
                        <div>
                            <h3 className="flex gap-2 justify-center mb-4">
                                Transcript
                                <IconBox
                                    name="MessageSquareText"
                                    className="inline-block text-neutral-500"
                                />{" "}
                            </h3>
                            <p className="text-gray-900 text-wrap p-4 capitalize-first border-2 border-zinc-400 rounded font-serif">
                                {finalTranscript}
                            </p>
                        </div>
                    )}
                </div>
                {/* Footer */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>
                        This tool uses your browser&pos built-in speech recognition. Make sure
                        you have a good internet connection for best results.
                    </p>
                </div>
            </div>
        </div>
    );
}
