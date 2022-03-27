import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-depressiontest',
  templateUrl: './depressiontest.page.html',
  styleUrls: ['./depressiontest.page.scss'],
})
export class DepressiontestPage implements OnInit {

  value_1: any;
  value_2: any;
  value_3: any;
  value_4: any;
  value_5: any;
  value_6: any;
  value_7: any;
  value_8: any;
  value_9: any;
  value_0: string = "ยังไม่มีคะแนน";
  user_id:any;
  dataJ:any;
  id:any;
  score:any;
  username: any;

  url:string = "http://localhost/appdata/stresstest.php";

  // varSum:number = parseInt(this.value_1) + parseInt(this.value_2);
  constructor(private router: Router, public http: HttpClient,private activatedRoute:ActivatedRoute, public alertController: AlertController) {
    this.user_id = (this.activatedRoute.snapshot.paramMap.get('id'));
    let data = JSON.parse(this.user_id);
    this.dataJ = data;
    this.username = this.dataJ.name
    this.id = this.dataJ.id
    

  }
  // checkVar() {
  //   return this.value_1 + 1
  // }
  valueC() {
    var va1 = parseInt(this.value_1);
    var va2 = parseInt(this.value_2);
    var va3 = parseInt(this.value_3);
    var va4 = parseInt(this.value_4);
    var va5 = parseInt(this.value_5);
    var va6 = parseInt(this.value_6);
    var va7 = parseInt(this.value_7);
    var va8 = parseInt(this.value_8);
    var va9 = parseInt(this.value_9);

    ;
    // if (this.value_1 === 0) {
    //   console.log("yes")
    // }
    // else { console.log("no"); }

    // console.log(typeof(this.value_1));
    // console.log(typeof(va1));
    // // console.log('ค่าประเมิน : ' , this.varSum);
    var varSum = va1 + va2 + va3 + va4 + va5 + va6 + va7 + va8 + va9
    if (this.value_1 == null || this.value_2 == null || this.value_3 == null || this.value_4 == null || this.value_5 == null || this.value_6 == null || this.value_7 == null || this.value_8 == null || this.value_9 == null) {
      return this.value_0
    }
    else if ((varSum) != null) {
      return varSum
    }

    console.log(va1 + va2 + va3 + va4 + va5 + va6 + va7 + va8 + va9);

  }
  async showResult() {
    var va1 = parseInt(this.value_1);
    var va2 = parseInt(this.value_2);
    var va3 = parseInt(this.value_3);
    var va4 = parseInt(this.value_4);
    var va5 = parseInt(this.value_5);
    var va6 = parseInt(this.value_6);
    var va7 = parseInt(this.value_7);
    var va8 = parseInt(this.value_8);
    var va9 = parseInt(this.value_9);

    var varSum = va1 + va2 + va3 + va4 + va5 + va6 + va7 + va8 + va9;
    console.log("คะแนน .. ",varSum);
    this.score = varSum;

    if (varSum >= 0 && varSum <= 4) {
      // this.router.navigate(['/stress-level1']);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ผลการประเมิน : ' + varSum,
        message: 'ความเครียดของคุณอยู่ในระดับต่ำ... '
        ,

        buttons: [
          {
            text: 'ดูคำแนะนำ',
            cssClass: 'primary',
            id: 'cancel-button',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          },
          {
            text: 'กลับสู่หน้าหลัก',
            id: 'confirm-button',
            handler: () => {
              this.gotohome();
            }
          }
        ]
      });

      await alert.present();
    }
    else if (varSum >= 5 && varSum <= 7) {
      // this.router.navigate(['/stress-level2']);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ผลการประเมิน : ' + varSum,
        message: 'ความเครียดระดับของคุณอยู่ในระดับปานกลาง... '
        ,

        buttons: [
          {
            text: 'ดูคำแนะนำ',
            cssClass: 'primary',
            id: 'cancel-button',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          },
          {
            text: 'กลับสู่หน้าหลัก',
            id: 'confirm-button',
            handler: () => {
              this.gotohome();
            }
          }
        ]
      });

      await alert.present();

    }
    else if (varSum >= 8 && varSum <= 9) {
      // this.router.navigate(['/stress-level3']);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ผลการประเมิน : ' + varSum,
        message: 'ความเครียดของคุณอยู่ในระดับสูง...'
        ,

        buttons: [
          {
            text: 'ดูคำแนะนำ',
            cssClass: 'primary',
            id: 'cancel-button',
            handler: () => {
              console.log('Confirm Cancel: blah');
            }
          },
          {
            text: 'กลับสู่หน้าหลัก',
            id: 'confirm-button',
            handler: () => {
              this.gotohome();
            }
          }
        ]
      });

      await alert.present();

    }
    else if (varSum >= 10 && varSum <= 15) {
      // this.router.navigate(['/stress-level4']);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'ผลการประเมิน : ' + varSum,
        message: 'ความเครียดของคุณอยู่ในระดับรุนแรง...'
        ,

        buttons: [
          {
            text: 'ดูคำแนะนำ',
            cssClass: 'primary',
            id: 'cancel-button',
            handler: () => {
              this.router.navigate(['/home']);
            }
          },
          {
            text: 'กลับสู่หน้าหลัก',
            id: 'confirm-button',
            handler: () => {
              this.gotohome();
            }
          }
        ]
      });

      await alert.present();
    }
    else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'แจ้งเตือน',
        message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
        buttons: [
          {
            text: 'ตกลง',
            id: 'confirm-button',
            handler: () => {
              this.router.navigate(['stress-test/'+ this.user_id]);
            }
          }
        ]
      });

      await alert.present();
    }
    let sum = (this.score).toString();
    let id = (this.id).toString();
    let dataPost = new FormData();
    dataPost.append('id',id);
    dataPost.append('score',sum);
    console.log("1",dataPost);
    console.log("id : "+id);
    console.log(sum);
    
    

     
    // var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    // let data = this.http.put(url, dataPost, { responseType: 'text'}).toPromise();
    let data:Observable<any> = this.http.post(this.url,dataPost);
    console.log("2",data);
    
    data.subscribe(d=>{console.log("status : "+d)
   
    });
    // console.log(JSON.stringify(dataPost));
   console.log(this.score);
   console.log(sum);
   
   
    // if (data) {
    //   this.router.navigate(['/home']) 
    // }
    
    

  }
  
  gotohome(){
    this.router.navigate(['home/'+ this.user_id]);
  }

  ngOnInit() {
  }

}
 



