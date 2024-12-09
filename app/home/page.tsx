// app/home/page.tsx
import Link from 'next/link'

const Home = () => {
  return (
    <>
      {/* <header className="bg-green-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Green Roof Solutions
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header> */}

      <main>
        <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/COVER.png)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto text-center text-white relative z-10 pt-40">
            <h1 className="text-5xl font-semibold">Welcome to Green Roof Solutions</h1>
            <p className="mt-4 text-xl">Transforming your roof into a sustainable, eco-friendly space</p>
            <Link href="/services">
              <a className="mt-6 inline-block bg-green-600 text-white py-2 px-6 rounded-lg">Explore Our Services</a>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold">Green Roof Installation</h3>
                <p className="mt-4 text-lg">Eco-friendly roofing solutions designed to last.</p>
              </div>
              {/* Repeat for more services */}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Green Roof Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Home
