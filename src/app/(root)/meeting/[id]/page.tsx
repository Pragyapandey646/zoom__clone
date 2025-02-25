"use client";
import React from 'react';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useState } from 'react';
import MeetinSetup from '@/components/MeetinSetup';
import MeetingRoom from '@/components/MeetingRoom';
import { useGetCallById } from '../../../../../hooks/useGetCallById';
import Loader from '@/components/Loader';

const Meeting = ({ params: { id } }: { params: { id: string }}) => {
  const { user, isLoaded} = useUser();
  const [isSetupComplete, setisSetupComplete] = useState(false)
  const { call, isCallLoading} = useGetCallById(id);
  if(!isLoaded || isCallLoading) return <Loader />
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetinSetup setisSetupComplete={setisSetupComplete}/>
          ): (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>

    </main>
  )
}

export default Meeting