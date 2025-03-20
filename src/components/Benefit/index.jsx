import React from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";
import rulon from "../../assets/rulon.png";

const Benefit = () => {
  return (
    <div className="mt-15">
      <div className="w-[80%] m-auto max-w-[1400px] flex flex-col">
        {/* text */}
        <h1 className="text-4xl text-[#213252] font-bold">
          Выгодные цены на <br />
          металлопрокат в Новосибирске
        </h1>
        <p className="text-[#213252] text-2xl mt-2">
          Обратитесь к менеджеру и он отправит вам цены на нужные позиции
        </p>
        <p className="text-2xl font-bold mt-10">
          Посмотрите какие товарные группы есть в наличии в Новосибирске
        </p>
        {/* sex Cards */}
        <div className="flex mt-10">
          <div>
            <img src={card1} alt="card" className="border-1 border-[gray]" />
          </div>
          <div>
            <img src={card2} alt="card" className="border-1 border-[gray]" />
          </div>
          <div>
            <img src={card3} alt="card" className="border-1 border-[gray]" />
          </div>
          <div>
            <img src={card4} alt="card" className="border-1 border-[gray]" />
          </div>
          <div>
            <img src={card5} alt="card" className="border-1 border-[gray]" />
          </div>
          <div>
            <img src={card6} alt="card" className="border-1 border-[gray]" />
          </div>
        </div>
        {/* main */}
        <div className="grid grid-cols-2 ">
          <div>
            <img src={rulon} alt="rulon " />
          </div>
          <div className="flex flex-col items-center justify-center border-1  ">
            <h1 className="text-[#213252] text-[24px] font-semibold">
              Штрипс, лента оцинкованная
            </h1>
            <ul className="list-disc text-[#213252] text-lg mt-10">
              <li>Оцинкованный штрипс</li>
              <li>Оцинкованная стальная лента</li>
              <li>Оцинкованная стальная лента</li>
            </ul>
            <button className="px-10 mt-30 mr-20 py-3 cursor-pointer bg-[#2D72CD] text-[white] hover:bg-white duration-300 hover:text-[#2D72CD] border-[1px] border-[#2D72CD]">
              Узнать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
