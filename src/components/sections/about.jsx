import { css, cx } from "@emotion/css";
import { PHONE_NUMBER } from "../../constants/constants";
import { ReactComponent as CopyIcon } from "../../components/assets/copy.svg";
import { useState } from "react";

export const SectionsAbout = () => {
  const [isShown, setIsShown] = useState(false);

  let timeoutId;

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
      setIsShown(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setIsShown(false);
        timeoutId = null;
      }, 2000);
    } catch (err) {
      console.error("Не вдалося скопіювати текст: ", err);
    }
  };

  return (
    <section className={mainClass}>
      <div className={boxClass}>
        <div className={textBoxClass}>
          <h2 className={titleClass}>
            Електрик в Києві <br /> та області
          </h2>
          <p className={phoneClass}>
            <span type="button" onClick={handleClick}>
              {PHONE_NUMBER}
            </span>
            <CopyIcon
              className={iconClass}
              type="button"
              onClick={handleClick}
            />
            <div className={cx(toastClass, isShown && activeToast)}>
              Скопійовано
            </div>
          </p>
          <div>
            <p>Електрик, електромеханік, електрик КІПтаА.</p>
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
  position: relative;
`;

const iconClass = css`
  width: 60px;
  height: 60px;

  @media (max-width: 800px) {
    height: 30px;
    width: 30px;
  }

  @media (max-width: 400px) {
    height: 22px;
    width: 22px;
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

const toastClass = css`
  padding: 10px;
  border-radius: 9px;
  color: #fff;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
  background: #333333;
  height: 40px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  right: -30px;
  top: 100px;

  @media (max-width: 800px) {
    font-size: 12px;
    height: 30px;
    right: 0;
    top: 50px;
  }
`;

const activeToast = css`
  opacity: 1;
`;
