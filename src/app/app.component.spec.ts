import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/lang.reducers';
import 'rxjs/add/operator/take';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainLayoutComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        RouterModule,
        RouterTestingModule.withRoutes(routes),
        BsDropdownModule.forRoot()
        ]
    });

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', async(() => {
    expect(compiled).toBeTruthy();
  }));

  it('should use english as default language', async(() => {
    const app = fixture.debugElement.componentInstance;
    app.translate.take(1).subscribe(content => {
    expect(content.lang).toEqual('en');
    });
  }));

  it('should translate english correctly', async(() => {
    const app = fixture.debugElement.componentInstance;
    app.switchLanguage('en');
    app.translate.take(1).subscribe(content => {
    expect(content.content.main).toEqual('Main Page');
    });
  }));

  it('should translate spanish correctly', async(() => {
    const app = fixture.debugElement.componentInstance;
    app.switchLanguage('es');
    app.translate.take(1).subscribe(content => {
      expect(content.content.main).toEqual('Página principal');
    });
  }));

  it('should translate french correctly', async(() => {
    const app = fixture.debugElement.componentInstance;
    app.switchLanguage('fr');
    app.translate.take(1).subscribe(content => {
      expect(content.content.main).toEqual('Page d\'accueil');
    });
  }));

});
