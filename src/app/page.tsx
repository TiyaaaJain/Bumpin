import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Lokalfluencer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Connect local businesses with micro-influencers and unleash the power of hyperlocal marketing
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/influencers" className="primary-button">
              Join as Influencer
            </Link>
            <Link href="/customers" className="primary-button">
              Promote My Shop
            </Link>
            <Link href="/workers" className="secondary-button">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="section-title">
            <span className="gradient-text">Why Choose Lokalfluencer?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-black/40 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">For Influencers</h3>
              <p className="text-gray-300">Monetize your local influence and help businesses in your community grow.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">For Businesses</h3>
              <p className="text-gray-300">Connect with authentic local influencers and reach your target audience effectively.</p>
            </div>
            <div className="bg-black/40 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">For Professionals</h3>
              <p className="text-gray-300">Join our team and help shape the future of local digital marketing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the revolution in local marketing today
          </p>
          <Link href="/contact" className="primary-button">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
