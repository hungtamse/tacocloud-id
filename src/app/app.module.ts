import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudTitleComponent } from './cloud-title/cloud-title.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { CartComponent } from './cart/cart.component';
import { GroupBoxComponent } from './group-box/group-box.component';
import { BigButtonComponent } from './big-button/big-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudTitleComponent,
    CloudTitleComponent,
    HomeComponent,
    DesignComponent,
    CartComponent,
    GroupBoxComponent,
    BigButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
