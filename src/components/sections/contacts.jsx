import { css } from "@emotion/css";
import { PHONE_NUMBER } from "../../constants/constants";
import BACKGROUND_IMAGE from "../assets/background.png";

export const SectionsContacts = () => {
  return (
    <section className={mainClass}>
      <div className={contentClass}>
        <img src={BACKGROUND_IMAGE} className={imageClass} alt="background" />
        <div className={boxClass}>
          <div className={textBoxClass}>
            <h2 className={titleClass}>Інформація про нас</h2>
            <p className={textClass}>
              Також до основних послуг можна додати закупівлю обладнання,
              запчастин, елементів устаткування. Підбір електричного обладнання,
              роботи пов’язані з проектуванням електричних компонентів.
            </p>
          </div>
          {/* <div className={aboutBoxClass}>
            <h2 className={titleClass}>Контакти:</h2>
            <p className={textClass}>
              Зв'язатись з нами ви можете по телефону:
            </p>
            <p className={textClass}>{PHONE_NUMBER} (Павло)</p>
            <p className={textClass}>Або через месенджери по цьому ж номеру:</p>
            <p className={textClass}>Viber</p>
            <p className={textClass}>Telegram</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

const mainClass = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

const contentClass = css`
  width: 100%;
  height: 687px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const boxClass = css`
  display: flex;
  width: calc(100% - 140px);
  padding: 70px;
  background: #fff;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const textBoxClass = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const aboutBoxClass = css`
  ${textBoxClass};

  @media (max-width: 1100px) {
    display: none;
  }
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

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const imageClass = css`
  position: absolute;
  top: 5px;
  left: -5px;
  width: 1400px;
  height: 687px;
  background: #4762ff;
`;
