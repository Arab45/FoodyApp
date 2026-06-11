function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-center py-6 mt-auto">
      <p className="text-lg font-semibold">
        © 2026 Foody. All rights reserved.
      </p>

      <p className="mt-2">
        Delicious meals made with love 🍽️
      </p>

      <p className="mt-2">
        Contact us:
        <a
          href="mailto:foody@gmail.com"
          className="text-yellow-300 ml-1 hover:underline"
        >
          foody@gmail.com
        </a>
      </p>
    </footer>
  )
}

export default Footer