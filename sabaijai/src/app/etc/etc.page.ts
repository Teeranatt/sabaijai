import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-etc',
  templateUrl: './etc.page.html',
  styleUrls: ['./etc.page.scss'],
})
export class EtcPage implements OnInit {

  user_id: any;
  dataJ: any;
  id: any;
  user_data: any;
  

  constructor(private router: Router, public http: HttpClient,private activatedRoute:ActivatedRoute, public alertController: AlertController) {
    this.user_id = (this.activatedRoute.snapshot.paramMap.get('id'));
    let data = JSON.parse(this.user_id);
    this.dataJ = data;
    this.id = this.dataJ.id
  }

  gotohome(){
    this.router.navigate(['home/'+ this.user_id]);
  }
  goto_stress_relax(){
    this.router.navigate(['relieve/'+ this.user_id]);
  }
  goto_depress_relax(){
    this.router.navigate(['relieve-depression/'+ this.user_id]);
  }
  goto_contact(){
    this.router.navigate(['contact/'+ this.user_id]);
  }

  ngOnInit() {
  }

}
