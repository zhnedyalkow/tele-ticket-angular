import { AuthService } from '../core/auth/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig } from '../config/app.config';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthGuardService, AuthGuardServiceLogin } from './auth/auth-guard.service';

@NgModule({
  providers: [
    { provide: AuthService, useClass: AuthService },
    { provide: AppConfig, useClass: AppConfig },
    { provide: AuthGuardService , useClass: AuthGuardService },
    { provide: AuthGuardServiceLogin , useClass: AuthGuardServiceLogin },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ]
})
export class CoreModule { }