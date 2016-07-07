import { ADD_OFFER, ADD_OFFERS } from './OfferActions';

// Initial State
const initialState = [];

const OfferReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_OFFERS :
      return action.offers;

    case ADD_OFFER :
      return [
        action.offer,
        ...state,
      ];

    default:
      return state;
  }
};

/* Selectors */

// Get all offers
export const getOffers = state => state.offers;

// Get single offer
export const getOffer = (state, id) => state.offers.find((s) => s.id === parseInt(id, 10));

// Export Reducer
export default OfferReducer;
