import { css } from "@emotion/css";
import { PHONE_NUMBER } from "../../constants/constants";

export const SectionsAbout = () => {
  return (
    <section className={mainClass}>
      <div className={boxClass}>
        <div className={textBoxClass}>
          <h2 className={titleClass}>
            Електрик в Києві <br /> та області
          </h2>
          <p className={phoneClass}>{PHONE_NUMBER}</p>
          <p>
            Ремонт будь-якої складності. Якісно, надійно <br /> професійно на
            віки та взагалі дуже класно усім раджу!
          </p>
        </div>
      </div>
      <div className={imageBoxClass}></div>
    </section>
  );
};

const mainClass = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: white;
  color: #1a1a1a;
  padding-top: 20px;
`;

const boxClass = css`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  gap: 16px;
`;

const textBoxClass = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const titleClass = css`
  color: #333333;
  font-size: 60px;
  font-family: Inter;
  font-weight: 700;
  line-height: 76px;
  word-wrap: break-word;
`;

const phoneClass = css`
  ${titleClass};
  color: #4762ff;
`;

const imageBoxClass = css`
  width: 500px;
  height: 500px;
  overflow: hidden;
  background: #4762ff;
`;
