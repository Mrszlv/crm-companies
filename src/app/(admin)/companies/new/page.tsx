'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';

// export interface PageProps {}

export default function Page() {
  return (
    <div className="py-6 px-10">
      <CompanyForm
        onSubmit={(values) => {
          console.log('Form submitted with values:', values);
        }}
      />
    </div>
  );
}
