import { IHotel } from '../../interfaces/IHotel';

/* NgRx */
import { Action } from '@ngrx/store';
import { IFavHotel } from 'src/interfaces/IFavHotel';

export enum HotelActionTypes {
  SetSelectedHotel = '[Hotel] Set Selected Hotel',
  ClearSelectedHotel = '[Hotel] Clear Selected Hotel',
  InitializeSelectedHotel = '[Hotel] Initialize Selected Hotel',

  Load = '[Hotel] Load',
  LoadSuccess = '[Hotel] Load Success',
  LoadFail = '[Hotel] Load Fail',

  UpdateHotel = '[Hotel] Update Hotel',
  UpdateHotelSuccess = '[Hotel] Update Hotel Success',
  UpdateHotelFail = '[Hotel] Update Hotel Fail',

  CreateHotel = '[Hotel] Create Hotel',
  CreateHotelSuccess = '[Hotel] Create Hotel Success',
  CreateHotelFail = '[Hotel] Create Hotel Fail',

  DeleteHotel = '[Hotel] Delete Hotel',
  DeleteHotelSuccess = '[Hotel] Delete Hotel Success',
  DeleteHotelFail = '[Hotel] Delete Hotel Fail'
}
export enum FavoriteHotelActionTypes {
    AddFavoriteHotel = '[Hotel] Add Favorite Hotel',
    DeleteFavoriteHotel = '[Hotel] Delete Favorite Hotel',
}

// Action Creators
export class SetSelectedHotel implements Action {
  readonly type = HotelActionTypes.SetSelectedHotel;

  constructor(public payload: IHotel) { }
}

export class InitializeSelectedHotel implements Action {
  readonly type = HotelActionTypes.InitializeSelectedHotel;
}

export class ClearSelectedHotel implements Action {
    readonly type = HotelActionTypes.ClearSelectedHotel;
  }

export class Load implements Action {
  readonly type = HotelActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = HotelActionTypes.LoadSuccess;

  constructor(public payload: IHotel[]) { }
}

export class LoadFail implements Action {
  readonly type = HotelActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class UpdateHotel implements Action {
  readonly type = HotelActionTypes.UpdateHotel;

  constructor(public payload: IHotel) { }
}

export class UpdateHotelSuccess implements Action {
  readonly type = HotelActionTypes.UpdateHotelSuccess;

  constructor(public payload: IHotel) { }
}

export class UpdateHotelFail implements Action {
  readonly type = HotelActionTypes.UpdateHotelFail;

  constructor(public payload: string) { }
}

export class CreateHotel implements Action {
  readonly type = HotelActionTypes.CreateHotel;

  constructor(public payload: IHotel) { }
}

export class CreateHotelSuccess implements Action {
  readonly type = HotelActionTypes.CreateHotelSuccess;

  constructor(public payload: IHotel) { }
}

export class CreateHotelFail implements Action {
  readonly type = HotelActionTypes.CreateHotelFail;

  constructor(public payload: string) { }
}

export class DeleteHotel implements Action {
  readonly type = HotelActionTypes.DeleteHotel;

  constructor(public payload: number) { }
}

export class DeleteHotelSuccess implements Action {
  readonly type = HotelActionTypes.DeleteHotelSuccess;

  constructor(public payload: number) { }
}

export class DeleteHotelFail implements Action {
  readonly type = HotelActionTypes.DeleteHotelFail;

  constructor(public payload: string) { }
}

export class AddFavoriteHotel implements Action {
    readonly type = FavoriteHotelActionTypes.AddFavoriteHotel;
  
    constructor(public payload: IFavHotel) { }
  }
  export class DeleteFavoriteHotel implements Action {
    readonly type = FavoriteHotelActionTypes.DeleteFavoriteHotel;
  
    constructor(public payload: number) { }
  }

// Union the valid types
export type HotelActions = SetSelectedHotel
  | ClearSelectedHotel
  | InitializeSelectedHotel
  | Load
  | LoadSuccess
  | LoadFail
  | UpdateHotel
  | UpdateHotelSuccess
  | UpdateHotelFail
  | CreateHotel
  | CreateHotelSuccess
  | CreateHotelFail
  | DeleteHotel
  | DeleteHotelSuccess
  | DeleteHotelFail;

  export type FavoriteHotelActions =
  AddFavoriteHotel
  | DeleteFavoriteHotel;