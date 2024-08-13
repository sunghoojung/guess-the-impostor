function PrimaryButton(props) {
  return (
    <button class="h-[50px] w-[100px] bg-black rounded-[8px]">
      <p className="text-white font-vt323 text-[25px] font-normal leading-[150%] tracking-[0%]">
        {props.field}
      </p>
    </button>
  );
}
export default PrimaryButton;
