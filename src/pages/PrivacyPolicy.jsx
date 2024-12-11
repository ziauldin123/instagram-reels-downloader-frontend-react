import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container p-6 max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          Your privacy is important to us. Please read our Privacy Policy
          carefully to understand how we collect, use, and protect your
          information. By using our website, you consent to the practices
          described below.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Personal Identification Information
          </h2>
          <p className="mb-2">
            We may collect personal information from users in various ways,
            including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-2">
            <li>When users visit the website.</li>
            <li>
              When users fill out forms, subscribe to newsletters, or use
              features on the site.
            </li>
          </ul>
          <p>
            Users can always refuse to provide such information, but this may
            limit their access to certain features of the site.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Non-Personal Identification Information
          </h2>
          <p>
            We may gather non-personal identification information automatically
            when users interact with our website. This may include:
          </p>
          <ul className="list-disc pl-6">
            <li>Browser type and version.</li>
            <li>
              Device type and technical information (e.g., operating system,
              screen resolution).
            </li>
            <li>Internet service provider (ISP) and connection details.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Cookies and Tracking Technologies
          </h2>
          <p>
            Our website may use cookies to enhance user experience. Cookies are
            small files stored on a user’s device to track preferences and
            activity. You can adjust your browser settings to refuse cookies;
            however, this may limit functionality on some parts of our website.
          </p>
          <p>
            We do not use cookies to collect personal identification information
            without your explicit consent.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            How We Use Collected Information
          </h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6">
            <li>
              To personalize the user experience and improve our website
              functionality.
            </li>
            <li>To process requests and respond to user inquiries.</li>
            <li>To enhance site performance and ensure security.</li>
          </ul>
          <p>
            <strong>Note:</strong> We do not sell, trade, or rent personal
            identification information to others.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Advertising and Third-Party Services
          </h2>
          <p>
            We may use third-party advertising services that display ads on our
            website. These providers may use cookies to deliver relevant ads
            based on users' interests and browsing behavior.
          </p>
          <h3 className="text-xl font-semibold mt-4">Google Adsense</h3>
          <p>
            Our site may include Google Adsense advertisements. Google's use of
            the DART cookie enables it to serve ads tailored to user interests
            without collecting personally identifiable information. You can
            opt-out of DART cookies by visiting Google’s Ad Settings page:{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Ad Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
          <p>
            We adopt appropriate data collection, storage, and processing
            practices to protect against unauthorized access, alteration, or
            disclosure of personal information.
          </p>
          <p>
            However, no data transmission over the internet is entirely secure.
            Users acknowledge that they provide information at their own risk.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p>
            We reserve the right to update this policy at any time. Any changes
            will be reflected on this page, and we encourage users to review the
            policy periodically.
          </p>
          <p>
            <strong>Last Updated:</strong> [Insert Date]
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            Your Acceptance of These Terms
          </h2>
          <p>
            By using this site, you signify your agreement to this Privacy
            Policy. If you do not agree, please refrain from using the site.
            Continued use after updates will indicate your acceptance of any
            changes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
