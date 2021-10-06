import * as OfferActionCreators from './offer';
import * as FilterActionCreators from './filter';
import * as SortActionCreators from './sort';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...OfferActionCreators,
  ...FilterActionCreators,
  ...SortActionCreators,
}
