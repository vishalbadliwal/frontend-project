import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {

  userData = []
  restautrant_id = 16782899;
  currentRoute: string;

  constructor(public commonService: CommonService,public route:ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url    
    this.getUserDetails();
  }

  //getting user details
  public getUserDetails = () => {
    setTimeout(() => {
      if(this.currentRoute){
        this.commonService.getApiCall(this.restautrant_id).subscribe(
          data => {
            this.userData = data['user_reviews'];
          },
          error => {
            alert('something went wrong')
          })
      }
    }, 6000)
  }//end user details

  ngOnDestroy(): void{
    this.currentRoute = null;    
  }


}
