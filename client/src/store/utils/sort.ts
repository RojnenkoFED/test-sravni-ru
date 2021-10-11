import { Offer } from "../../types/offer";

export const rateSort = (offers: Offer[]) => {
  const sortered  = [...offers];
  sortered.sort((a, b) => a.rate.periods[0].rate.from - b.rate.periods[0].rate.from);
  return sortered;
}

export const creditAmountSort = (offers: Offer[]) => {
  const sortered  = [...offers];
  sortered.sort((a, b) => a.rate.creditAmount.from- b.rate.creditAmount.from);
  return sortered;
}
