import React from "react";
import factory from "../../assets/showcase.png";
import info1 from "../../assets/info1.png";
import info2 from "../../assets/info2.png";
import info3 from "../../assets/info3.png";
import info4 from "../../assets/info4.png";
import bg from "../../assets/bg.png";

const Support = () => {
  return (
    <section>
      <div className="w-[80%] max-w-[1400px] m-auto flex flex-col gap-5 mt-20">
        <h1 className="text-4xl text-[#213252] font-semibold">
          Поддерживаем остатки на наших складах
        </h1>
        <p className="text-xl text-[#213252]">
          благодаря тщательно спланированному объему производства и сбыта
        </p>
        <div className="flex mt-10">
          <div className="w-[50%] flex flex-col gap-5">
            <span className="flex gap-5 items-center">
              <img src={info1} alt="" />
              <h1 className="text-[20px] text-[#213252] font-semibold">
                Штрипс, полоса
                <p className="text-[20px] text-[#213252] font-light">
                  более 1 000 тонн
                </p>
              </h1>
            </span>
            <span className="flex gap-5 items-center">
              <img src={info2} alt="" />
              <h1 className="text-[20px] text-[#213252] font-semibold">
                Профиль
                <p className="text-[20px] text-[#213252] font-light">
                  более 200 тонн
                </p>
              </h1>
            </span>
            <span className="flex gap-5 items-center">
              <img src={info3} alt="" />
              <h1 className="text-[20px] text-[#213252] font-semibold">
                Сетка
                <p className="text-[20px] text-[#213252] font-light">
                  более 300 тонн
                </p>
              </h1>
            </span>
            <span className="flex gap-5 items-center">
              <img src={info4} alt="" />
              <h1 className="text-[20px] text-[#213252] font-semibold">
                Профлист
                <p className="text-[20px] text-[#213252] font-light">
                  более 300 тонн
                </p>
              </h1>
            </span>
          </div>
          <img src={factory} alt="factory" />
        </div>
      </div>
      <div className="w-[80%] max-w-[1400px] m-auto mt-20">
        <img src={bg} alt="bg" className="absolute " />
        <h1 className="text-center text-[40px] font-semibold relative text-white top-[50px]">
          Мы продумали всё, чтобы вы могли <br />
          купить металлопрокат по выгодной цене
          <br />и с доставкой за 2-3 дня
        </h1>
      </div>
    </section>
  );
};

export default Support;
