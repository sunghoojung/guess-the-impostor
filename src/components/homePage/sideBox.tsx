import PrimaryButton from "../common/primaryButton";
import mainlogo from "../../assets/images/mainlogo.png";

//import app.css
import "../../App.css";
interface sideBoxProps {
  children?: React.ReactNode;
}

const SideBox: React.FC<sideBoxProps> = ({ children }) => {
  return (
    <>
      <div className="w-[1294px] h-[489px] absolute left-[313px] top-[191px] flex flex-row justify-center items-center p-0 my-gradient-background">
        <div>
          <img src={mainlogo} alt="mainlogo" className="h-[463px] w-[758px]" />
        </div>
        <div>
          <h1 className="text-black font-vt323 text-[45px] font-normal leading-[110%] tracking-[0%]">
            HOW TO PLAY
          </h1>
          <p className="text-black font-vt323 text-[22px] font-normal leading-[150%] tracking-[0%]">
            GUESS THE IMPOSTOR IS A GAME PLAYED BY FOUR PEOPLE. OUT OF A CHOSEN
            CATEGORY IS SELECTED A SPECIFIC WORD. CATEGORIES CAN RANGE FROM
            PEOPLE, PLACES, OR HOUSEHOLD ITEMS. THREE OF THE PEOPLE WILL KNOW
            THE WORD AND ONE DOESN'T (THE IMPOSTOR). IT IS THE GOAL OF THE THREE
            PEOPLE TO SUCCESSFULLY GUESS THE IMPOSTOR AND THE IMPOSTOR TO AVOID
            DETECTION. THE GAME HAS ROUNDS WHERE EVERYONE TYPES SOMETHING TO
            IDENTIFY THE WORD. VOTING CAN OCCUR AT ANY TIME AND THE GAME ENDS
            WHEN EVERYONE HAS VOTED.
          </p>
          <PrimaryButton field="PLAY"> </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default SideBox;
