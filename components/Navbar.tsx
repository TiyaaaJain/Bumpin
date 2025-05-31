import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Lokalfluencer
          </Link>
          <div className="space-x-6">
            <Link href="/influencers" className="hover:text-gray-300">
              Influencers
            </Link>
            <Link href="/customers" className="hover:text-gray-300">
              Businesses
            </Link>
            <Link href="/workers" className="hover:text-gray-300">
              Join Team
            </Link>
            <Link href="/FAQs" className="hover:text-gray-300">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
