import React, { useState } from 'react';

const Faq = () => {
  // Array of FAQs
  const faqs = [
    {
      id: 1,
      question: 'Do you need a Login when downloading Reels?',
      answer:
        "Oh No, you don't need to login to your account, It'll be safe for you, And download is easy.",
    },
    {
      id: 2,
      question: 'Is it illegal to download videos from Instagram Reels?',
      answer:
        "You can download videos from Insta Reels. But if you use it for commercial purposes, or for other needs related to the owner's rights, you should contact the owner of the video. Reeldown is not responsible for copyright issues.",
    },
    {
      id: 3,
      question: 'Do I have to pay to download videos from Instagram Reels?',
      answer:
        'All free. We only insert ads for better product optimization and server maintenance.',
    },
    {
      id: 4,
      question: 'Am I limited in video downloads from Instagram?',
      answer:
        'You can freely download, unlimited downloads and of course free.',
    },
    {
      id: 5,
      question: 'Where will videos downloaded from Insta be saved?',
      answer:
        'Usually for phones, it will be saved in the download folder. For PC, please Ctrl + J to check download history.',
    },
  ];

  // State to manage which FAQ is active (open)
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the FAQ answer visibility
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  return (
    <div className="w-full py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10">
          Frequently Asked Questions (FAQ)
        </h2>

        {/* Loop through FAQ array and render each FAQ item */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <button
                className="w-full text-left text-xl font-semibold text-gray-800 flex justify-between items-center"
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-all text-[#FF5733] ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  &#9660;
                </span>
              </button>

              {activeIndex === index && (
                <div className="mt-4 bg-transparent text-gray-600 text-lg text-left">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
