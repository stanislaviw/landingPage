import { css } from "@emotion/css";

const ROUTES = ["Про нас", "Послуги", "Контакти"];

export const Header = () => {
  return (
    <header className={mainClass}>
      <div className={logoClass}>LOGO</div>
      <div className={routesBoxClass}>
        {ROUTES.map((item, index) => (
          <div className={routesClass} key={index}>
            {item}
          </div>
        ))}
      </div>
    </header>
  );
};

const mainClass = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const logoClass = css``;

const routesBoxClass = css`
  display: flex;
  align-items: center;
`;

const routesClass = css`
  background: red;
`;
