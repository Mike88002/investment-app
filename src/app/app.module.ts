import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {InvestmentOutputComponent} from "./investment-output/investment-output.component";
import {HeaderComponent} from "./header/header.component";
import {BrowserModule} from "@angular/platform-browser";
import {UserInputModule} from "./user-input/user-input.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentOutputComponent
  ],
  imports: [UserInputModule, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
