import { css } from "@emotion/css";
import { SectionsAbout } from "../sections/about";
import { SectionsServices } from "../sections/services";
import { SectionsGuarantee } from "../sections/guarantee";

export const Main = () => {
  return (
    <main className={mainClass}>
      <div className={boxClass}>
        <SectionsAbout />
        <SectionsServices />
        <SectionsGuarantee />
      </div>
    </main>
  );
};

const mainClass = css`
  background: white;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  background: white;
  color: black;
`;

const boxClass = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;
`;
