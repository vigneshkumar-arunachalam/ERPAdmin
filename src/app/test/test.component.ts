import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';

import Swal from 'sweetalert2';
declare var $:any;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  loginForm: any=FormGroup;
  userperms : any;
  pn: any;
  otpform: any;
  // loginForm: FormGroup = new FormGroup;
  constructor(public serverService: ServerService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      // 'company_name' : new FormControl(null,Validators.required)
    });
  }
  forgot(){
    this.router.navigate(['/forgot']);
  }
  userLogin(){
    // this.router.navigate(['/admin-management']);
    // Swal.fire('Authenticating');
    // Swal.showLoading();
    // {"operation":"login", "moduleType":"login", "api_type": "web", "access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJhdWQiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJpYXQiOjE2NjIzNTY0MTcsIm5iZiI6MTY2MjM1NjQxNywiZXhwIjoxNjYyMzc0NDE3LCJhY2Nlc3NfZGF0YSI6eyJ0b2tlbl9hY2Nlc3NJZCI6IjIiLCJ0b2tlbl9hY2Nlc3NOYW1lIjoiRGluZXNodGVzdGluZyIsInRva2VuX2FjY2Vzc1R5cGUiOiIyIn19.cb66sGuFriNnKDDGtIKDudIdwpQUZ5HUOtdRvbkFIKk", 
    // "element_data":{"action":"login","username":"dev_admin","password":"dev_admin"}}
    ////////////-------------------------------------------------New ONEEEEE-------------------------------------------
    let data:any = new Object();
    let datas:any = new Object();
    data.operation = "login";
    data.moduleType = "login";
    data.api_type = "web";
    data.access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJhdWQiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJpYXQiOjE2NjIzNTY0MTcsIm5iZiI6MTY2MjM1NjQxNywiZXhwIjoxNjYyMzc0NDE3LCJhY2Nlc3NfZGF0YSI6eyJ0b2tlbl9hY2Nlc3NJZCI6IjIiLCJ0b2tlbl9hY2Nlc3NOYW1lIjoiRGluZXNodGVzdGluZyIsInRva2VuX2FjY2Vzc1R5cGUiOiIyIn19.cb66sGuFriNnKDDGtIKDudIdwpQUZ5HUOtdRvbkFIKk";
    datas.action = "login";
    datas.username = $('#username').val();
    datas.password = $('#password').val();
    data.element_data = datas;
    console.log(data);
    this.serverService.sendServer(data).subscribe((response:any)=>{
      if(response.status == true ){
        this.router.navigate(['/admin-management']);
        localStorage.setItem('at', response.access_token);
      }
      else{
        Swal.fire("invalid Login");
      }

    });
    ///////////////////////////------------END----------------------------------------//////




    
    // let loginForm: any = new Object();
    // let api_req: any = new Object();
    // loginForm.uname = this.loginForm.value.username;
    // loginForm.pwd = this.loginForm.value.password;
    // loginForm.action = 'login_without_otp';
    // api_req.operation = 'curlData';
    // api_req.moduleType = 'login';
    // api_req.api_type = 'web';
    // api_req.element_data = loginForm;
    //     this.serverService.sendServer(api_req).subscribe((response:any) => {
    //     if (response.status=="true") {
          
    //       localStorage.setItem('customer_per',response.result_data.customer_details.cus_permission);
    //       localStorage.setItem('at', response.auth_token);
    //       localStorage.setItem('profile_image','');
    //       localStorage.setItem(
    //         'cn',
    //         response.result_data.customer_details.cust_username
    //       );
    //       localStorage.setItem('en', response.customer_id_encode);
    //       localStorage.setItem('blg', '1');
    //       localStorage.setItem('cuscode',response.result_data.customer_details.customerCode);
    //       localStorage.setItem('enable', '1');

    //       this.userperms = response.result_data.customer_details.cus_permission.split(',');

    //       console.log(this.userperms);
    //       for (var i = 0; i < this.userperms.length; i++) {
    //         this.pn = btoa(this.userperms[i]);
    //       }

    //       localStorage.setItem('pn', this.pn);

    //       // this.serverService.cn = response.result_data.customer_details.cust_username;
    //       // this.serverService.ci = response.result_data.customer_details.customerId;
    //       console.log(this.serverService.ci);
    //       this.loginForm.reset();
    //       // this.otpform.reset();
          
    //       // this.gooldcms(response.result.data.customer_id_encode);  --- old cms php redirection
    //       this.router.navigate(['/dashboard']);
    //       localStorage.setItem("reload","1");
    //     } else {
    //       Swal.fire('Invalid Login Details');
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }


}
