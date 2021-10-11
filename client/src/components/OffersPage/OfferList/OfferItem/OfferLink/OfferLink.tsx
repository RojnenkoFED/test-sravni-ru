import styles from "./OfferLink.module.scss";
import { NavLink } from "react-router-dom";
import { useActions } from "../../../../../hooks/useActions";

type OfferLinkProps = {
  license: string;
  pseudoId: string;
};

const OfferLink = (props: OfferLinkProps) => {
  const { license, pseudoId } = props;
  const { fetchCurrentOffer } = useActions();

  return (
    <div className={styles.container}>
      <div className={styles.license}>
        <span aria-label="Номер лицензии">лиц.&nbsp;№ {license}</span>
      </div>
      <NavLink
        to={`/about/${pseudoId}`}
        className={styles.button}
        onClick={() => fetchCurrentOffer(pseudoId)}>Узнать больше
      </NavLink>
    </div>
  );
};

export default OfferLink;
