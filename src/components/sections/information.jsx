import { css } from "@emotion/css";
import BACKGROUND_IMAGE from "../assets/background.png";

export const SectionsInformation = () => {
  return (
    <section id="about" className={mainClass}>
      <div className={contentClass}>
        <img src={BACKGROUND_IMAGE} className={imageClass} alt="background" />
        <div className={boxClass}>
          <div className={textBoxClass}>
            <h2 className={titleClass}>Інформація про нас</h2>
            <p className={textClass}>
              Електрик із досвідом та відповідальним підходом до роботи готовий
              надати свої послуги у Києві та області. Незалежно від того, чи це
              потреба у встановленні нової електромережі, ремонті чи заміні
              електрообладнання, чи допомога у вирішенні проблем з електрикою,
              забезпечуємо професійний та якісний підхід до кожного завдання.
            </p>
            <p className={textClass}>
              Також до основних послуг можна додати закупівлю обладнання,
              запчастин, елементів устаткування. Підбір електричного обладнання,
              роботи пов’язані з проектуванням електричних компонентів.
            </p>
            <p className={lastBlockClass}>
              Eлектрик завжди готовий приїхати у зручний для вас час та
              оперативно вирішити ваше запитання з електроенергією. Наші послуги
              доступні з урахуванням потреб клієнта та гарантують безпеку та
              надійність електропостачання в вашому будинку чи офісі.
            </p>
          </div>
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
    width: calc(100% - 20px);
  }
`;

const textBoxClass = css`
  display: flex;
  width: 100%;
  flex-direction: column;
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
  line-height: 140%;
  word-wrap: break-word;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const lastBlockClass = css`
  ${textClass};

  @media (max-width: 800px) {
    display: none;
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
