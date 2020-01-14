import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-testpage",
  templateUrl: "./testpage.component.html",
  styleUrls: ["./testpage.component.scss"]
})
export class TestpageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  chartType = "radar";
  chartOptions = {};

  chartLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  chartLegend = true;

  chartData = [
    {
      data: [
        52.3,
        56.1,
        117.5,
        124.5,
        137.8,
        167.7,
        153.5,
        168.2,
        209.9,
        197.8,
        92.5,
        51.0
      ],
      label: "Tokyo"
    },
    {
      data: [
        50.3,
        68.3,
        113.3,
        115.7,
        160.8,
        214.0,
        220.4,
        132.1,
        176.2,
        120.9,
        71.3,
        48.0
      ],
      label: "Kyoto"
    }
  ];
}
