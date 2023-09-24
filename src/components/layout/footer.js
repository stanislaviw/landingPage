import { css } from "@emotion/css";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={mainClass}>
      <div className={boxClass}>
        <div className={contentClass}>
          <div className={logoClass}>ELECTRO</div>
          <div>
            <h5 className={titleClass}>Навігація</h5>
            <p className={textClass}>Про нас</p>
            <p className={textClass}>Послуги</p>
          </div>
          <div>
            <h5 className={titleClass}>Контакти:</h5>
            <p className={textClass}>+38 (099) 302 34 54</p>
            <p className={textClass}>+38 (099) 302 34 54</p>
          </div>
          <div>
            <h5 className={titleClass}>Месенджери:</h5>
            <p className={textClass}>Telegram</p>
            <p className={textClass}>Viber</p>
          </div>
        </div>
        <div className={textClass}>© {year} Electro. Всі права захищені.</div>
      </div>
    </footer>
  );
};

const mainClass = css`
  ${"" /* background: #461b0d; */}
  background: #1A1A1A;
  color: white;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const boxClass = css`
  max-width: 1280px;
  width: 100%;
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const contentClass = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const logoClass = css`
  color: #4762ff;
  font-weight: 900;
`;

const titleClass = css`
  color: white;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
`;

const textClass = css`
  color: white;
  font-size: 16px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;
