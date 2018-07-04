import { Component, OnInit } from '@angular/core';
import { LoggingService} from '../logging.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle  = "Welcome to home page";
  // myString ="This is property binding";
  // obj ={
  //   name:"jeevi",
  //   age:"21"

  // };
 
 
  // alertMe(val){
  //   alert(val);
  // }

  constructor(private logger:LoggingService) {
    
  }
  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
