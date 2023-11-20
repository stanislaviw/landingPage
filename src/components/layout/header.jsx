import { css } from "@emotion/css";
import { scrollToSection } from "../units/scrollToSection";
import { ROUTES } from "../../constants/constants";

export const Header = () => {
  return (
    <header id="top" className={mainClass}>
      <div className={boxClass}>
        <a className={logoClass} href="/landingPage">
          ELECTRO
        </a>
        <div className={routesBoxClass}>
          {ROUTES.map((item) => (
            <button
              onClick={() => scrollToSection(item.id)}
              className={routeClass}
              key={item.id}
            >
              {item.title}
            </button>
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

  @media (max-width: 800px) {
    padding: 0 10px;
  }
`;

const logoClass = css`
  color: #4762ff;
  font-weight: 900;
  font-family: Inter;
  padding: 2px 4px;
  border: 4px solid #4762ff;
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
  color: #333333;
  font-size: 16px;
  font-family: Inter;
  font-weight: 500;
  word-wrap: break-word;
  border: none;

  &:hover {
    background: #f4f6fa;
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`;
