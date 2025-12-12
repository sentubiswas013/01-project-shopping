import { createAction } from '@reduxjs/toolkit';
export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertData {
  title: string;
  autoHide?: boolean;
  type: AlertType;
}

export interface AlertState {
  show: boolean;
  data: AlertData;
}

const initialState: AlertState = {
  show: false,
  data: {
    title: '',
    autoHide: true,
    type: 'info',
  },
};

export const showAlert = createAction<AlertData>('alert/showAlert');
export const hideAlert = createAction('alert/hideAlert');

export default function alertReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case showAlert.type:
      return {
        show: true,
        data: {
          ...action.payload,
        },
      };
    case hideAlert.type:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}
