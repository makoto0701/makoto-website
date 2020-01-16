import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  title = "Makoto Ogata";
  url_Facebook = "https://www.facebook.com/makoto.ogata.0701";
  goToFacebook() {
    window.open("https://www.facebook.com/makoto.ogata.0701");
  }
  constructor() {}

  ngOnInit() {}
}
