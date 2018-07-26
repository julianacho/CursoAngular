import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
