import Header from "./components/header.js";
import "./App.css";
import mainlogo from "./assets/images/mainlogo.png";
import PrimaryButton from "./components/common/primaryButton.js";

function App() {
  return (
    <div>
      <Header> </Header>
      <div className="my-gradient-background">
          <div>
            <div>
              <img src={mainlogo} alt="mainlogo" className="h-[463px] w-[758px]" />
            </div>
            <div className="flex flex-col justify-end items-start p-0">
              <h1 className="text-black font-vt323 text-[45px] font-normal leading-[110%] tracking-[0%]">HOW TO PLAY</h1>
              <p className="text-black font-vt323 text-[22px] font-normal leading-[150%] tracking-[0%]">GUESS THE IMPOSTOR IS A GAME PLAYED BY FOUR PEOPLE. OUT OF A CHOSEN CATEGORY IS SELECTED A SPECIFIC WORD. CATEGORIES CAN RANGE FROM PEOPLE, PLACES, OR HOUSEHOLD ITEMS. THREE OF THE PEOPLE WILL KNOW THE WORD AND ONE DOESN'T (THE IMPOSTOR). IT IS THE GOAL OF THE THREE PEOPLE TO SUCCESSFULLY GUESS THE IMPOSTOR AND THE IMPOSTOR TO AVOID DETECTION. THE GAME HAS ROUNDS WHERE EVERYONE TYPES SOMETHING TO IDENTIFY THE WORD. VOTING CAN OCCUR AT ANY TIME AND THE GAME ENDS WHEN EVERYONE HAS VOTED.</p>
              <PrimaryButton field="PLAY">
              </PrimaryButton>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
