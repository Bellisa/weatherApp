import { IHotel } from '../../interfaces/IHotel';
import { HotelActionTypes, HotelActions, FavoriteHotelActionTypes, FavoriteHotelActions } from './hotel.actions';
import { IFavHotel } from 'src/interfaces/IFavHotel';

// State for this feature (Product)
export interface HotelState {
    loading: boolean;

    selectedHotelId: number | null;

    hotels: IHotel[];
    favoriteHotels: IFavHotel[];

    information: string;

    error: string;
}

const initialState: HotelState = {
    loading: true,
    selectedHotelId: null,
    hotels: [],
    favoriteHotels: [],
    information: '',
    error: ''
};

export function reducer(state = initialState, action: HotelActions | FavoriteHotelActions): HotelState {
  //  console.log('start state'+action.type+' : ',state,action);
    switch (action.type) {
        case HotelActionTypes.SetSelectedHotel:
            return {
                ...state,
                selectedHotelId: action.payload.id
            };

        case HotelActionTypes.ClearSelectedHotel:
            return {
                ...state,
                selectedHotelId: null
            };

        case HotelActionTypes.InitializeSelectedHotel:
            return {
                ...state,
                selectedHotelId: 0
            };

        case HotelActionTypes.LoadSuccess:
        
            return {
                ...state,
                loading: false,
                hotels: action.payload,
                selectedHotelId: action.payload&&action.payload.length>0?action.payload[0].id:0,
                error: ''
            };

        case HotelActionTypes.LoadFail:
            return {
                ...state,
                hotels: [],
                selectedHotelId: null,
                error: action.payload
            };

        case HotelActionTypes.UpdateHotelSuccess:
            const updatedHotels = state.hotels.map(
                item => action.payload.id === item.id ? action.payload : item);
            return {
                ...state,
                hotels: updatedHotels,
                // selectedHotelId: action.payload.id,
                error: ''
            };

        case HotelActionTypes.UpdateHotelFail:
            return {
                ...state,
                error: action.payload
            };

        // After a create, the currentProduct is the new product.
        case HotelActionTypes.CreateHotelSuccess:
            return {
                ...state,
                hotels: [...state.hotels, action.payload],
                // currentProductId: action.payload.id,
                error: ''
            };

        case HotelActionTypes.CreateHotelFail:
            return {
                ...state,
                error: action.payload
            };

        // After a delete, the currentProduct is null.
        case HotelActionTypes.DeleteHotelSuccess:
            return {
                ...state,
                hotels: state.hotels.filter(product => product.id !== action.payload),
                // currentProductId: null,
                error: ''
            };
        case FavoriteHotelActionTypes.DeleteFavoriteHotel:
            const el = state.favoriteHotels.find(hoel => hoel.hotel.id === action.payload);
            return {
                ...state,
                favoriteHotels: state.favoriteHotels.filter(hotel => hotel.hotel.id !== action.payload),
                information: `Hotel '${el.hotel.title}' was delete from favorite!`,
                error: ''
            };
        case FavoriteHotelActionTypes.AddFavoriteHotel:
            
            let fav = [...state.favoriteHotels];
            fav.push(action.payload);
            return {
                ...state,
                favoriteHotels: fav,
                information: `Hotel '${action.payload.hotel.title}' was added from favorite!`,
                error: ''
            };

        case HotelActionTypes.DeleteHotelFail:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
