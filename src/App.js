import FlexBox from "./Component/FlexBox";
import AsSoonOn from "./Component/Sections/AsSoonOn";
import Footer from "./Component/Sections/Footer";
import Header from "./Component/Sections/Header";
import MeetTheTeem from "./Component/Sections/MeetTheTeem";
import OurHappyClient from "./Component/Sections/OurHappyClient";
import OurLastestWork from "./Component/Sections/OurLastestWork";
import Testimonials from "./Component/Sections/Testimonials";
import WhatWeDo from "./Component/Sections/WhatWeDo";


function App() {
  return (
    <div className="App">
      <Header/>
      <WhatWeDo/>
     <OurLastestWork/>
      <Testimonials/>
      <OurHappyClient />
      <MeetTheTeem/>
      <Footer /> 
      <AsSoonOn/>
    </div>
  );
}

export default App;
