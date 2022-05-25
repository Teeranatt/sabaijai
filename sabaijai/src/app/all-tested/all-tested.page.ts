import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-tested',
  templateUrl: './all-tested.page.html',
  styleUrls: ['./all-tested.page.scss'],
})
export class AllTestedPage implements OnInit {

  call: number;

  stress_1: any = 0;
  stress_2: any = 0;
  stress_3: any = 0;
  stress_4: any = 0;

  depress_1: any = 0;
  depress_2: any = 0;
  depress_3: any = 0;
  depress_4: any = 0;
  
  l_mood : any;
  mood_1: any = 0;
  mood_2: any = 0;
  mood_3: any = 0;
  mood_4: any = 0;
  mood_5: any = 0;
  mood_6: any = 0;
  mood_7: any = 0;
  mood_8: any = 0;
  mood_9: any = 0;
  mood_10: any = 0;

  interest: any = [];
  joy: any = [];
  surprise: any = [];
  distress: any = [];
  anger: any = [];
  disgust: any = [];
  contempt: any = [];
  fear: any = [];
  shame: any = [];
  guilt: any = [];

  l_stress:any;
  stress1: any = [];
  stress2: any = [];
  stress3: any = [];
  stress4: any = [];

  l_depress:any;
  depress1: any = [];
  depress2: any = [];
  depress3: any = [];
  depress4: any = [];


  mood_: any = [];
  moods:any;
  stress_: any = [];
  depression_: any = [];

  user_id: any;
  dataJ: any;
  id: any;
  score: any;
  username: any;

  url1: string = "http://localhost/appdata/loaddiary.php";
  url2: string = "http://localhost/appdata/loadstresstest.php";
  url3: string = "http://localhost/appdata/loaddepressiontest.php";

