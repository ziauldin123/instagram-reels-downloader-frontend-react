import { FaGooglePlay, FaApple } from 'react-icons/fa';

const PlayStore = () => {
  return (
    <div className="w-[90%] mt-[4rem] border border-b-4 border-transparent bg-clip-border h-auto m-auto rounded-xl flex flex-col justify-center items-center text-center shadow-xl">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Download with Reeldown
      </h1>

      {/* Description */}
      <p className="text-lg text-white mb-6 max-w-md mx-auto">
        We now provide an app for Instagram video downloads. It's fast, easy,
        with no watermark and HD quality.
      </p>

      {/* Article - What is Instagram Reels? */}
      <div className="text-white max-w-lg mx-auto mb-6">
        <h2 className="text-xl font-semibold mb-2">What is Instagram Reels?</h2>
        <p className="text-lg">
          Instagram Reels is a new feature of Instagram that allows you to create short-form videos, with 2 options of length of 15 and 30 seconds. Although there are some similarities with TikTok, Reels still makes users excited by combining Instagram's outstanding editing functions. Users are free to edit and design interesting videos to create their own unique movies.
        </p>
      </div>

      {/* App Store buttons */}
      <div className="flex gap-6">
        {/* Google Play Store Button */}
        <a
          href="#"
          className="flex items-center justify-center gap-3 bg-green-500 text-white rounded-lg py-3 px-6 hover:bg-green-600 transition-all transform hover:scale-105"
        >
          <FaGooglePlay size={26} />
          <span className="text-sm font-semibold">Get it on Google Play</span>
        </a>

        {/* iOS App Store Button */}
        <a
          href="#"
          className="flex items-center justify-center gap-3 bg-black text-white rounded-lg py-3 px-6 hover:bg-gray-800 transition-all transform hover:scale-105"
        >
          <FaApple size={26} />
          <span className="text-sm font-semibold">
            Download on the App Store
          </span>
        </a>
      </div>
    </div>
  );
};

export default PlayStore;
