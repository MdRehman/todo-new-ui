import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeService } from '../service/data/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  welcomeMessage:String;
  name = ''
  constructor(private route: ActivatedRoute,private welcomeService:WelcomeService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']
  }


  getWelcomeMessage(){
      console.log(this.welcomeService.getWelcomeMessage().subscribe(
      response=>this.welcomeMessage=response.message

      ));

  }

  getWelcomeMessageWithPathVar(){
    console.log(this.welcomeService.getWelcomeMessageWithPath(this.name).subscribe(
    response=>this.welcomeMessage=response.message

    ));

}


}

export class WelcomeBean{
  
  constructor( public message:String){

  }
}
