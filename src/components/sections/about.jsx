import { css } from "@emotion/css";
import { PHONE_NUMBER } from "../../constants/constants";
import { ReactComponent as CopyIcon } from "../../components/assets/copy.svg";

export const SectionsAbout = () => {
  const copyToClipboard = async (value) => {
    await navigator.clipboard.writeText(value.toString());
  };

  return (
    <section className={mainClass}>
      <div className={boxClass}>
        <div className={textBoxClass}>
          <h2 className={titleClass}>
            Електрик в Києві <br /> та області
          </h2>
          <p
            className={phoneClass}
            type="button"
            onClick={() => copyToClipboard(PHONE_NUMBER)}
          >
            {PHONE_NUMBER}
            <CopyIcon className={iconClass} />
          </p>
          <div>
            <p>Електрик, електромеханік, електрик КІПтаА</p>
            <p>Ремонт будь-якої складності. Якісно, надійно, професійно.</p>
          </div>
        </div>
      </div>
      {/* <div className={imageBoxClass}></div> */}
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
  padding: 20px 20px 0 20px;
  height: 600px;

  @media (max-width: 800px) {
    padding: 20px 10px 0 10px;
    height: 400px;
  }
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

const iconClass = css`
  width: 60px;
  height: 60px;

  @media (max-width: 800px) {
    height: 30px;
    width: 30px;
  }
`;

const titleClass = css`
  color: #333333;
  font-size: 60px;
  font-family: Inter;
  font-weight: 700;
  line-height: 76px;
  word-wrap: break-word;

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 40px;
  }
`;

const phoneClass = css`
  ${titleClass};
  color: #4762ff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  > svg {
    path {
      fill: #4762ff;
    }

    &:active {
      path {
        fill: transparent;
      }
    }
  }
`;

// const imageBoxClass = css`
//   width: 500px;
//   height: 500px;
//   overflow: hidden;
//   background: #4762ff;
// `;
