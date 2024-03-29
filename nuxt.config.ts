export default {
  plugins: [
    { src: '/plugins/flowbite.js', mode: 'client' }
  ],
  // Konfigurasi Nuxt.js Anda
  devtools: { enabled: true },
  css: ['/public/assets/css/main.css'], // Ubah path untuk mengarahkan ke direktori assets
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ['@nuxtjs/tailwindcss'], // Tambahkan modul Tailwind CSS jika belum ada
  googleFonts: {
    families: {
      'Ubuntu Mono': [400, 700] // Sesuaikan dengan kebutuhan Anda
    },
    display: 'swap'
  }
}
