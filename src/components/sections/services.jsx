import { css } from "@emotion/css";
import { SectionsServicesCard } from "./services-card";
import { ReactComponent as FisrtIcon } from "../assets/rabota-01.svg";
import { ReactComponent as SecondIcon } from "../assets/rabota-02.svg";
import { ReactComponent as ThirdIcon } from "../assets/rabota-03.svg";
import { ReactComponent as FourthIcon } from "../assets/rabota-04.svg";
import { ReactComponent as FifthIcon } from "../assets/rabota-05.svg";
import { ReactComponent as SixthIcon } from "../assets/rabota-06.svg";
import { ReactComponent as SeventhIcon } from "../assets/rabota-09.svg";

const iconClass = css`
  width: 168px;
  height: 168px;
`;

const data = [
  {
    title: "Підключення електроустаткування",
    servises: [
      "Діагностика несправностей",
      "Підлючення будь-яких приборів",
      "Ремонт",
      "Сервіс",
    ],
    icon: <FisrtIcon className={iconClass} />,
  },
  {
    title: "Насоси та насосні станції",
    servises: [
      "Підключення",
      "Діагностика",
      "Ремонт",
      "Роботи з наcосними станціями з управлінням частотного регулювання VF",
    ],
    icon: <SecondIcon className={iconClass} />,
  },
  {
    title: "Електротехніка",
    servises: [
      "Підключення генераторів(діагностика/cервіс/ремонт",
      "Встановлення стабілізаторів напруги",
      "Збір електрощитів(битових та промислових)",
      "Сервіс",
    ],
    icon: <ThirdIcon className={iconClass} />,
  },
  {
    title: "Розумний дім",
    servises: [
      "Підключення",
      "Обслуговування",
      "Монтаж електропроводки для дому",
      "Підключення та установка відеоспостереження",
    ],
    icon: <FourthIcon className={iconClass} />,
  },
  {
    title: "Промислові системи автоматизації",
    servises: [
      "Модернізація обладнання",
      "Налаштування",
      "Обслуговування",
      "Діагностика станків та електроприладів",
    ],
    icon: <FifthIcon className={iconClass} />,
  },
  {
    title: "Басейни та сауни",
    servises: [
      "Обслуговування електропристроїв",
      "Діагностика блоків управління перетворювачів чистот",
    ],
    icon: <SixthIcon className={iconClass} />,
  },
  {
    title: "Ліфти",
    servises: [
      "Обслуговування",
      "Ремонт",
      "Пошук поломок",
      "Консультація по стану",
      "Запуск зупинених кабін",
      "Евакуація пасажирів",
    ],
    icon: <SeventhIcon className={iconClass} />,
  },
];

export const SectionsServices = () => {
  return (
    <section className={mainClass}>
      <div className={textBoxClass}>
        <h2 className={titleClass}>Послуги</h2>
        <p className={textClass}>
          Будь-які послуги, які не представлені тут в категоріях можуть бути
          обговорені по телефону
        </p>
      </div>
      <div className={servicesClass}>
        {data.map((item, index) => (
          <SectionsServicesCard key={index} item={item} />
        ))}
      </div>
      <div className={footerClass}>
        <h4 className={titleClass}>Гарантія</h4>
        <p className={textClass}>
          Від наших майстрів для вас діє пожиттєва гарантія на всі послуги, які
          представлені тут діє пожиттєва гарантія гарантія і ще там шось і ще
          там шось і ще там шось раздва три
        </p>
      </div>
    </section>
  );
};

const mainClass = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  padding: 0 20px;

  @media (max-width: 800px) {
    padding: 0 10px;
  }
`;

const textBoxClass = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
`;

const titleClass = css`
  color: #333333;
  font-size: 40px;
  font-family: Inter;
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const textClass = css`
  color: rgba(51, 51, 51, 0.8);
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
  width: 80%;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const servicesClass = css`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const footerClass = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
