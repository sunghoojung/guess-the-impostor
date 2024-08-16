// import header and sidebox components

import Header from "../components/header";
import SideBox from "../components/homePage/sideBox";

const Home: React.FC = () => {
    return (
      <div>
        <Header> </Header>
        <SideBox> </SideBox>
        <div className ="bg-black w-full h-[640px] absolute left-0 top-[810px] shadow-[0_4px_30px_0px_rgb(0,0,0)]">
  
        </div>
      </div>
    );
  }
  
  export default Home;