'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const resolved = React.use(params);

  useEffect(() => {
    const id = Number.parseInt(resolved.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [resolved.id]);

  return (
    <>
      <Header>Company ({resolved.id})</Header>
      <p className="pt-5 pl-10">{new Date().toTimeString()}</p>
    </>
  );
}
