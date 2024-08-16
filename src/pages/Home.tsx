// import header and sidebox components

import Header from "../components/homePage/header";
import Background from "../components/homePage/background";

const Home: React.FC = () => {
    return (
      <div>
        <Header> </Header>
        <Background> </Background>
        <div className ="bg-black w-full h-[640px] absolute left-0 top-[810px] shadow-[0_4px_30px_0px_rgb(0,0,0)]">
  
        </div>
      </div>
    );
  }
  
  export default Home;