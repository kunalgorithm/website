'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import * as Fathom from 'fathom-client';

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID || '', {
        includedDomains: ['kunal.sh']
      });
    }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.trackPageview();
    }
  }, [pathname]);

  return null;
}
