import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
// import * as fromRoot from '../../state/app.state';
import * as fromHotels from './hotel.reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State  {
    hotels: fromHotels.HotelState;
}

// Selector functions
const getHotelFeatureState = createFeatureSelector<fromHotels.HotelState>('hotels');

export const getSelectedHotelId = createSelector(
    getHotelFeatureState,
    state => state.selectedHotelId
);

export const getLoading = createSelector(
    getHotelFeatureState,
    state => state.loading
);

export const getHotel = createSelector(
    getHotelFeatureState,
    state => state.hotel
);

export const getSelectedHotel = createSelector(
    getHotelFeatureState,
    getSelectedHotelId,
    (state, selectedHotelId) => {
        if (!selectedHotelId) {
            return null;
        } else {
            return selectedHotelId ? state.hotels.find(p => p.id === selectedHotelId) : null;
        }
    }
);

export const getHoels = createSelector(
    getHotelFeatureState,
    state => state.hotels
);

export const getHoelsCount = createSelector(
    getHotelFeatureState,
    state => state.hotelsCount
);

export const getError = createSelector(
    getHotelFeatureState,
    state => state.error
);

export const getFavoriteHoels = createSelector(
    getHotelFeatureState,
    state => state.favoriteHotels
);

export const getInformation = createSelector(
    getHotelFeatureState,
    state => state.information
);