  constructor(private router: Router, public http: HttpClient, private activatedRoute: ActivatedRoute, public alertController: AlertController) {
    this.user_id = (this.activatedRoute.snapshot.paramMap.get('id'));
    let data = JSON.parse(this.user_id);
    this.dataJ = data;
    this.username = this.dataJ.name
    this.id = this.dataJ.id


  }
  cal_mood1() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.interest.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_1 = (pp); 
    console.log("cal1 : ",this.mood_1);

  }
  cal_mood2() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.joy.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_2 = (pp); 
    console.log("cal2 : ",this.mood_2);

  }
  cal_mood3() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.surprise.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_3 = (pp); 
    console.log("cal3 : ",this.mood_3);

  }
  cal_mood4() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.distress.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_4 = (pp); 
    console.log("cal4 : ",this.mood_4);

  }
  cal_mood5() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.anger.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_5 = (pp); 
    console.log("cal5 : ",this.mood_5);

  }
  cal_mood6() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.disgust.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_6 = (pp); 
    console.log("cal6 : ",this.mood_6);

  }
  cal_mood7() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.contempt.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_7 = (pp); 
    console.log("cal7 : ",this.mood_7);

  }
  cal_mood8() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.fear.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_8 = (pp); 
    console.log("cal8 : ",this.mood_8);

  }
  cal_mood9() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.shame.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
   
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_9 = (pp); 
    console.log("cal9 : ",this.mood_9);

  }
  cal_mood10() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.guilt.length;
    let y = this.l_mood;
    let present = x / y;
    let p = (present * 100).toFixed(1)
    let pp = Number(present.toFixed(2))
    // console.log("p : ",p);
    // console.log("0.p : ", present.toFixed(2));
    this.mood_10 = (pp); 
    console.log("cal10 : ",this.mood_10);

  }
  show_m() {
    let ar = []
    let ar1 = []
    let ar2 = []
    let ar3 = []
    let ar4 = []
    let ar5 = []
    let ar6 = []
    let ar7 = []
    let ar8 = []
    let ar9 = []
    let ar10 = []
    console.log(this.mood_);
    (this.mood_).forEach(function (value: any) {
      // console.log(value.mood);
      (ar).push(value.mood)
    })
    console.log(ar,"------------------------------");
    this.moods = ar;
    console.log("moods : ",(this.moods));
    this.l_mood = (this.moods).length;
    
  
    (ar1) = ((ar).filter(x => x === 'ตื่นเต้น'));
    this.interest = ar1;
    (ar2) = ((ar).filter(x => x === 'รื่นเริง'));
    this.joy = ar2;
    (ar3) = ((ar).filter(x => x === 'ประหลาดใจ'));
    this.surprise = ar3;
    (ar4) = ((ar).filter(x => x === 'เสียใจ'));
    this.distress = ar4;
    (ar5) = ((ar).filter(x => x === 'โกรธ'));
    this.anger = ar5;
    (ar6) = ((ar).filter(x => x === 'รังเกียจ'));
    this.disgust = ar6;
    (ar7) = ((ar).filter(x => x === 'ดูถูก'));
    this.contempt = ar7;
    (ar8) = ((ar).filter(x => x === 'กลัว'));
    this.fear = ar8;
    (ar9) = ((ar).filter(x => x === 'อับอาย'));
    this.shame = ar9;
    (ar10) = ((ar).filter(x => x === 'รู้สึกผิด'));//มาแน้ว
    this.guilt = ar10;


    console.log("ar :", ar);

    console.log("a1 : ", ar1);
    
    console.log("a2 : ", ar2);
    console.log("a3 : ", ar3);
    console.log("a4 : ", ar4);
    console.log("a5 : ", ar5);
    console.log("a6 : ", ar6);
    console.log("a7 : ", ar7);
    console.log("a8 : ", ar8);
    console.log("a9 : ", ar9);
    console.log("a10 : ", ar10);
    console.log("g : ", (this.guilt).length);
    console.log(this.mood_);
    console.log((this.mood_).filter(x => x === 'อับอาย').length);
    console.log((this.mood_).length);
    console.log("mood 2 : ", this.mood_[2]);
    console.log(typeof []);
    console.log("l : ", this.l_mood);
    console.log("l10 : ", this.guilt.length);
    

  }
  load_mood(){
    let id = (this.id).toString();
    let data: Observable<any> = this.http.get(
      this.url1 + "/?id=" + id
    );

    data.subscribe(d => {
      let data = JSON.stringify(d)
      // console.log("status : " + data )
      console.log("status2 : " + d.user_id)
      console.log("dataaaa : ");

      let obj = JSON.parse(data.toString());
      this.mood_ = obj;
      console.log("obj : ", obj.mood);
      console.log("5555555", this.user_id);

      this.show_m()
      this.cal_mood1()
      this.cal_mood2()
      this.cal_mood3()
      this.cal_mood4()
      this.cal_mood5()
      this.cal_mood6()
      this.cal_mood7()
      this.cal_mood8()
      this.cal_mood9()
      this.cal_mood10()
      


    });
  
  }
  //------------------------------------------------------stress--------------------------------------------------//
  loadstress(){
    let id = (this.id).toString();
    let data: Observable<any> = this.http.get(
      this.url2 + "/?id=" + id
    );

    data.subscribe(d => {
      let data = JSON.stringify(d)
      // console.log("status : " + data )
      let obj = JSON.parse(data.toString());
      this.stress_ = obj;
      // console.log("obj stress : ", obj.score);

      this.l_stress = (this.stress_).length;

      console.log("len stress",this.l_stress);
      this.stress_add();
      this.stress_cal();
    });
    

  }
  stress_add(){
    let ar = [];
    let ar1 = [];
    let ar2 = [];
    let ar3 = [];
    let ar4 = [];
    (this.stress_).forEach(function (value: any) {
      // console.log(value.mood);
      (ar).push(value.score)
    })
    console.log(ar,"------------------------- stress");
    (ar1) = ((ar).filter(x => x <=4));
    this.stress1 = ar1;
    (ar2) = ((ar).filter(x => x > 4 && x <8));
    this.stress2 = ar2;
    (ar3) = ((ar).filter(x => x >=8 && x <10));
    this.stress3 = ar3;
    (ar4) = ((ar).filter(x => x >9 ));
    this.stress4 = ar4;


    console.log("ต่ำ : ", ar1);
    console.log("ปลางกลาง : ", ar2);
    console.log("สูง : ", ar3);
    console.log("รุนแรง : ", ar4);

  }
  cal_stress1() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.stress1.length;
    let y = this.l_stress;
    let present = x / y;
    let pp = Number(present.toFixed(4))
    this.stress_1 = (pp); 
    console.log("cal1 : ",y,'--',x,'---',pp," ----- ",this.l_stress);
  }
  cal_stress2() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.stress2.length;
    let y = this.l_stress;
    let present = x / y;
    let pp = Number(present.toFixed(4))
    this.stress_2 = (pp); 
    console.log("cal2 : ",y,'--',x,'---',pp," ----- ",this.l_stress);
  }
  cal_stress3() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.stress3.length;
    let y = this.l_stress;
    let present = x / y;
    let pp = Number(present.toFixed(4))
    this.stress_3 = (pp); 
    console.log("cal3 : ",y,'--',x,'---',pp," ----- ",this.l_stress);
  }
  cal_stress4() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.stress4.length;
    let y = this.l_stress;
    let present = x / y;
    let pp = Number(present.toFixed(4))
    this.stress_4 = (pp); 
    console.log("cal4 : ",y,'--',x,'---',pp," ----- ",this.l_stress);
  }
  stress_cal(){
    this.cal_stress1()
    this.cal_stress2()
    this.cal_stress3()
    this.cal_stress4()
  }
