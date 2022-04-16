import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NavController } from "@ionic/angular";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.page.html',
  styleUrls: ['./login-user.page.scss'],
})
export class LoginUserPage implements OnInit {

  username: any = "";
  password: any = "";
  url: string = "http://localhost/appdata/login.php";
  havedata = false;
  data: any;
  dataitem: any = [];
  isSubmitted = false;
  insertdata: any = {};
  datausersmember: any = [];
  user_id: number;

  constructor(public http: HttpClient, private router: Router, public navCtrl: NavController,public alertController: AlertController) {
    this.insertdata.username = "";
    this.insertdata.pass = "";

  }

  login() {
    let url: string = "http://localhost/appdata/login.php"
    // let url = "http://localhost/db_ifightcovid19/insertdataloginpatient.php";
    let postdataset = this.insertdata.username;
    console.log(postdataset);

    // encodeURIComponent

    if (this.insertdata.username != "" ||
      this.insertdata.pass != "") {


      let callback: Observable<any> = this.http.get(
        url + "/?username=" + postdataset
      );
      // 
      callback.subscribe(async (data) => {
        console.log(data);
        
        if (data !== null) {

          // window.sessionStorage.setItem("id", data[0].user_name); // ใน log จะเขียนว่า 0 : {id: , user_name:, password:} data[0] คือ  0 ตัวแรกใน log แล้วเข้าถึงข้อมูล user_name ด้วย .user_name 


          //     this.router.navigate(['checkuser']);
          // this.checkuser()
          // window.sessionStorage.setItem("id", data[0].user_id);
          if (this.insertdata.username == data[0].user_name &&(this.insertdata.pass) == data[0].password) {
            this.user_id = data[0].user_id
            const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'แจ้งเตือน',
            message: 'เข้าสู่ระบบสำเร็จ',
            buttons: [
              {
                text: 'ตกลง',
                id: 'confirm-button',
                handler: () => {

                  this.router.navigate(['home/'+JSON.stringify({'name':data[0].user_name,'id' : data[0].user_id,'date':data[0].date_of_register})],)
                }
              }
            ]
          });
    
          await alert.present();
          
            this.username = data[0].user_name

          } else if (this.insertdata.username == data[0].user_name) {
            this.username = data[0].user_name
            this.password = data[0].password
            this.router.navigate(['/login'])
            const alert = await this.alertController.create({
              cssClass: 'my-custom-class',
              header: 'แจ้งเตือน',
              message: 'รหัสผ่านไม่ถูกต้อง',
              buttons: [
                {
                  text: 'ตกลง',
                  id: 'confirm-button',
                  handler: () => {
                    console.log('Confirm Okay');
                  }
                }
              ]
            });
      
            await alert.present();

          }

          // else if(this.username == null ){
          //   this.router.navigate(['/login'])
          //   alert(" ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง 3 ")

          //   }else if(this.insertdata.pass == data[0].user_pass){
          //   this.password = data[0].user_pass
          //   alert(" ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง 4")
          //   this.router.navigate(['/login'])

          // }else if(this.username != this.insertdata.username || this.password != this.insertdata.pasword){
          //   alert("not passed")

          // }

        } else {
          const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'แจ้งเตือน',
            message: 'ข้อมูลไม่ถูกต้อง',
            buttons: [
              {
                text: 'ตกลง',
                id: 'confirm-button',
                handler: () => {
                  console.log('Confirm Okay');
                }
              }
            ]
          });
    
          await alert.present();
        }

        // else if (data[0].id == null || data[0].user_name ){
        //   this.router.navigate(['/login'])
        //   alert(" ผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ")
        // }
        console.log("1", data);
        // console.log("2", window.sessionStorage.getItem('id'));
        console.log("data", data[0].user_name);



      });
    }









  }

  // checkuser() {
  //   let url: string = "http://localhost/appdata/loaddatausersmember.php"
  //   // let url = "http://localhost/db_ifightcovid19/loaddatausersmember.php";
  //   this.user_id = window.sessionStorage.getItem('username')
  //   console.log(this.user_id); // รับค่า user_id จาก sessionStorage
  //   this.http.get(url + "/?pass=" + this.user_id)
  //     .subscribe(data => {
  //       if (data != null) {
  //         this.datausersmember = data;
  //         if (data == this.insertdata.pass) {
  //           console.log("passed");

  //           this.router.navigate(['/home']);

  //         }
  //         console.log("doneg.", data);


  //       }
  //     }, error => {
  //       console.log("load fial.")

  //     });

  // }

  regis() {
    this.router.navigate(['/registerr']);
  }

  ngOnInit() {
  }

}