export default function FAQPage() {
  const faqs = [
    {
      question: "What is Lokalfluencer?",
      answer: "Lokalfluencer is a platform that connects local businesses with micro-influencers and professionals to create authentic, hyperlocal marketing campaigns."
    },
    {
      question: "Who can join as an influencer?",
      answer: "Anyone with 500+ followers on Instagram who is passionate about their local community and creating authentic content can join as an influencer."
    },
    {
      question: "What types of businesses can register?",
      answer: "We welcome all local businesses including cafés, restaurants, shops, boutiques, service providers, creators, and artisans."
    },
    {
      question: "What professional roles are available?",
      answer: "We're looking for content creators, sales managers, marketing professionals, and community managers who can help grow our platform."
    },
    {
      question: "How does the matching process work?",
      answer: "We carefully match influencers with businesses based on location, niche, audience demographics, and mutual interests to ensure authentic partnerships."
    },
    {
      question: "Is there a fee to join?",
      answer: "Registration is free for all users. We only charge a small commission when successful partnerships are formed."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Frequently Asked Questions</span>
        </h1>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/30 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-purple-400">
                {faq.question}
              </h3>
              <p className="text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
