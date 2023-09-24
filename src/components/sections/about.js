import { css } from "@emotion/css";

export const SectionsAbout = () => {
  return (
    <section className={mainClass}>
      <div className={boxClass}></div>
    </section>
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

const boxClass = css``;
