import { css } from "@emotion/css";
import { SectionsAbout } from "../sections/about";
import { SectionsServices } from "../sections/services";
import { SectionsContacts } from "../sections/contacts";

export const Main = ({ refs }) => {
  return (
    <main className={mainClass}>
      <div className={boxClass}>
        <SectionsAbout />
        <SectionsServices />
        <SectionsContacts />
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
  gap: 60px;
  width: 100%;
  max-width: 1280px;
  padding: 0 20px 20px 20px;
`;
