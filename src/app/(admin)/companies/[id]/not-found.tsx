'use client';

import React from 'react';
import Link from 'next/link';

// export interface NotFoundProps {}

export default function NotFound() {
  return (
    <div>
      <p>No such company found</p>
      <Link href="/companies" className="text-blue-400">
        Back to companies
      </Link>
    </div>
  );
}
