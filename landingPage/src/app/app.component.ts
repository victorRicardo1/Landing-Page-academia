import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landingPage';
  show = false;

  showMessage(){
    if(this.show === false){
      this.show = true;
    }else{
      this.show = false;
    }
  }
}
