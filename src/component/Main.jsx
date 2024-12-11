import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

const Main = () => {
  // State to store the URL input, the response message, error, and loading state
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false); // New state for loader

  // Function to handle the Paste action
  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText(); // Read the clipboard
      setUrl(clipboardText);
    } catch (error) {
      alert('Failed to read clipboard contents: ' + error);
    }
  };

  // Function to handle the Download action
  const handleDownload = async () => {
    setMessage('');
    setError('');
    setVideoUrl('');
    setLoading(true); // Set loading state to true when the request starts

    try {
      const response = await axios.post('https://reeldown.io/reels/api/download/', { url });
      setMessage(response.data.message);
      setVideoUrl(response.data.video_url);
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred');
      }
    } finally {
      setLoading(false); // Set loading state to false once the request is completed
    }
  };

  // Function to handle saving the video file
  const handleSaveVideo = () => {
    if (videoUrl) {
      saveAs(videoUrl, `${url.split('/').slice(-2, -1)[0]}.mp4`);
    }
  };

  // Function to reset the form and state
  const handleReset = () => {
    setUrl('');
    setMessage('');
    setError('');
    setVideoUrl('');
  };

  return (
    <div className="max-w-full overflow-x-hidden py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 md:mt-[4rem] flex justify-center items-start overflow-hidden">
        <div className="min-h-[40vh] flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-lg p-6 sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%]">
          <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#4A90E2] mb-4">
            Instagram Reels Video Downloader
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Paste the URL of the Instagram Reel and download it instantly!
          </p>

          {!videoUrl && (
            <>
              <div className="w-full mb-4">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste URL here"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                />
              </div>

              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={handlePaste}
                  className="w-full sm:w-auto px-4 py-2 bg-[#FF5733] text-white rounded-lg hover:bg-[#FF5733] transition-all"
                >
                  Paste
                </button>

                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#4A90E2] transition-all"
                  disabled={loading} // Disable the button when loading
                >
                  {loading ? (
                    <span className="animate-spin mr-2">
                      <svg
                        className="w-5 h-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </span>
                  ) : (
                    'Download'
                  )}
                  <FaDownload className="ml-2" />
                </button>
              </div>
            </>
          )}

          {message && <p className="text-green-600 mt-4">{message}</p>}
          {error && <p className="text-red-600 mt-4">{error}</p>}
          {videoUrl && (
            <div className="mt-4 w-full max-w-md mx-auto">
              <video src={videoUrl} controls className="w-full max-h-96 rounded-lg shadow-lg" />
              <div className="flex justify-between mt-4 gap-4 flex-wrap">
                <button
                  onClick={handleSaveVideo}
                  className="flex-1 bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#4A90E2] transition-all text-center"
                >
                  Download Reel Video
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 bg-[#FF5733] text-white px-4 py-2 rounded-lg hover:bg-[#FF5733] transition-all text-center"
                >
                  Get More
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
