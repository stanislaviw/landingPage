import { css } from "@emotion/css";
import { SectionsServicesCard } from "./services-card";

const data = [
  {
    title: "Підключення електроустаткування",
    servises: [
      "Діагностика несправностей",
      "Підлючення будь-яких приборів",
      "Ремонт",
      "Сервіс",
    ],
  },
  {
    title: "Насоси та насосні станції",
    servises: [
      "Підключення",
      "Діагностика",
      "Ремонт",
      "Роботи з наcосними станціями з управлінням частотного регулювання VF",
    ],
  },
  {
    title: "Електротехніка",
    servises: [
      "Підключення генераторів(діагностика/cервіс/ремонт",
      "Встановлення стабілізаторів напруги",
      "Збір електрощитів(битових та промислових)",
      "Сервіс",
    ],
  },
  {
    title: "Розумний дім",
    servises: [
      "Підключення",
      "Обслуговування",
      "Монтаж електропроводки для дому",
      "Підключення та установка відеоспостереження",
    ],
  },
  {
    title: "Промислові системи автоматизації",
    servises: [
      "Модернізація обладнання",
      "Налаштування",
      "Обслуговування",
      "Діагностика станків та електроприладів",
    ],
  },
  {
    title: "Басейни та сауни",
    servises: [
      "Обслуговування електропристроїв",
      "Діагностика блоків управління перетворювачів чистот",
    ],
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
  },
];

export const SectionsServices = () => {
  return (
    <section className={mainClass}>
      <div className={textBoxClass}>
        <h2 className={titleClass}>Послуги</h2>
        <p className={textClass}>
          Будь-які послуги, які не представлені <br /> тут в категоріях можуть
          бути обговорені по телефону
        </p>
      </div>
      <div className={servicesClass}>
        {data.map((item, index) => (
          <SectionsServicesCard key={index} item={item} />
        ))}
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
`;

const textClass = css`
  color: rgba(51, 51, 51, 0.8);
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

const servicesClass = css`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;
