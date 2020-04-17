import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-data',
  templateUrl: './log-data.component.html',
  styleUrls: ['./log-data.component.css']
})
export class LogDataComponent implements OnInit {
  secretPassword: string;
  clickDataArray: Array<number> = [];
  inc: number = 100;
  constructor() {
  }

  ngOnInit(): void {
  }
  OnBtnClick(): string{
    this.secretPassword = "jiss#45@01";
    return this.secretPassword;
  }
  OnBtnCount(): Array<number>{   
    this.clickDataArray.push(this.inc);
    this.inc += 2;
    return this.clickDataArray;
  }
  getBgColor(): string{
    if(this.clickDataArray.length >= 5){
      return "red";
    }
  }

}
