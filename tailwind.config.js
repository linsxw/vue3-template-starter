/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  /** 解决antd按钮透明问题 */
  corePlugins: {
    preflight: false,
  },
}
