import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-diary',
  templateUrl: './edit-diary.page.html',
  styleUrls: ['./edit-diary.page.scss'],
})
export class EditDiaryPage implements OnInit {
  mood: any;
  diary: any;
  url: string = "http://localhost/appdata/diary.php";

  user_id: any;
  dataJ: any;
  id: any;
  username: any;

  constructor(private router: Router, public http: HttpClient, private activatedRoute: ActivatedRoute, public alertController: AlertController) {
    this.user_id = (this.activatedRoute.snapshot.paramMap.get('id'));
    let data = JSON.parse(this.user_id);
    this.dataJ = data;
    this.username = this.dataJ.name
    this.id = this.dataJ.id


  }
  show_mood() {
    console.log("mood : ", this.mood);
    console.log("diary : ", this.diary);


  }
  async confirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'แจ้งเตือน : ',
      message: 'ต้องการบันทึกไดอารี่หรือไม่'
      ,

      buttons: [
        {
          text: 'ยกเลิก',
          cssClass: 'primary',
          id: 'cancel-button',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'บันทึก',
          id: 'confirm-button',
          handler: () => {
            this.save_diary();
          }
        }
      ]
    });

    await alert.present();
  }
  save_diary() {
    let id = (this.id).toString();
    let diary = this.diary;
    let mood = this.mood;
    let dataPost = new FormData();
    dataPost.append('id', id);
    dataPost.append('diary', diary);
    dataPost.append('mood', mood);
    console.log("1", dataPost);
    console.log("id : " + id);

    let data: Observable<any> = this.http.post(this.url, dataPost);
    console.log("2", data);

    data.subscribe(d => {
      console.log("status : " + d);
      if(d!=null){
        this.save_success()

      }

    });
    // console.log(JSON.stringify(dataPost));


    console.log(this.id);
    console.log(this.diary);
    console.log(this.mood);



  }
  async save_success() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'แจ้งเตือน : ',
      message: 'บันทึกไดอารี่เรียบร้อยแล้ว'
      ,

      buttons: [
        {
          text: 'ตกลง',
          id: 'confirm-button',
          handler: () => {
            // this.save_diary();
            console.log("บันทึกเรียบร้อย");
            this.router.navigate(['alldairy/'+ this.user_id]);
            
          }
        }
      ]
    });

    await alert.present();

  }
  gotohome(){
    this.router.navigate(['home/'+ this.user_id]);
  }

  ngOnInit() {
    // console.log(this.id.toString());

  }

}
