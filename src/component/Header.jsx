import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className="h-[6vh] flex justify-between items-center min-w-[600vw] sticky top-0 z-50 px-4 md:px-12">
      {/* Logo with white rectangle background */}
      <a href="/">
        <img
          src={logo}
          alt="instahyre-logo"
          className="w-[16rem] sm:w-[20rem] lg:w-[25rem] h-auto object-contain mt-5 md:mt-[4rem]"
        />
      </a>
    </div>
  );
};

export default Header;
