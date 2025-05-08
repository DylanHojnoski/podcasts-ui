import { Component } from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.css'
})
export class DarkModeComponent {
  html = document.documentElement;
  dark = "false";

  ngOnInit(): void {
    const mode = localStorage.getItem("dark");
    if (mode != null) {
      this.dark = mode;
      if (this.dark == "true") {
        this.html.classList.add("dark");
        this.dark = "true";
      }
    }

  }

  toggle() {
      if (this.html.classList.contains("dark")) {
        this.html.classList.remove("dark");
        this.dark = "false";
        localStorage.setItem("dark", "false")
      }
      else {
        this.html.classList.add("dark");
        this.dark = "true";
        localStorage.setItem("dark", "true")
      }

  }

}
