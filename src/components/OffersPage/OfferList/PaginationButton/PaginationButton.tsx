import styles from "./PaginationButton.module.scss";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

type PaginationButtonProps = {
  length: number;
}

const LIMIT = 10;

const PaginationButton = (props: PaginationButtonProps) => {
  const { shown } = useTypedSelector((state) => state.offer);
  const { setShowedOffers } = useActions();
  const { length } = props;
  const restOffers = length - shown;

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={() => setShowedOffers(shown + LIMIT)}>
        <span>
          Показать ещё {(LIMIT < restOffers) ? LIMIT : restOffers} из {restOffers}
        </span>
        <span className={styles.icon}>
          <svg viewBox="0 0 512 512">
            <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" />
            <path d="m368 277.332031h-90.667969v90.667969c0 11.777344-9.554687 21.332031-21.332031 21.332031s-21.332031-9.554687-21.332031-21.332031v-90.667969h-90.667969c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h90.667969v-90.667969c0-11.777344 9.554687-21.332031 21.332031-21.332031s21.332031 9.554687 21.332031 21.332031v90.667969h90.667969c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default PaginationButton;
