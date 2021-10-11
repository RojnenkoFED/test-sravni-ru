import { useActions } from "../../../../hooks/useActions";

type TermProps = {
  term: number[];
  termTo: number;
};

export const Term = (props: TermProps) => {
  const { term, termTo} = props;
  const { setTermFilter} = useActions();
  return (
    <div>
      <label htmlFor="termSelect">Срок до</label>
      <select value={termTo} onChange={(e) => setTermFilter(+e.target.value)} id="termSelect">
        <option value="">Любой</option>
        {term?.map((year) => (
          <option key={year} value={year}>
            {year} лет
          </option>
        ))}
      </select>
    </div>
  );
};
