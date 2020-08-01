import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css']
})
export class LastPageComponent implements OnInit, OnDestroy {

  public restautrant_id = 16782899;
  public userData = [];
  public ratingFive = []
  public ratingFour = []
  public ratingThree = []
  public ratingTwo = []
  public ratingOne = []
  public pieChartLabels: string[] = ['More than four', 'More than three', 'More than two', 'More than one', 'More than zero'];
  public pieChartData: number[] = [this.ratingFive.length, this.ratingFour.length, this.ratingThree.length, this.ratingTwo.length, this.ratingOne.length];
  public pieChartType: string = 'pie';
  public currentRoute: string;


  constructor(public commonService: CommonService,public router: Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url    
    this.getUserDetails()
  }
  // event
  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

  //getting user details
  public getUserDetails = () => {
    setTimeout(() => {
      if(this.currentRoute){
    this.commonService.getApiCall(this.restautrant_id).subscribe(
      data => {
        this.userData = data['user_reviews'];
        this.ratingFive = this.userData.filter(item => item.review.rating >= 4)
        this.ratingFour = this.userData.filter(item => item.review.rating == 3)
        this.ratingThree = this.userData.filter(item => item.review.rating == 2)
        this.ratingTwo = this.userData.filter(item => item.review.rating == 1)
        this.ratingOne = this.userData.filter(item => item.review.rating == 0)
        this.pieChartData = [this.ratingFive.length, this.ratingFour.length, this.ratingThree.length, this.ratingTwo.length, this.ratingOne.length]
      },
      error => {
        alert('something went wrong')
      })
    }
    },6000)
  }//end user details

  ngOnDestroy(): void{
    this.currentRoute = null;    
  }

}
