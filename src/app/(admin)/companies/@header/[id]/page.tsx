import React from 'react';

import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const resolved = React.use(params);

  return <Header>{`Company (${resolved.id})`}</Header>;
}
