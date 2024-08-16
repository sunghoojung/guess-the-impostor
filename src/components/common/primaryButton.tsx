import React from 'react';

interface MyComponentProps {
  field: string;
  children?: React.ReactNode;
}

const PrimaryButton: React.FC<MyComponentProps> = ({field}) =>{
  return (
    <button className="h-[50px] w-[100px] bg-black rounded-[8px]">
      <p className="text-white font-vt323 text-[25px] font-normal leading-[150%] tracking-[0%]">
        {field}
      </p>
    </button>
  );
}
export default PrimaryButton;
