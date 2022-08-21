{
  import('tailwindcss').Config;
}
module.exports = {
  node: 'jit',
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontSize: {
      'text-1': '16px',
      'hot-2': '30px',
      'hot-3': '51px',
      'hot-4': '67px',
    },
  },
  plugins: [],
};
