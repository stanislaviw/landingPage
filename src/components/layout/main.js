import { css } from "@emotion/css";

export const Main = () => {
  return (
    <main className={mainClass}>
      <div className={boxClass}>Main</div>
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
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;
`;
