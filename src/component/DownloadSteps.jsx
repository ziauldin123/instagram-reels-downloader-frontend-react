import { FaCheckCircle } from 'react-icons/fa';

const DownloadSteps = () => {
  // Array of steps
  const steps = [
    {
      id: 1,
      title: 'Step 01',
      description:
        'Open the Instagram post, open the Reels video you want to download on Instagram.',
    },
    {
      id: 2,
      title: 'Step 02',
      description: 'Now copy that URL of the Instagram Reels video.',
    },
    {
      id: 3,
      title: 'Step 03',
      description:
        "Paste the Instagram copied URL into the toolbar on Reeldown and click the 'Download' button.",
    },
  ];

  return (
    <div className="w-full py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-white mb-10">
          How to Download Instagram Reels with Reeldown
        </h2>

        {/* Rendering Steps using map */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col sm:flex-row items-center justify-start text-lg max-w-full text-white bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mr-4">
                <FaCheckCircle size={28} className="text-[#FF5733]" />
              </div>
              
              {/* Title and Description */}
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-semibold text-[#4A90E2]">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-2">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadSteps;
