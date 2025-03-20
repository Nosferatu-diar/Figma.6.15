import React from "react";
import warning from "../../assets/warning.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo33.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import doc1 from "../../assets/doc1.png";
import doc2 from "../../assets/doc2.png";
import doc3 from "../../assets/doc3.png";
import doc4 from "../../assets/doc4.png";

const Info = () => {
  return (
    <section>
      {/* How work */}
      <div className="w-[80%] max-w-[1400px] m-auto mt-20 flex flex-col gap-15">
        <h1 className="text-4xl font-semibold text-[#213252]">
          Какие еще выгоды от работы с нами?
        </h1>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl text-[#213252] font-semibold">
            Не платите за обрезь и лишние объемы
            <p className="text-[#213252] text-lg font-light mt-7">
              Вы платите только за чистый вес металлопроката <br /> без обрези.
              И покупаете то количество которое <br /> вам нужно, мы не
              округляем объемы.
            </p>
          </h1>
          <img src={warning} alt="warning" className="w-1/2" />
        </div>
      </div>
      <hr className="text-gray-300 mt-20" />

      {/* Buy everything in one place */}
      <div className="w-[80%] m-auto max-w-[1400px] flex gap-10 mt-15 justify-between">
        <h1 className="text-2xl text-[#213252] font-bold">
          Покупайте все в одном месте
          <p className="text-lg text-[#213252] font-light mt-7">
            За счет собственного проиизводства и производства
            <br /> на базе партнеров мы работаем <br />
            со всеми основными поставщиками сырья.
          </p>
        </h1>
        <div className="grid grid-cols-2 gap-15 items-center">
          <div className="flex items-center gap-3">
            <img src={logo3} alt="logo" />
            <img src={logo4} alt="logo" />
          </div>
          <div>
            <img src={logo1} alt="logo" />
          </div>
          <div>
            <img src={logo2} alt="logo" />
          </div>
          <div>
            <img src={logo5} alt="logo" />
          </div>
        </div>
      </div>
      {/* documents */}
      <div className="bg-[#F6F6F6]">
        <div className="w-[80%] max-w-[1400px] m-auto flex flex-col  gap-5 mt-20 items-start py-5 ">
          <h1 className="text-3xl text-[#213252] font-bold mt-10">
            Производимая продукция соответствует регламентам <br /> ГОСТ, ОСТ,
            ТУ и международным стандартам
          </h1>
          <p className="text-xl text-[#213252]">
            Вся металлопродукция проходит заводские испытания.
          </p>
          <span className="flex items-center justify-between gap-5 mt-10 mb-7">
            <div>
              <img src={doc1} alt="doc" />
            </div>
            <div>
              <img src={doc2} alt="doc" />
            </div>
            <div>
              <img src={doc3} alt="doc" />
            </div>
            <div>
              <img src={doc4} alt="doc" />
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Info;
