import MainBox from './mainBox';
import "../../App.css";

interface BackgroundProps {
    children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children}) => {
    return (
        <div className="w-[full] h-[489px] absolute left-[313px] top-[191px] flex flex-row justify-center items-center p-0 my-gradient-background">
            <MainBox />
        </div>
    );
}

export default Background