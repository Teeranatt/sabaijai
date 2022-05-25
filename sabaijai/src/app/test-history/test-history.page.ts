import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.page.html',
  styleUrls: ['./test-history.page.scss'],
})
export class TestHistoryPage implements OnInit {

  c1 :boolean = true;
  c2 :boolean = false;

  url2: string = "http://localhost/appdata/loadstresstest.php";
  url3: string = "http://localhost/appdata/loaddepressiontest.php";

  stress:any;
  depression:any;

  user_id: any;
  dataJ: any;
  id: any;
  score: any;
  username: any;


  constructor(private router: Router, public http: HttpClient, private activatedRoute: ActivatedRoute, public alertController: AlertController) {
    this.user_id = (this.activatedRoute.snapshot.paramMap.get('id'));
    let data = JSON.parse(this.user_id);
    this.dataJ = data;
    this.username = this.dataJ.name
    this.id = this.dataJ.id


  }
  check1(){
    this.c1 = true;
    this.c2 = false;
  }
  check2(){
    this.c1 = false;
    this.c2 = true;
  }
  loadstress(){
    let id = (this.id).toString();
    let data: Observable<any> = this.http.get(
      this.url2 + "/?id=" + id
    );

    data.subscribe(d => {
      let data = JSON.stringify(d)
      // console.log("status : " + data )
      let obj = JSON.parse(data.toString());
      this.stress = obj

     
    });
    

  }
  loaddepress(){
    let id = (this.id).toString();
    let data: Observable<any> = this.http.get(
      this.url3 + "/?id=" + id
    );

    data.subscribe(d => {
      let data = JSON.stringify(d)
      // console.log("status : " + data )
      let obj = JSON.parse(data.toString());
      this.depression = obj

     
    });
    

  }
  gotohome(){
    this.router.navigate(['home/'+ this.user_id]);
  }




  ngOnInit() {
    this.loadstress();
    this.loaddepress();
  }

}
