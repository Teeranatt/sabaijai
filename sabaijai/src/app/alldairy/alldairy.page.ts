import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alldairy',
  templateUrl: './alldairy.page.html',
  styleUrls: ['./alldairy.page.scss'],
})
export class AlldairyPage implements OnInit {


  mood: any;
  diary: any;
  url: string = "http://localhost/appdata/loaddiary.php";
  date: any;
  url_2: string = "http://localhost/appdata/delete_diary.php";

  nothide: boolean = false;

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
  async del_diary(id: any,text:any) {
    if (id) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'แจ้งเตือน : ',
        message: 'ต้องการลบไดอารี่หรือไม่'
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
            text: 'ใช่',
            id: 'confirm-button',
            handler: () => {

              let data: Observable<any> = this.http.delete(
                this.url_2 + "/?id=" + id
              );
              data.subscribe(d => {
                if (d == "status ok") {
                  console.log(d + "======");
                  this.ngOnInit();
                }

              })

            }
          }
        ]
      });

      await alert.present();

    }

    console.log("id data : ", id);
    console.log("data text: ", text);

  }
  edit_diary(id:any,user_id:any){
    this.router.navigate(['edit-diary/'+ JSON.stringify({'di_id':id,'user_id' : user_id})]);
  }

  ngOnInit() {

    let id = (this.id).toString();
    // let dataPost = new FormData();
    // dataPost.append('id',id);
    // console.log("1",dataPost);
    // console.log("id : "+id);





    // var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    // let data = this.http.put(url, dataPost, { responseType: 'text'}).toPromise();
    // let data:Observable<any> = this.http.post(this.url,id);
    // console.log("2",data);

    let data: Observable<any> = this.http.get(
      this.url + "/?id=" + id
    );

    data.subscribe(d => {
      let data = JSON.stringify(d)
      // console.log("status : " + data )
      console.log("status2 : " + d.user_id)
      let obj = JSON.parse(data.toString());
      // console.log(obj[4].data_text);
      // console.log(data.toString());
      this.diary = obj;
      // console.log(obj);






    });
    console.log(id);
    

  }

}