import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tag-info",
  templateUrl: "./tag-info.component.html",
  styleUrls: ["tag-info.component.scss"],
})
export class TagInfoComponent {
  @Input() label: string = "";
  @Input() styleClass: string = "";

  getButtonClasses(): { [key: string]: boolean } {
    // Default class
    const defaultClass = "tag-info";

    // Define additional classes based on the provided styleClass
    const additionalClasses: { [key: string]: boolean } = {
      "cyan-tag-info": this.styleClass === "cyan-tag-info",
      "gray-tag-info": this.styleClass === "gray-tag-info",
      "red-tag-info": this.styleClass === "red-tag-info",
      "light-blue-tag-info": this.styleClass === "light-blue-tag-info",
      "green-tag-info": this.styleClass === "green-tag-info",
      "yellow-tag-info": this.styleClass === "yellow-tag-info",
    };

    // Combine default class and additional classes
    return {
      [defaultClass]: true,
      ...additionalClasses,
    };
  }
}
