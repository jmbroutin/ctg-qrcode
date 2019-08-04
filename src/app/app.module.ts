import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { QRCodeModule } from "angular2-qrcode";
import { NgxQRCodeModule } from "ngx-qrcode2";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, QRCodeModule, NgxQRCodeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
