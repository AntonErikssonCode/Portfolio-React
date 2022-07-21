import IntroBackground from "../components/layout/IntroBackground";
import MainContent from "../components/layout/MainContent";

import Footer from "../components/layout/Footer";

import PastContainer from "../components/pastComponents/PastContainer";
import MetaTags from "../components/features/MetaTags";
function PastPage() {
  const backgroundGradient =
    "linear-gradient(54deg, rgba(2,0,36,1) 0%, var(--mainColor) 30%,var(--secondColor) 70%)";

  return (
    <div>
      <MetaTags title="Antons Past"/>
      <IntroBackground color={backgroundGradient} />
      <MainContent color={backgroundGradient} wrapperHeight="500vh">
        <PastContainer></PastContainer>
      </MainContent>
      <Footer />
    </div>
  );
}

export default PastPage;
