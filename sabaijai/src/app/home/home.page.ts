import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dateC: any = new Date();
  date: string = this.dateC.getHours() + ':' + this.dateC.getMinutes() + ':' + this.dateC.getSeconds() ;


  constructor(private router: Router) {}

  dostresstest(){
    console.log("555555");
     this.router.navigate(['/stress-test']);
  }
  datetime(){
    return this.date
  }
  do_depressiontest(): void{
    console.log("666666");
    this.router.navigate(['/depressiontest']);
  }
  regis(){
    this.router.navigate(['/registerr']);
  }
  getkey(){
    return window.sessionStorage.getItem('id')
  }
}
