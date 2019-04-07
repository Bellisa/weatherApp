import { IHotel } from '../../../interfaces/IHotel';
import { HotelActionTypes, HotelActions, FavoriteHotelActionTypes, FavoriteHotelActions } from './hotel.actions';
import { IFavHotel } from 'src/interfaces/IFavHotel';

// State for this feature (Product)
export interface HotelState {
    loading: boolean;

    selectedHotelId: number | null;

    hotels: IHotel[];
    hotelsCount:number;
    favoriteHotels: IFavHotel[];

    information: string;

    error: string;
}

const initialState: HotelState = {
    loading: true,
    selectedHotelId: null,
    hotels: [],
    hotelsCount:0,
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
            case HotelActionTypes.LoadCountSuccess:          
            return {
                ...state,
                loading: false,
                hotelsCount: action.payload,
                error: ''
            };

        case HotelActionTypes.LoadFail:
            return {
                ...state,
                loading: false,
                hotels: [],
                selectedHotelId: null,
                error: action.payload
            };

        case HotelActionTypes.UpdateHotelSuccess:
            const updatedHotels = state.hotels.map(
                item => action.payload.id === item.id ? action.payload : item);
            return {
                ...state,
                loading: false,
                hotels: updatedHotels,
                // selectedHotelId: action.payload.id,
                error: ''
            };

        case HotelActionTypes.UpdateHotelFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        // After a create, the currentProduct is the new product.
        case HotelActionTypes.CreateHotelSuccess:
            return {
                ...state,
                loading: false,
                hotels: [...state.hotels, action.payload],
                // currentProductId: action.payload.id,
                error: ''
            };

        case HotelActionTypes.CreateHotelFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        // After a delete, the currentProduct is null.
        case HotelActionTypes.DeleteHotelSuccess:
            return {
                ...state,
                loading: false,
                hotels: state.hotels.filter(product => product.id !== action.payload),
                // currentProductId: null,
                error: ''
            };
        case FavoriteHotelActionTypes.DeleteFavoriteHotel:
            const el = state.favoriteHotels.find(hoel => hoel.hotel.id === action.payload);
            return {
                ...state,
                loading: false,
                favoriteHotels: state.favoriteHotels.filter(hotel => hotel.hotel.id !== action.payload),
                information: `Hotel '${el.hotel.title}' was delete from favorite!`,
                error: ''
            };
        case FavoriteHotelActionTypes.AddFavoriteHotel:
            
            let fav = [...state.favoriteHotels];
            fav.push(action.payload);
            return {
                ...state,
                loading: false,
                favoriteHotels: fav,
                information: `Hotel '${action.payload.hotel.title}' was added from favorite!`,
                error: ''
            };

        case HotelActionTypes.DeleteHotelFail:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
            case HotelActionTypes.ClearInfo:
            return {
                ...state,
                loading: false,
                information: ''
            };

        default:
            return state;
    }
}
