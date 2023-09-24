import { css } from "@emotion/css";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Main } from "./components/layout/main";

export const App = () => {
  return (
    <div className={mainClass}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const mainClass = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;
