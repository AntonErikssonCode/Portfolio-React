import IntroBackground from "../components/layout/IntroBackground";
import MainContent from "../components/layout/MainContent";
import Footer from "../components/layout/Footer";
import ProjectContainer from "../components/projects/ProjectContainer";
import MetaTags from "react-meta-tags";
import AboutTheFuture from "../components/futureComponents/AboutTheFuture";
function FuturePage() {
  const backgroundGradient =
    "linear-gradient(54deg, rgba(255,51,0,1) 11%, rgba(105,63,255,1) 100%)";
  const meta = {
    title: "Some Meta Title",
  };
  return (
    <div>
      <MetaTags>
        <title>Antons Future</title>
      </MetaTags>
      <IntroBackground color={backgroundGradient} />

      <MainContent color={backgroundGradient}>
        <AboutTheFuture />
      </MainContent>
      <Footer />
    </div>
  );
}

export default FuturePage;
