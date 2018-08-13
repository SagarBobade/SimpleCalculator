import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public Number1;
  public Number2;
  public Answer;
  public ErrorMessage;
  public percentageInfo;

  public calculate(index){
    if(index==5){
      this.percentageInfo = "Let to find 5% of 200, Insert 5 in first textbox and 200 in next";
      if((this.Number1!==null)&&(this.Number2!==null)&&(this.Number1!==undefined)&&(this.Number2!==undefined)){
      this.Answer = (this.Number1 * this.Number2)/100;
      this.ErrorMessage= "";
      }
    }
else{
    if(((this.Number1==undefined)||(this.Number2==undefined))&&(index!=6)){
      this.Answer = "";
      this.ErrorMessage = "Please add Number in both fields..!!!"
      this.percentageInfo="";
    }
         else{
    switch (index) {
        case 1:
            this.Answer = this.Number1 + this.Number2;
            this.ErrorMessage= "";
        break;
        case 2:
            this.Answer = this.Number1 - this.Number2;
            this.ErrorMessage= "";
        break;
        case 3:
        this.Answer = this.Number1 * this.Number2;
        this.ErrorMessage= "";    
        break;
        case 4:
        this.Answer = this.Number1 / this.Number2;
        this.ErrorMessage= "";
        break;
        case 6:
            this.Number1=null;
            this.Number2=null;
        this.Answer = "";
        this.ErrorMessage= "";
        this.percentageInfo="";
        break;    
      default:
        break;
    }
  }}
}}
