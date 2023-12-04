import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../../header.component";
import { HeaderLogoComponent } from "./header-logo.component";

@NgModule({
  declarations: [HeaderComponent, HeaderLogoComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
