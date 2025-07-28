import { useEffect, useState } from 'react';

type SessionType = {
  name: string;
  createdAt: Date;
  transcript: string;
};
export default function useRecordingSessions() {
  const [sessions, setSessions] = useState<SessionType[]>([]);

  useEffect(() => {
    console.log('sessions', sessions);
  }, [sessions]);
  return {
    sessions,
    setSessions,
  };
}
