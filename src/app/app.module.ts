import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  IgxNavigationDrawerModule,
  IgxNavbarModule,
  IgxLayoutModule,
  IgxRippleModule,
  IgxCardModule
} from "igniteui-angular";
// import { DevExtremeModule } from "devextreme-angular";
// import { DxPolarChartModule } from "devextreme-angular/ui/polar-chart";
import { DxTextBoxModule } from "devextreme-angular/ui/text-box";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TestpageComponent } from "./testpage/testpage.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [AppComponent, HomeComponent, TestpageComponent],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxCardModule,
    ChartsModule,
    // DxPolarChartModule,
    DxTextBoxModule
    // DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
