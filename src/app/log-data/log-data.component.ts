import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-data',
  templateUrl: './log-data.component.html',
  styleUrls: ['./log-data.component.css']
})
export class LogDataComponent implements OnInit {

  secretPassword: string;
  constructor() { 
  }

  ngOnInit(): void {
  }
  getParagraph(): string{
    this.secretPassword = "jiss#45@01";
    return this.secretPassword;
  }

}
