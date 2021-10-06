import { Offer } from "../../types/offer";

export const addIdToOffer = (offers: Offer[]) => {
  return offers.map((offer, index) => ({...offer, id: offer.alias + index}));
}

export const setBanks = (offers: Offer[]) => {
  const bankSet =  offers.map(({ organization: {name}}) => name);
  return Array.from(new Set(bankSet));
}

export const setTerms = (offers: Offer[]) => {
  const termSet =  offers.map(({ rate: { periods: [{ term: { to }}] }}) => to / 12)
                         .sort((a, b) => a - b);
  return Array.from(new Set(termSet));
}


