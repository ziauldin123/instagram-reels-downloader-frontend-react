import DownloadSteps from '../component/DownloadSteps';
import Faq from '../component/Faq';
import Features from '../component/Features';
import Main from '../component/Main';
import Content from '../component/Content'

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-sky-400 overflow-x-hidden">
      <Main />      
      {/* <Features /> */}
      <Content />
      <DownloadSteps />
      <Faq />      
    </div>
  );
};

export default Home;
