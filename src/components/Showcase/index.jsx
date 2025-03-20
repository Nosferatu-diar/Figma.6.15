import React from "react";
import metal from "../../assets/metal.png";
import get from "../../assets/get.png";

const Showcase = () => {
  return (
    <section>
      <div className="w-[80%] max-w-[1400px] m-auto grid grid-cols-2 mt-30">
        <div className="flex flex-col gap-10 ">
          <h1 className="text-4xl leading-10 text-[#213252] font-bold">
            Металлопрокат в наличии в <br />
            Новосибирске от производителя <br />с доставкой до вас за 1-2 дня
            <br /> по цене ниже рыночной
          </h1>
          <p className="text-[#213252] text-xl">
            Склады и филиалы производства в 26 <br /> крупных городах по всей
            территории РФ
          </p>
          <div>
            <button className="px-30 py-3 cursor-pointer bg-[#2D72CD] text-white hover:bg-white duration-300 hover:text-[#2D72CD] border-[1px] border-[#2D72CD]">
              Получить прайс <br /> с персональными ценами
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={metal}
            alt="metal"
            className="translate-x-20  transition-transform scale-110"
          />
          <div>
            <img
              src={get}
              alt="get"
              className="absolute right-6 -bottom-5 w-[40%]"
            />
          </div>
        </div>
      </div>
      <hr className="mt-[70px]" />
    </section>
  );
};

export default Showcase;
