import * as forecastActions from './forecast.actions';

function setForecast(forecast) {
  return {
    location: forecast.location,
    forecast: {
      forecastday: forecast.forecast.forecastday
    },
    lastUpdate: Date.now()
  };
}

export function forecastReducer(state, action: forecastActions.forecastActions) {
  switch (action.type) {
    case forecastActions.show_error: {
      return {
        ...state, showError: action.payload
      };
    }
    case forecastActions.add_forecast: {
      return {...state,
            [action.payload.city]: setForecast(action.payload.forecast)
          };
    }
    default: return state;
  }
}


