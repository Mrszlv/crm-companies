'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const resolved = React.use(params);
  const router = useRouter();
  return (
    <PromotionFormModal
      companyId={resolved.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
