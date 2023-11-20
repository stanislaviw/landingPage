import { css } from "@emotion/css";
import { PHONE_NUMBER } from "../../constants/constants";
import { ReactComponent as ViberIcon } from "../assets/viber.svg";
import { ReactComponent as TelegramIcon } from "../assets/telegram.svg";
import { scrollToSection } from "../units/scrollToSection";

const VIBER_PHONE_NUMBER = "+380505693637";
const TELEGRAM_PHONE_NUMBER = "0505693637";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={mainClass}>
      <div className={boxClass}>
        <div className={contentClass}>
          <div className={footerBoxClass}>
            <h5 className={titleClass}>Навігація</h5>
            <button
              onClick={() => scrollToSection("services")}
              className={buttonClass}
            >
              Послуги
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={buttonClass}
            >
              Про нас
            </button>
          </div>
          <div className={footerBoxClass}>
            <h5 className={titleClass}>Контакти:</h5>
            <p className={textClass}>{PHONE_NUMBER}</p>
          </div>
          <div className={footerBoxClass}>
            <h5 className={titleClass}>Месенджери:</h5>
            <a
              href={`https://t.me/${TELEGRAM_PHONE_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className={mediaClass}
            >
              <TelegramIcon className={iconClass} alt="Telegram" />
              Telegram
            </a>
            <a
              href={`viber://add?number=${VIBER_PHONE_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className={mediaClass}
            >
              <ViberIcon className={iconClass} alt="Viber" />
              Viber
            </a>
          </div>
        </div>
        <div className={textClass}>© {year} Electro. Всі права захищені.</div>
      </div>
    </footer>
  );
};

const mainClass = css`
  background: #1a1a1a;
  color: white;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const boxClass = css`
  max-width: 1280px;
  width: 100%;
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 800px) {
    padding: 30px 10px 20px 10px;
  }
`;

const contentClass = css`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

const titleClass = css`
  color: #fff;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;

  @media (max-width: 800px) {
    font-size: 14px;
    text-align: center;
  }
`;

const textClass = css`
  color: #fff;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;

  @media (max-width: 800px) {
    font-size: 12px;
    text-align: center;
  }
`;

const footerBoxClass = css`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 800px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const mediaClass = css`
  ${textClass};
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;

  @media (max-width: 800px) {
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;

const iconClass = css`
  width: 20px;
  height: 20px;
`;

const buttonClass = css`
  background: none;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: flex-start;

  ${textClass};
`;
