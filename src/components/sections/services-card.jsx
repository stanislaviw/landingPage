import { css } from "@emotion/css";

export const SectionsServicesCard = ({ item }) => {
  const { title, servises, icon } = item;

  return (
    <div className={mainClass}>
      <div className={imageBoxClass}>
        <div className={imageClass}>{icon}</div>
      </div>
      <div className={textBoxClass}>
        <h2 className={titleClass}>{title}</h2>
        <ul className={boxClass}>
          {servises.map((item, index) => (
            <li key={index} className={textClass}>
              - {item}.
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

const mainClass = css`
  background: #f4f6fa;
  border-radius: 9px;
  overflow: hidden;
  padding: 25px 28px;
  min-width: 300px;
  max-width: 350px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 800px) {
    padding: 15px 15px;
    min-width: 200px;
  }
`;

const imageBoxClass = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const imageClass = css`
  width: 168px;
  height: 168px;
  border-radius: 9px;
`;

const textBoxClass = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const titleClass = css`
  color: #333333;
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const boxClass = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const textClass = css`
  color: rgba(51, 51, 51, 0.8);
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
