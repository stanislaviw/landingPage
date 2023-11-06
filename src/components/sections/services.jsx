import { css } from "@emotion/css";
import { SectionsServicesCard } from "./services-card";
import { data1 } from "./data";

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
        {data1.map((item, index) => (
          <SectionsServicesCard key={index} item={item} />
        ))}
      </div>
      <div className={footerClass}>
        <h4 className={titleClass}>Гарантія</h4>
        <p className={textClass}>На всі види послуг надається гарантія.</p>
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
  text-align: center;

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
