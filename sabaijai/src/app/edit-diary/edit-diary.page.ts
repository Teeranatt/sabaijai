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
  url: string = "http://localhost/appdata/editdiary.php";
  url2:string=  "http://localhost/appdata/load_data_edit.php";

  m0:boolean = true;
  m1:boolean = false;
  m2:boolean = false;
  m3:boolean = false;
  m4:boolean = false;
  m5:boolean = false;
  m6:boolean = false;
  m7:boolean = false;
  m8:boolean = false;
  m9:boolean = false;
  m10:boolean = false;
  
  
  user_id: any;
  dataJ: any;
  id: any;
  user_data: any;
  


  constructor(private router: Router, public http: HttpClient, private activatedRoute: ActivatedRoute, public alertController: AlertController) {
    this.user_id = (this.activatedRoute.snapshot.paramMap.get('id'));
    let data = JSON.parse(this.user_id);
    this.dataJ = data;
    this.user_data =  JSON.parse(this.dataJ.user_data)
    this.id = this.dataJ.di_id;
    

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
  async save_diary() {
    let id = (this.id).toString();
    console.log("kkkkk",(this.id).toString());
    
   

    let dataPost = new FormData();
    dataPost.append('id', this.id);
    dataPost.append('diary', this.diary);
    dataPost.append('mood', this.mood);
    console.log("1", dataPost);
    console.log("id : " + id);

    let data: Observable<any> = this.http.post(this.url, dataPost);
    console.log("2", data);

    data.subscribe( d => {
      console.log("status : " + d);
       if(d === "Record updated successfully"){
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
            console.log(this.user_id);
            
            this.alldiary()
            
            
          }
        }
      ]
    });

    await alert.present();

  }
  gotohome(){
    this.router.navigate(['home/'+ JSON.stringify(this.user_data)]);
  }
  clickmood(emotion:any){
    this.mood = emotion;
    if (emotion === 'ตื่นเต้น') {
      this.m1 = true; 
    }
    else if (emotion === 'รื่นเริง') {
      this.m1 = false; 
      this.m2 = true; 
    }
    else if (emotion === 'ประหลาดใจ') {
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = true;
    }
    else if (emotion === 'เสียใจ') {
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = false;
      this.m4 = true;
    }
    else if (emotion === 'โกรธ') {
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = false;
      this.m4 = false;
      this.m5 = true;
    }
    else if (emotion === 'รังเกียจ') {
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = false;
      this.m4 = false;
      this.m5 = false;
      this.m6 = true;
    }
    else if (emotion === 'ดูถูก') {
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = false;
      this.m4 = false;
      this.m5 = false;
      this.m6 = false;
      this.m7 = true;
    }
    else if (emotion === 'กลัว') {
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = false;
      this.m4 = false;
      this.m5 = false;
      this.m6 = false;
      this.m7 = false;
      this.m8  = true;
    }
    else if (emotion === 'อับอาย') {
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = false;
      this.m4 = false;
      this.m5 = false;
      this.m6 = false;
      this.m7 = false;
      this.m8  = false;
      this.m9 = true;
    }
    else if (emotion === 'รู้สึกผิด') {
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = false;
      this.m4 = false;
      this.m5 = false;
      this.m6 = false;
      this.m7 = false;
      this.m8 = false;
      this.m9 = false;
      this.m10 = true;
    }
    else{
      this.m1 = false; 
      this.m2 = false; 
      this.m3 = false;
      this.m4 = false;
      this.m5 = false;
      this.m6 = false;
      this.m7 = false;
      this.m8 = false;
      this.m9 = false;
      this.m10 = false;
      this.m0 = true;
    }


  }
  alldiary(){
    this.router.navigate(['alldairy/'+ JSON.stringify(this.user_data)]);
    console.log(this.user_data);
  }

  ngOnInit() {
    console.log(this.user_id);
    // console.log(this.diary);
    let obj = JSON.parse(this.user_id);
    console.log("data user : " , JSON.stringify(this.user_data));
    console.log("id :",this.id);
    console.log(obj);
    

    let data: Observable<any> = this.http.get(
      this.url2 + "/?id=" + this.id
    );

    data.subscribe(d => {
      console.log(d[0].mood);
      this.diary = d[0].data_text;
      console.log("diiii  :",this.diary);
      this.mood = d[0].mood
      console.log("moddd : ",this.mood);
      
      
      
      
    })
    


    
    
    
    

  }

}
