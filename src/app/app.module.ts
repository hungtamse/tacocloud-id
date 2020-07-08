import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudTitleComponent } from './cloud-title/cloud-title.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { CartComponent } from './cart/cart.component';
import { GroupBoxComponent } from './group-box/group-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CloudTitleComponent,
    CloudTitleComponent,
    HomeComponent,
    DesignComponent,
    CartComponent,
    GroupBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
