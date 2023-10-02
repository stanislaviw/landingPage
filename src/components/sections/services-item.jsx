import { css } from "@emotion/css";

export const SectionsServicesItem = () => {
  return (
    <div className={mainClass}>
      <div className={textBoxClass}>
        <h2 className={titleClass}>Послуги</h2>
        <p className={textClass}>
          Будь-які послуги, які не представлені <br /> тут в категоріях можуть
          бути обговорені по телефону
        </p>
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
  width: 400px;
  height: 400px;
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
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  word-wrap: break-word;
`;

const textClass = css`
  color: rgba(51, 51, 51, 0.8);
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;
