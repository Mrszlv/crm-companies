import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  return (
    <>
      <Header>Company ({params.id})</Header>
      <p className="pt-5 pl-10">{new Date().toTimeString()}</p>
    </>
  );
}
