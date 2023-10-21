import { css } from "@emotion/css";
import { PHONE_NUMBER } from "../../constants/constants";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={mainClass}>
      <div className={boxClass}>
        <div className={contentClass}>
          <div className={footerBoxClass}>
            <h5 className={titleClass}>Навігація</h5>
            <p className={textClass}>Про нас</p>
            <p className={textClass}>Послуги</p>
          </div>
          <div className={footerBoxClass}>
            <h5 className={titleClass}>Контакти:</h5>
            <p className={textClass}>{PHONE_NUMBER}</p>
          </div>
          <div className={footerBoxClass}>
            <h5 className={titleClass}>Месенджери:</h5>
            <p className={textClass}>Telegram</p>
            <p className={textClass}>Viber</p>
          </div>
        </div>
        <div className={textClass}>© {year} Electro. Всі права захищені.</div>
      </div>
    </footer>
  );
};

const mainClass = css`
  ${"" /* background: #461b0d; */}
  background: #1A1A1A;
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
`;

const contentClass = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const titleClass = css`
  color: #fff;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
`;

const textClass = css`
  color: #fff;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

const footerBoxClass = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
