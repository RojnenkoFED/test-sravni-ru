import { useActions } from "../../../../hooks/useActions";

type BankProps = {
  banks: string[];
  bankName: string;
}

export const Bank = (props: BankProps) => {
  const { banks, bankName } = props;
  const { setBankFilter } = useActions();

  return (
    <div>
      <label htmlFor="bankSelect">Банк</label>
      <select value={bankName} onChange={(e) => setBankFilter(e.target.value)} id="bankSelect">
        <option value="">Любой</option>
        {banks?.map((bank) => (
          <option key={bank} value={bank}>
            {bank}
          </option>
        ))}
      </select>
    </div>
  );
};
