// src/serviceWorkerRegistration.js

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname === '127.0.0.1'
);

export function register() {
    if ('serviceWorker' in navigator) {
        const swUrl = '/service-worker.js'; // Directly use the path to the service worker file

        if (isLocalhost) {
            checkValidServiceWorker(swUrl);
        } else {
            registerValidSW(swUrl);
        }
    }
}

function registerValidSW(swUrl) {
    navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
}

function checkValidServiceWorker(swUrl) {
    fetch(swUrl)
        .then((response) => {
            if (response.status === 404 || response.headers.get('content-type')?.indexOf('javascript') === -1) {
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then(() => {
                        window.location.reload();
                    });
                });
            } else {
                registerValidSW(swUrl);
            }
        })
        .catch(() => {
            console.log('No internet connection found. App is running in offline mode.');
        });
}
