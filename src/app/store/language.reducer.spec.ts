import * as reducers from './language.reducer';

describe('language reducers', () => {
  it('should handle english language state', () => {
    let state;
    state = reducers.langReducer({}, { type: 'en' });
    expect(state).toEqual({ lang: 'en',
      content: {
        main: 'Main Page',
        weather: 'Weather',
        location: 'Location',
        day: 'Day',
        temperature: 'Temperature',
        country: 'country',
        errorMessage: 'no such city',
        forecast: 'Forecast'
      }
    });
  });

  it('should handle spanish language state', () => {
    let state;
    state = reducers.langReducer({}, {type: 'es'});
    expect(state).toEqual({lang: 'es',
      content: {
        main: 'Página principal',
        weather: 'Tiempo',
        location: 'Localización',
        day: 'Día',
        temperature: 'Temperatura',
        country: 'el país',
        errorMessage: 'no hay tal ciudad',
        forecast: 'Pronóstico'
    }
    });
  });

});
