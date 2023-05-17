import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './shared/services/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SigninComponent } from './modules/signin/signin.component';
import { LoadingComponent } from "./shared/components/loading.component";
import { DashboardComponent } from './modules/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    DashboardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