//------------------------------------------------------stress--------------------------------------------------//
  //----------------------------------------------------------------------------------------------//
  //----------------------------------------depression--------------------------------------------//
  loaddepress(){
    let id = (this.id).toString();
    let data: Observable<any> = this.http.get(
      this.url3 + "/?id=" + id
    );

    data.subscribe(d => {
      let data = JSON.stringify(d)
      // console.log("status : " + data )
      let obj = JSON.parse(data.toString());
      this.depression_ = obj;
      console.log("obj depress : ", obj.score);

      this.l_depress = (this.depression_).length;

      console.log("len stress",this.l_depress);
      this.depress_add();
      this.depress_cal();
    });
    

  }
  depress_add(){
    let ar = [];
    let ar1 = [];
    let ar2 = [];
    let ar3 = [];
    let ar4 = [];
    (this.depression_).forEach(function (value: any) {
      // console.log(value.mood);
      (ar).push(value.score)
    })
    console.log(ar,"------------------------- depress");
    (ar1) = ((ar).filter(x => x > 0 && x < 7));
    this.depress1 = ar1;
    (ar2) = ((ar).filter(x => x > 6 && x < 13));
    this.depress2 = ar2;
    (ar3) = ((ar).filter(x => x >12 && x < 19));
    this.depress3 = ar3;
    (ar4) = ((ar).filter(x => x > 18));
    this.depress4 = ar4;


    console.log("น้อยมาก : ", ar1);
    console.log("น้อย : ", ar2);
    console.log("ปานกลาง : ", ar3);
    console.log("รุนแรง : ", ar4);

  }
  cal_depress1() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.depress1.length;
    let y = this.l_depress;
    let present = x / y;
    let pp = Number(present.toFixed(4))
    this.depress_1 = (pp); 
    console.log("cal1 : ",x,this.depress_1);
  }
  cal_depress2() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.depress2.length;
    let y = this.l_depress;
    let present = x / y;
    let pp = Number(present.toFixed(4))
    this.depress_2 = (pp); 
    console.log("cal2 : ",x,this.depress_2);
  }
  cal_depress3() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.depress3.length;
    let y = this.l_depress;
    let present = x / y;
    let pp = Number(present.toFixed(4))
    this.depress_3 = (pp); 
    console.log("cal3 : ",x,this.depress_3);
  }
  cal_depress4() {
    // อารมณ์ที่ต้องการหา / อารมณ์ทั้งหมด 
    let x = this.depress4.length;
    let y = this.l_depress;
    let present = x / y;
    let pp = Number(present.toFixed(4))
    this.depress_4 = (pp); 
    console.log("cal4 : ",x," - ",this.l_depress);
  }
  depress_cal(){
    this.cal_depress1()
    this.cal_depress2()
    this.cal_depress3()
    this.cal_depress4()
  }
 //-------------------------------------------------------depression----------------------------------------------//


  ngOnInit() {
  this.load_mood();
  this.loadstress();
  this.loaddepress();

  }
  gotohome(){
    this.router.navigate(['home/'+ this.user_id]);
  }

}
