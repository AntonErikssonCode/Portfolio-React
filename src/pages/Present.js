import IntroBackground from "../components/layout/IntroBackground";
import MainContent from "../components/layout/MainContent";
import Footer from "../components/layout/Footer";

import MetaTags from "../components/features/MetaTags";
import PresentContainer from "../components/presentComponents/PresentContainer";
function PresentPage() {
  const backgroundGradient =
    "linear-gradient(54deg, rgba(255,51,0,1) 11%, rgba(105,63,255,1) 100%)";
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
