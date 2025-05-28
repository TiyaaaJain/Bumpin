import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lokalfluencer</h3>
            <p className="text-gray-400">Connecting local businesses with authentic influencers.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/influencers" className="text-gray-400 hover:text-white">For Influencers</Link></li>
              <li><Link href="/customers" className="text-gray-400 hover:text-white">For Businesses</Link></li>
              <li><Link href="/workers" className="text-gray-400 hover:text-white">Join Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Email: kanishkashoroof@gmail.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lokalfluencer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;