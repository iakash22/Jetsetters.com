/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "#6589bd",
        "heading-text": "#10439F"
      },
      backgroundImage: {
        'offer-image': "url(https://q-xx.bstatic.com/xdata/images/xphoto/714x300/316455553.jpeg?k=33c0362560b6aa7ff9ba2afc3ef8d120728107cf56cd1c006fcf0da8c1821735&o=)",
        "trip-image": "url(https://cf.bstatic.com/xdata/images/xphoto/540x405/292049346.webp?k=ad53f89eb6ed386bcdb6100d5c729e6db510900f74d8891baaab2bf2a2283631&o=)",
        "bg-image-none": "none",
      },
      fontFamily: {
        "heading": "",
        "content": "",
      },
      animation: {
        "ping": "ping 2s cubic-bezier(.21,.05,.98,-0.23) infinite"
      },
      keyframes: {
        ping: {
          "75 %, 100 %": {
            transform: "scale(2)",
            opacity: "0",
          }
        }
      }
    },
  },
  plugins: [],
}

