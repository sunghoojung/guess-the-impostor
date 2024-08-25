
interface FooterProps {
    children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({children}) => {
    return (
        <div className="bg-white absolute w-full h-[248px] left-0 top-[1450px] z-0">
            <div className="flex flex-row justify-between items-center pb-[3px]">
                <div className="text-black font-inter text-[24px] font-normal leading-[150%] tracking-[0%] text-left">
                    Guess the Impostor
                </div>
                <div className="text-[#454545] font-inter text-[16px] font-medium leading-[150%] tracking-[0%] text-right">
                    Website designed by Sunghoo Jung
                </div>
            </div>
        </div>
    );
}

export default Footer;