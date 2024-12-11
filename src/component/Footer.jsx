import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tools Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 ">Tools</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline  transition-all">
                  Instagram Story Downloader
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline  transition-all">
                  Instagram Reels Downloader
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline  transition-all">
                  Instagram Profile Picture Downloader
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 ">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="hover:underline  transition-all">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline  transition-all">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 ">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-service" className="hover:underline  transition-all">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:underline  transition-all">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center text-lg">
          <p>We are not affiliated with Instagram or Meta.</p>
          <p className="mt-4 ">
            &copy; 2024 Reeldown. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
