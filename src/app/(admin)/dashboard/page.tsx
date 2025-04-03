import Header from '@/app/components/header';
import MagicButton from '@/app/components/magic-button';
import React from 'react';

// export interface PageProps {}

export default function Page() {
  return (
    <main>
      <Header>Dashboard</Header>
      <div className="mt-5 ml-10">
        <MagicButton />
      </div>
    </main>
  );
}
