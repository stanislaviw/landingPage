import { css } from "@emotion/css";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Main } from "./components/layout/main";

export const App = () => {
  return (
    <div className={mainClass}>
      <div className={boxClass}>
        <Header />/
        <Main />
        <Footer />
      </div>
    </div>
  );
};

const mainClass = css`
  display: flex;
  justify-content: center;
  height: 100%;
  widht: 100%;
`;

const boxClass = css`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;
