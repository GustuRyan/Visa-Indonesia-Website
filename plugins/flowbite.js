export default function ({ app }) {
    if (process.client) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js';
        script.defer = true;
        document.body.appendChild(script);
    }
}
