import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // hours:any = new Date().getHours();
  // minutes :any = new Date().getMinutes()

  date_ :any = null;
  
  username: any;
  url: string = "http://localhost/appdata/loaddatausersmember.php"
  user_id:any;
  dataJ:any;
  id:any;
  date_regis:any;

  constructor(private router: Router, public http: HttpClient,private activatedRoute:ActivatedRoute) {

    this.user_id = (this.activatedRoute.snapshot.paramMap.get('id'));
    let data = JSON.parse(this.user_id);
    this.dataJ = data;
    this.username = this.dataJ.name
    this.id = this.dataJ.id
    this.date_regis = this.dataJ.date

    // console.log(this.dataJ.id);
    
    
    
    
    
   }

  dostresstest() {
    console.log("555555");
    this.router.navigate(['stress-test/' +JSON.stringify({'name':this.username,'id' : this.id,'date':this.date_regis})]);
  }
  alldiary() {
    this.router.navigate(['alldairy/'+ JSON.stringify({'name':this.username,'id' : this.id,'date':this.date_regis})]);   
    }
  logout(){
    // this.router.navigate(['/login-user']);
    this.router.navigate(['']);
  }

  do_depressiontest(){
    console.log("666666");
    this.router.navigate(['/depressiontest/'+JSON.stringify({'name':this.username,'id' : this.id,'date':this.date_regis})]);
  }

 all_Tested(){
  this.router.navigate(['/all-tested/'+JSON.stringify({'name':this.username,'id' : this.id,'date':this.date_regis})]);

 }
 test_history(){ 
  this.router.navigate(['test-history/'+ JSON.stringify({'name':this.username,'id' : this.id,'date':this.date_regis})]);
}


  etc(){ 
    this.router.navigate(['etc/'+ JSON.stringify({'name':this.username,'id' : this.id,'date':this.date_regis})]);
  }
  
  
  ngOnInit() {
    // while(this.date){
    //   this.date_ = this.date
    //   console.log(this.date_);
      
    // }
    console.log(this.dataJ);
    console.log("date  :" , this.dataJ.date);
    
    

  }

}
