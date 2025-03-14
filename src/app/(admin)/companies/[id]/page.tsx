'use client';

import React from 'react';
// import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const resolvedParams = React.use(params);
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${resolvedParams.id})`}</p>
    </div>
  );
}
