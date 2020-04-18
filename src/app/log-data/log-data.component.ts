import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-data',
  templateUrl: './log-data.component.html',
  styleUrls: ['./log-data.component.css']
})
export class LogDataComponent implements OnInit {
  secretPassword: string;
  isShow: boolean = false;
  clickDataArray: Array<number> = [];
  inc: number = 100;
  constructor() {
  }

  ngOnInit(): void {
  }
  OnBtnClick(): string{
    // reverse the isShow property on each click
    this.isShow = !this.isShow;
    this.secretPassword = "jiss#45@01";
    return this.secretPassword;
  }
  OnBtnCount(): Array<number>{   
    this.clickDataArray.push(this.inc);
    this.inc += 2;
    return this.clickDataArray;
  }


}
