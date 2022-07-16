import IntroBackground from "../components/layout/IntroBackground";
import MainContent from "../components/layout/MainContent";
import SecondContent from "../components/layout/SecondContent";
import ProjectContainer from "../components/projects/ProjectContainer";
import Footer from "../components/layout/Footer";
import Timeline from "../components/pastComponents/Timeline";
import MetaTags from "react-meta-tags";
import Quote from "../components/pastComponents/Quote";

function PastPage() {
  const backgroundGradient =
    "linear-gradient(54deg, rgba(2,0,36,1) 0%, rgba(200,67,182,1) 30%, rgb(7, 184, 220) 70%)";


  return (
    <div>
      <MetaTags>
        <title>Antons Past</title>
      </MetaTags>
      <IntroBackground color={backgroundGradient} />
      <MainContent color={backgroundGradient}>
        <ProjectContainer />
        <SecondContent color={backgroundGradient}>
          <Timeline />
          <Quote />
        </SecondContent>
      </MainContent>
      <Footer />
    </div>
  );
}

export default PastPage;
