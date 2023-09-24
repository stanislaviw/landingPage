import { css } from "@emotion/css";

const ROUTES = ["Про нас", "Послуги", "Контакти"];

export const Header = () => {
  return (
    <header className={mainClass}>
      <div className={boxClass}>
        <a className={logoClass} href="/">
          ELECTRO
        </a>
        <div className={routesBoxClass}>
          {ROUTES.map((item, index) => (
            <a href="/" className={routeClass} key={index}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

const mainClass = css`
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
  color: #1a1a1a;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);
`;

const boxClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;
`;

const logoClass = css`
  color: #4762ff;
  font-weight: 900;
`;

const routesBoxClass = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const routeClass = css`
  background: white;
  padding: 20px 5px;
  cursor: pointer;
  height: 100%;

  &:hover {
    background: #f8f8f8;
  }
`;
