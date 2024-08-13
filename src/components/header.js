//import the mainlogo.png
import mainlogo from '../assets/images/mainlogo.png';
import amogus from '../assets/images/amogus.png';
import PrimaryButton from './common/primaryButton.js';

function Header(props) {
    return (
        <div>
            <div className="flex flex-row justify-between items-center px-[24px] py-[8px] h-[86px] w-[1920px] bg-white">
                <div>
                    <img src={amogus} alt="mainlogo" className = "h-[60px] w-[60px] bg-white"/>
                </div>
                <div className= "bg-white static w-[339px] h-[86px] flex flex-row justify-end items-center py-[16px]">
                    <div className= "mx-[16px] rounded-[8px] ">
                        <PrimaryButton field="ACCOUNT"> </PrimaryButton>
                    </div>
                    <div className ="rounded-[8px]">
                        <PrimaryButton field="PLAY"> </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}  

export default Header;