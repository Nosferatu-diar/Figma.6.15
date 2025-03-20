import gefest from "../../assets/GEFEST.png";
import dick from "../../assets/eag.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import last from "../../assets/last.png";
const Footer = () => {
  return (
    <footer className="bg-black text-white p-5 text-center mt-20 text-sm">
      <div className="w-[80%] m-auto max-w-[1400px] flex flex-col">
        {/* top */}
        <div className="flex items-end justify-between">
          <div className="flex items-start gap-5">
            <img src={gefest} alt="GEFEST" />
            <p className="text-start">
              Производство и продажа <br /> металлопроката
            </p>
          </div>
          {/* icons */}
          <div className="flex items-center gap-7 mt-5">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <img src={icon1} alt="icon" />
              </div>
              <p>Telegram</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <img src={icon2} alt="icon" />
              </div>
              <p>WhatsApp</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <img src={icon3} alt="icon" />
              </div>
              <p>Viber</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <img src={icon4} alt="icon" />
              </div>
              <p> Skype</p>
            </div>
          </div>
          <div>
            <p className="text-lg mb-2">+7 (495) 444-44-44</p>
            <a
              href="#"
              className="text-blue-400 hover:underline flex items-center"
            >
              <img src={dick} alt="dick" /> Заказать обратный звонок
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex items-end text-gray-400 justify-between mt-20">
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение </p>
          <div className="flex items-end gap-6">
            <p>Разработка сайта</p>
            <img src={last} alt="last" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
