import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerr',
  templateUrl: './registerr.page.html',
  styleUrls: ['./registerr.page.scss'],
})
export class RegisterrPage implements OnInit {

  url: string = "http://localhost/appdata/insertdatalogin.php"
  data: any;
  isSubmitted = false;

  insertdata: any = [];
  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public alertController: AlertController,private router: Router) {
    this.data = {
      name: '',
      email: '',
      password: '',
    };

  }

  async saveuser() {
    if (this.data.name != "" &&
    this.data.pass != "" &&this.data.email != "") {
    let postdataset = new FormData();
    postdataset.append('name', this.data.name);
    postdataset.append('email', this.data.email);
    postdataset.append('password', this.data.password);
    let callback: Observable<any> = this.http.post(this.url, postdataset);
    callback.subscribe(async (call) => {
      // console.log(call);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'แจ้งเตือน',
        message: 'ลงทะเบียนสำเร็จ',
        buttons: [
          {
            text: 'ตกลง',
            id: 'confirm-button',
            handler: () => {
              this.router.navigate(['/home'])
            }
          }
        ]
      });

      await alert.present();
      // console.log(call);
    });

  }else{
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'แจ้งเตือน',
      message: 'กรอกข้อมูลไม่ครบถ้วน',
      buttons: [
        {
          text: 'ตกลง',
          id: 'confirm-button',
          handler: () => {
            
            this.router.navigate(['/registerr'])
          }
        }
      ]
    });

    await alert.present();

  }
}

  ngOnInit() {
  }

}
