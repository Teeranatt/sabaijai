import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

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
  gotoetc(){
    this.router.navigate(['etc/'+ this.user_id]);
  }

  ngOnInit() {
  }

}
