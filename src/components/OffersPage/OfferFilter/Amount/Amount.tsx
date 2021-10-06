import React from 'react';
import { useActions } from '../../../../hooks/useActions';

export const Amount: React.FC = () => {
  const { setAmountFilter, deleteAmoutFilter } = useActions();

  const onAmountChange = (e: any) => {
    let timerId = setInterval(() => {
      if (e.target) {
        clearInterval(timerId);
        setAmountFilter(e.target.value)
        if (e.target.value === '') {
          deleteAmoutFilter();
        }
      }
    }, 300);
  }

  return (
    <div>
      <label htmlFor="amountInput">Стартовый взнос до, %</label>
      <input
        id="amountInput"
        type="text"
        placeholder="Введите значение"
        onChange={(e) => onAmountChange(e)}/>
    </div>
  );
}
