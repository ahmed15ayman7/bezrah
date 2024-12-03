import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#384131] to-[#778976] text-white py-3 px-6 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Logo Image using Next.js Image component */}
          <Image 
            src="/images/logg.png" 
            alt="Green Roof Solutions Logo" 
            width={44} // specify width
            height={44} // specify height
            className="object-contain pt-2" 
          />
          <Image 
            src="/images/remin.png" 
            alt="Green Roof Solutions Logo" 
            width={60} // specify width
            height={60} // specify height
            className="object-contain pt-2" 
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link href="/" className="text-white hover:text-gray-400 transition-all">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-400 transition-all">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-white hover:text-gray-400 transition-all">Services</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-400 transition-all">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
