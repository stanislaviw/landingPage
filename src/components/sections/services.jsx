import { css } from "@emotion/css";
import { SectionsServicesItem } from "./services-item";

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
        <SectionsServicesItem />
        <SectionsServicesItem />
        <SectionsServicesItem />
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
`;
