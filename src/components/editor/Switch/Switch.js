import React from "react";

const buttonsInfo = ["HTML", "CSS", "JS", "Page"];

const Switch = () => {
  return (
    <div className="width-100 height-auto flex p-2">
      {buttonsInfo.map((item) => (
          <button className="langButton p-2 pr-4 pl-4 font-head color 
            bg-primary c-pointer br-none br-b-solid br-b-4 br-b-bg">
          {item}
        </button>
      ))}
    </div>
  );
};

export { Switch };
