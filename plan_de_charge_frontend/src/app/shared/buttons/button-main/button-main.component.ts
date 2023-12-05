import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button-main",
  templateUrl: "./button-main.component.html",
  styleUrls: ["./button-main.component.scss"],
})
export class ButtonMainComponent {
  @Input() label: string = "Button";
  @Input() disabled: boolean = false;
  @Input() styleClass: string = "";
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  // Function triggered by the buttonClick
  handleClick(): void {
    this.buttonClick.emit();
  }

  getButtonClasses(): { [key: string]: boolean } {
    // Default class
    const defaultClass = "button-main";

    // Define additional classes based on the provided styleClass
    const additionalClasses: { [key: string]: boolean } = {
      "primary-button": this.styleClass === "primary-button",
      "secondary-button": this.styleClass === "secondary-button",
      "disabled-button": this.styleClass === "disabled-button",
    };

    // Combine default class and additional classes
    return {
      [defaultClass]: true,
      ...additionalClasses,
    };
  }
}
