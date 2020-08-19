import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminServices } from '../Services/admin.services';


@Component({
  selector: 'app-top-performer',
  templateUrl: './top-performer.component.html',
  styleUrls: ['./top-performer.component.css']
})
export class TopPerformerComponent implements OnInit {

  searchUser1: any
  searchUser2: any = "top3Avg"
  //pipe param 
  param = ["top3Test", "top3Avg"]
  testUserDetails1: any
  avgMarksData: any
  //Chart data
  graph: any[];
  category: any = ["Java", "Spring", "English", "Soft Skill"];
  questions: any = ["32", "1000", "500", "750"];

  constructor(private dashboardService: AdminServices) {
    this.dashboardService.getAllExams().subscribe(data => {
      this.testUserDetails1 = data;
    }, err => {
      alert(err.error);
    });

    this.dashboardService.getTopPerformersAverage().subscribe(data => {
      this.avgMarksData = Object.values(data);
      console.log(this.avgMarksData);
    }, err => {
      alert(err.error);
    })
  }

  ngOnInit() {
    this.graph = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.category,
        datasets: [{
          data: this.questions,
          borderColor: '#3cba9f',
          backgroundColor: [
            "#3cb371",
            "#0000FF",
            "#9966FF",
            "#4C4CFF",
            "#00FFFF",
            "#f990a7",
            "#aad2ed",
            "#FF00FF",
            "Blue",
            "Red",
            "Blue"
          ],
          fill: true
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Questions vs Category'
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });

  }

}
