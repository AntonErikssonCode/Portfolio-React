import IntroBackground from "../components/layout/IntroBackground";
import MainContent from "../components/layout/MainContent";
import SkillsContainer from "../components/presentComponents/techs/SkillsContainer";
import Footer from "../components/layout/Footer";
import MetaTags from "react-meta-tags";
import ImgBoardContainer from "../components/presentComponents/boards/ImgBoardContainer";
import SecondContent from "../components/layout/SecondContent";

function PresentPage() {
  const backgroundGradient =
    "linear-gradient(54deg, rgba(255,51,0,1) 11%, rgba(105,63,255,1) 100%)";
  return (
    <div>
      <MetaTags>
        <title>Antons Present</title>
      </MetaTags>
      <IntroBackground color={backgroundGradient} />
      <MainContent color={backgroundGradient} wrapperHeight="400vh">
        <ImgBoardContainer />
        <SecondContent  color={backgroundGradient}>
          <SkillsContainer/>
        </SecondContent>

      </MainContent>
      <Footer />
    </div>
  );
}

export default PresentPage;
