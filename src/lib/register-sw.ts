import CONFIG from '../data/config';

const unregisterAllSW = async () => {
  const registrations = await navigator.serviceWorker.getRegistrations();
  await Promise.all(registrations.map((registration) => registration.unregister()));

  // drop what the old worker cached so visitors get fresh files
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
  }
};

export const registerSW = () => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

  if (!CONFIG.IS_USING_SW) {
    unregisterAllSW()
      .then(() => console.log('Service Workers unregistered'))
      .catch((error) => console.log('Service Worker unregister failed:', error));
    return;
  }

  if (process.env.NODE_ENV !== 'production') return;

  navigator.serviceWorker
    .register('/sw.js')
    .then((registration) => {
      console.log('Service Worker registered successfully:', registration.scope);
    })
    .catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
};
