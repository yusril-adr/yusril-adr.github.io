'use client';

import { useEffect } from 'react';
import { registerSW } from '../lib/register-sw';

export function ServiceWorkerRegister() {
  useEffect(() => {
    registerSW();
  }, []);

  return null;
}