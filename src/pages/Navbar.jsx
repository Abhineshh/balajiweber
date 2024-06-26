import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    const [hamburger, setHamburger] = useState(false);
   
    return (

        <nav className=" bg-red-600 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex justify-between flex-1 space-x-4">
                        <div>
                            <a href="/#saikumarreddy" className="flex items-center py-2 px-2 text-white hover:text-blue-500">
                                <span className="font-bold text-xl ">Balaji V</span>
                            </a>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link to="/" className="py-3 px-3 hover:bg-blue-600">Home</Link>
                            <Link to="/Projects" className="py-3 px-3 hover:bg-blue-600">Projects</Link>

                            <Link to="/Blog" className="py-3 px-3 hover:bg-blue-500">Blogs</Link>
                            <Link to="/Contact" className="py-3 px-3 hover:bg-blue-500">Contact</Link>
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setHamburger(!hamburger)} className="mobile-menu-button text-3xl">
                            {hamburger ? "✕" : "▤"}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${hamburger ? 'absolute' : 'hidden'} md:hidden min-w-full bg-stone-900 text-center`}>
                <Link to="/" className="block py-2 px-4 text-md text-center active:bg-blue-400 hover:bg-stone-500">Home</Link>
                <Link to="/Projects" className="block py-2 px-4 text-md text-center active:bg-stone-400 hover:bg-stone-500">Projects</Link>
                <Link to="/Youtube" className="block py-2 px-4 text-md  text-center active:bg-stone-400 hover:bg-stone-500">Youtube</Link>
                <Link to="/Contact" className="block py-2 px-4 text-md  text-center active:bg-stone-400 hover:bg-stone-500">Contact</Link>
                <Link to="/Blog" className="block py-2 px-4 text-md text-center active:bg-stone-400 hover:bg-stone-500">Blogs</Link>

            </div>

        </nav>

    )
}

export default Navbar