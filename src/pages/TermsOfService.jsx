
const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-sky-400 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms of Service - Reeldown™</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Acceptance of Terms of Service</h2>
          <p className="text-gray-600 mt-2">
            By accessing and using our application and website, you signify your acceptance of our policy and ToS,
            including the updated versions. If you do not agree with any content, please do not use our application and
            website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Who may use our Services (User)</h2>
          <p className="text-gray-600 mt-2">
            Our ToS governs the relationship between Reeldown application (Reeldown App) and Reeldown website
            (Reeldown Web) and users of Reeldown App and Web. By accessing or using Reeldown Products and Services,
            you confirm that you have carefully read, understood, and accepted our ToS, and you agree to abide by it.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Users' Obligations</h2>
          <p className="text-gray-600 mt-2">
            You agree to use Reeldown App and Web, Reeldown Products and Services only for purposes permitted by our
            ToS as well as applicable law. Reeldown is not responsible for any violation of laws committed by you.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Trademark Issue</h2>
          <p className="text-gray-600 mt-2">
            Reeldown respects trademark rights. Our trademark Reeldown™ must be used only in relation to our services
            and in the exact format provided.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Copyright Issue</h2>
          <p className="text-gray-600 mt-2">
            Reeldown respects copyrights and complies with copyright laws. Users are responsible for ensuring they
            have the legal right to use content downloaded via Reeldown.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Privacy</h2>
          <p className="text-gray-600 mt-2">
            Reeldown runs its services in compliance with principles to protect user confidentiality and does not
            disclose personal information to third parties.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Disclaimer</h2>
          <p className="text-gray-600 mt-2">
            The Content and Materials on Reeldown are provided "as is" without any warranties. Reeldown does not
            guarantee accuracy or reliability of the provided content.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Accuracy of Content and Materials</h2>
          <p className="text-gray-600 mt-2">
            Reeldown does not guarantee the accuracy or completeness of the Content and Materials on its platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Changes to Terms of Service</h2>
          <p className="text-gray-600 mt-2">
            These Terms of Service may be updated from time to time. Users are responsible for reviewing updates before
            using the platform.
          </p>
        </section>

        <footer className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Reeldown™. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
