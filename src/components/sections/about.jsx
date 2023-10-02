import { css } from "@emotion/css";

export const SectionsAbout = () => {
  return (
    <section className={mainClass}>
      <div className={boxClass}>
        <div className={textBoxClass}>
          <h2 className={titleClass}>Електрик в Києві</h2>
          <p className={phoneClass}>+38 (050) 569-36-37</p>
          <p>
            Ремонт будь-якої складності. Якісно, надійно <br /> професійно на
            віки та взагалі дуже класно усім раджу!
          </p>
        </div>
        <div className={imageBoxClass}>df</div>
      </div>
      <div></div>
    </section>
  );
};

const mainClass = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: white;
  color: #1a1a1a;
  height: 600px;
`;

const boxClass = css`
  display: flex;
  justify-content: space-between;
  aling-items: center;
  gap: 16px;
  padding-top: 50px;
`;

const textBoxClass = css`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
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
  width: 300px;
  height: 600px;
  overflow: hidden;
`;
