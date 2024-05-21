"use client"; 
import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
// import StreamVideoProvider from '@/providers/StreamClientProvider';
import StreamVideoProvider from '../../../providers/StreamClientProvider';
import { Metadata } from 'next';
// const StreamVideoProvider = dynamic(() => import('@stream-io/video-react-sdk').then(mod => mod.StreamVideoProvider), { ssr: false });

// export const metadata: Metadata = {
//   title: "YOOM",
//   description: "Video calling app",
//   icons: {
//     icon: '/icons/logo.svg'
//   }
// };

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
