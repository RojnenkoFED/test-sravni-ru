import styles from "./OfferLink.module.scss";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { useActions } from "../../../../../hooks/useActions";

type OfferLinkProps = {
  license: string;
  pseudoId: string;
};

const OfferLink = (props: OfferLinkProps) => {
  const { offers } = useTypedSelector(state => state.offer);
  const { license, pseudoId } = props;
  const { setCurrentOfferPage } = useActions();
  const currentOffer = offers.find(item => item.id === pseudoId);

  return (
    <div className={styles.container}>
      <div className={styles.license}>
        <span aria-label="Номер лицензии">лиц.&nbsp;№ {license}</span>
      </div>
      <NavLink
        to={`/about/${pseudoId}`}
        className={styles.button}
        onClick={() => setCurrentOfferPage(currentOffer!)}>Узнать больше
      </NavLink>
    </div>
  );
};

export default OfferLink;
