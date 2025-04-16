'use client';

import React from 'react';
import Link from 'next/link';

// export interface NotFoundProps {}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>
        <span className="text-red-600">404 ERROR</span> No such company found
      </p>
      <Link href="/companies" className="text-blue-400">
        Back to companies
      </Link>
    </div>
  );
}
