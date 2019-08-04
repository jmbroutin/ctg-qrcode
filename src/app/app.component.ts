import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  id = 0;
  title = "closethegap";
  randomX: number;
  randomY: number;
  randomZ: number;
  randomW: number;
  ngxQrcode2: string;
  randomCode: string;

  generateQrCode() {
    this.id = Math.floor(Math.random() * 100000 + 1);
    this.randomX = Math.floor(Math.random() * 899 + 100);
    this.randomY = Math.floor(Math.random() * 899 + 100);
    this.randomZ = Math.floor(Math.random() * 899 + 100);
    this.randomW = Math.floor(Math.random() * 899 + 100);
    this.ngxQrcode2 = "http://10.20.2.225:3000/form/" + this.id;
    this.randomCode =
      this.randomX +
      "-" +
      this.randomY +
      "-" +
      this.randomZ +
      "-" +
      this.randomW;
    console.log(this.id);
  }

  ngOnInit() {
    this.generateQrCode();
  }
}
