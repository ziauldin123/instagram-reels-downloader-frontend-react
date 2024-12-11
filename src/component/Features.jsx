import { FaCheckCircle } from 'react-icons/fa';

const Features = () => {
  const data = [
    {
      id: '1',
      desc: [
        'Fast, easy and safe.',
        'No need to login to your Instagram account.',
        'You can download videos and pictures of Instagram just by clicking on a button.',
        'Save and download videos and photos in their original resolution and quality.',
        'Save and download Instagram Reels from personal accounts.',
        'Access downloaded content offline anytime.',
      ],
    },
  ];

  return (
    <div className="w-full py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-white mb-8">
          Why Choose Reeldown?
        </h2>

        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data[0].desc.map((feature, index) => (
            <div
              key={index}
              className="flex items-center min-h-[10vh] max-h-[20vh] text-lg text-white bg-white p-6 rounded-lg shadow-lg"
            >
              <FaCheckCircle className="text-green-500 mr-4" size={24} />
              <p className="text-black text-[1rem] ">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
