import { css } from "@emotion/css";
import { PHONE_NUMBER } from "../../constants/constants";

export const SectionsContacts = () => {
  return (
    <section className={mainClass}>
      <div className={imageBoxClass}>
        <div className={imageClass}></div>
      </div>
      <div className={boxClass}>
        <div className={textBoxClass}>
          <h2 className={titleClass}>Про нас</h2>
          <p className={textClass}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur.
          </p>
        </div>
        <div className={textBoxClass}>
          <h2 className={titleClass}>Контакти</h2>
          <p className={textClass}>Зв'язатись з нами ви можете по телефону:</p>
          <p className={textClass}>{PHONE_NUMBER} (Павло)</p>
          <p className={textClass}>Або через месенджери по цьому ж номеру:</p>
          <p className={textClass}>Viber</p>
          <p className={textClass}>Telegram</p>
        </div>
      </div>
    </section>
  );
};

const mainClass = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

const boxClass = css`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
`;

const textBoxClass = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const titleClass = css`
  color: #333333;
  font-size: 40px;
  font-family: Inter;
  font-weight: 700;
  word-wrap: break-word;
  text-align: center;
`;

const textClass = css`
  color: rgba(51, 51, 51, 0.8);
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  word-wrap: break-word;
`;

const imageBoxClass = css`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imageClass = css`
  width: 100%;
  height: 100%;
  background: #4762ff;
`;
