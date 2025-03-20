import React from "react";
import gefest from "../../assets/GEFEST.png";
import eggs from "../../assets/eag.svg";
const Header = () => {
  return (
    <header className="bg-white fixed top-0 z-[999] left-0 right-0">
      <div className="w-[80%] max-w-[1400px] m-auto flex justify-between items-center py-4 ">
        <div className="flex items-center gap-10">
          <img src={gefest} alt="gefest" />
          <h1 className="text-[#000000] leading-5">
            Производство и продажа <br />
            металлопроката
          </h1>
        </div>
        <button className="py-3 px-5 bg-[#2D72CD] text-white cursor-pointer hover:bg-white duration-300 hover:text-[#2D72CD] border-[1px] border-[#2D72CD]">
          У вас уже есть поставщик?
        </button>
        <h1 className="flex flex-col items-end text-xl font-bold  ">
          +7 (495) 444-44-44
          <p className="flex items-center  gap-1 border-b border-dashed text-[#5284F7] text-sm cursor-pointer">
            <img src={eggs} alt="eggs" />
            Заказать обратный звонок
          </p>
        </h1>
      </div>
      <hr className="text-gray-400" />
    </header>
  );
};

export default Header;
