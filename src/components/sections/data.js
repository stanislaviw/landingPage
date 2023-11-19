import { ReactComponent as FisrtIcon } from "../assets/rabota-01.svg";
import { ReactComponent as SecondIcon } from "../assets/rabota-02.svg";
import { ReactComponent as FourthIcon } from "../assets/rabota-03.svg";
import { ReactComponent as ThirdIcon } from "../assets/rabota-10.svg";
import { ReactComponent as FifthIcon } from "../assets/rabota-05.svg";
import { ReactComponent as SixthIcon } from "../assets/rabota-06.svg";
import { ReactComponent as SeventhIcon } from "../assets/rabota-09.svg";
import { ReactComponent as EighthIcon } from "../assets/rabota-12.svg";
import { ReactComponent as NinthIcon } from "../assets/rabota-11.svg";

export const data = [
  {
    title: "Підключення електрообладнання",
    servises: [
      "Генератор",
      "Стабілізатор",
      "Вентиляція",
      "Електрокотел",
      "Електрична тепла підлога",
      "Частотник VF",
      "Мото-редуктор",
      "Заземлення",
    ],
    icon: <FisrtIcon />,
  },
  {
    title: "Сервіс електрообладнання",
    servises: ["Діагностика", "Ремонт", "Наладка"],
    icon: <SecondIcon />,
  },
  {
    title: "Розумний дім",
    servises: [
      "Моніторинг (електроенергії, води, газу, температури, тиску, CO2)",
      "Управління освітленням",
      "Бездротовий інтерфейс Wi-Fi (підключення, обслуговування)",
      "Віддалене керування навантаженням",
    ],
    icon: <ThirdIcon />,
  },
  {
    title: "Насоси та насосні станції",
    servises: [
      "Підключення електрообладнання",
      "Діагностика",
      "Ремонт електрообладнання",
      "Модернізація (підключення частотного перетворювача)",
      "Регулювання",
      "Налагодження електрообладнання (насосні станції, заглибні насоси)",
    ],
    icon: <FourthIcon />,
  },
  {
    title: "Басейни та сауни",
    servises: [
      "Електропостачання та заземлення",
      "Підключення електрообладнання",
      "Діагностика",
      "Ремонт електрообладнання",
      "Обслуговування",
    ],
    icon: <FifthIcon />,
  },
  {
    title: "Кухня (Електромеханічне та Електротеплове обладнання) ",
    servises: [
      "Електромеханічне обладнання (м’ясорубки, міксера, слайсера та ін.)",
      "Електротеплове (плити, жаровні, котли та ін.)",
      "Підключення",
      "Діагностика електрообладнання",
      "Ремонт",
      "Наладка",
    ],
    icon: <SixthIcon />,
  },
  {
    title: "Складання електрощитів (РЩ, АВР, ЩУР)",
    servises: [
      "Складання",
      "Монтаж",
      "Підключення",
      "Наладка",
      "Щит обліку з лічільником, щит освітлення, щит автоматичного управління обладнанням, щит автоматичного вводу резерву",
    ],
    icon: <SeventhIcon />,
  },
  {
    title: "Промислові системи автоматизації",
    servises: [
      "Підключення",
      "Ремонт",
      "Діагностика",
      "Сервісне обслуговування",
      "Наладка",
    ],
    icon: <EighthIcon />,
  },
  {
    title: "Ліфти та ескалатори",
    servises: [
      "Консультація стану",
      "Ремонт",
      "Наладка",
      "Діагностика",
      "Sigma, Schindler, Otis, Mizui, Euroformat",
    ],
    icon: <NinthIcon />,
  },
];
