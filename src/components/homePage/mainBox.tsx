import Sidebox from './sideBox';
//import the mainlogo
import mainlogo from '../../assets/images/mainlogo.png';

const MainBox = () => {
    return (
        <div className = "flex flex-row justify-center items-center p-0 w-3/4">
            
            <img src={mainlogo} alt="mainlogo" className="lg:h-[350x] lg:w-[573px] 2xl:h-[463px] 2xl:w-[758px]" />
            
            <Sidebox />
        </div>
    );
}

export default MainBox;