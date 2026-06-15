import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-900 text-white px-8 py-5">
      <div className="flex justify-between items-center">
        
        {/* Brand */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">
            FreshBite 🍽️
          </h1>
          <p className="text-sm text-blue-200">
            Healthy food, fresh life
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex gap-8 text-lg font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-green-300 cursor-pointer">About</li>
          <li className="hover:text-red-300 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-200 cursor-pointer">Contact</li>
        </ul>

      </div>
    </header>
  )
}

export default Header