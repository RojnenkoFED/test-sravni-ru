import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { Offer } from "../../../../types/offer";

import OfferAmount from "./OfferAmount/OfferAmount";
import OfferLink from "./OfferLink/OfferLink";
import OfferLogo from "./OfferLogo/OfferLogo";
import OfferRequirements from "./OfferRequirements/OfferRequirements";
import OfferTitle from "./OfferTitle/OfferTitle";

type OfferItemProps = {
  offer: Offer;
}

const OfferItem = (props: OfferItemProps) => {
  const { offer } = props;
  const { isMediaQuery } = useTypedSelector( state => state.offer);
  return (
    <>
      <OfferLogo
        src={offer.organization.logo}
        organizationName={offer.organization.name}
      />
      <OfferTitle
        rateFrom={offer.rate.periods[0].rate.from}
        rateTo={offer.rate.periods[0].rate.to}
        offerName={offer.name}
      />
      <OfferAmount
        creditFrom={offer.rate.creditAmount.from}
        creditTo={offer.rate.creditAmount.to}
        periodFrom={offer.rate.periods[0].term.from}
        periodTo={offer.rate.periods[0].term.to}
        periodUnit={offer.rate.periods[0].termUnit}
        mediaQuery={isMediaQuery}
      />
      <OfferRequirements
        rateFrom={offer.rate.periods[0].rate.from}
        customerAge={offer.customerRequirements.age}
        lastExperience={offer.customerRequirements.lastExperience}
        documentsCount={offer.customerRequirements.documents}
        mediaQuery={isMediaQuery}
      />
      <OfferLink
        license={offer.organization.license}
        pseudoId={offer.id}
      />
    </>
  );
}

export default OfferItem;
