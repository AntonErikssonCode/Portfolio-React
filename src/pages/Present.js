import IntroBackground from "../components/layout/IntroBackground";
import MainContent from "../components/layout/MainContent";
import Footer from "../components/layout/Footer";

import MetaTags from "../components/features/MetaTags";
import PresentContainer from "../components/presentComponents/PresentContainer";
function PresentPage() {
  const backgroundGradient =
  "linear-gradient(150deg,var(--mainColor),var(--secondColor)";
  return (
    <div>
 <MetaTags title="Antons Present"/>
      <IntroBackground color={backgroundGradient} />
      <MainContent color={backgroundGradient} wrapperHeight="400vh">
      <PresentContainer/>
     
        

      
       

      </MainContent>
      <Footer />
    </div>
  );
}

export default PresentPage;
