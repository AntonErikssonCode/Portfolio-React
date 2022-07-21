import IntroBackground from "../components/layout/IntroBackground";
import MainContent from "../components/layout/MainContent";
import Footer from "../components/layout/Footer";
import MetaTags from "../components/features/MetaTags";
import FutureContainer from "../components/futureComponents/FutureContainer";
function FuturePage() {
  const backgroundGradient =
    "linear-gradient(54deg, rgba(255,51,0,1) 11%, rgba(105,63,255,1) 100%)";

  return (
    <div>
 <MetaTags title="Antons Future"/>
      <IntroBackground color={backgroundGradient} />
      <MainContent color={backgroundGradient} wrapperHeight="380vh">
        <FutureContainer />
      </MainContent>
      <Footer />
    </div>
  );
}

export default FuturePage;
