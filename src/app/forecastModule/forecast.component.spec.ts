import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterTestingModule } from '@angular/router/testing';
import { MainLayoutComponent } from '../layouts/main-layout.component';
import { ApiConfigModule } from './api.config/api.config.module';
import { forecastReducer } from './store/forecast.reducer';
import { ForecastEffects } from './store/forecast.effect';
import { ForecastComponent } from './forecast.component';
import { Routes } from '@angular/router';
import { ForecastService } from './forecast.service';
import { langReducer } from '../store/language.reducer';
import * as langActions from '../store/language.actions';
import { By } from '@angular/platform-browser';
import { ForecastStore } from './shared/interfaces/forecast.store.interface';

export const routes: Routes = [
{
path: 'forecast',
component: ForecastComponent
}
];
describe('Forecast', () => {

  let fixture: ComponentFixture<ForecastComponent>;
  let compiled: ForecastComponent;
  let store$: Store<ForecastStore>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainLayoutComponent,
        ForecastComponent
      ],
      providers: [
        ForecastService
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({appLanguage: langReducer}),
        StoreModule.forFeature('forecast', forecastReducer),
        EffectsModule.forRoot([]),
        ApiConfigModule,
        EffectsModule.forFeature([ForecastEffects]),
        HttpClientModule,
        RouterTestingModule.withRoutes(routes)
        ]
    });

    fixture = TestBed.createComponent(ForecastComponent);
    store$ = fixture.debugElement.injector.get(Store);
    store$.dispatch(new langActions.changeLangEN());
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the forecast component', async(() => {
    expect(compiled).toBeTruthy();
  }));

  it('should create a `FormGroup` for searchForecast form', () => {
    const component = fixture.componentInstance;
    expect(component.searchForm instanceof FormGroup).toBe(true);
  });

  it('should display correct translate for Forecast page', () => {
    const de = fixture.debugElement.query(By.css('#pageName'));
    expect(de.nativeElement.innerText).toEqual('Forecast');
  });
});
