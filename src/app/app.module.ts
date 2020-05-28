import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AppPublishComponent} from './app.publish';
import {AppSubscribeComponent} from './app.subscribe';
import {AppUnSubscribeComponent} from './app.unsubscribe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppPublishComponent,
    AppSubscribeComponent,
    AppUnSubscribeComponent
  ],
    imports: [
        BrowserModule,
        ButtonsModule.forRoot(),
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
