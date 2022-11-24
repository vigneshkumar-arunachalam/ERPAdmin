import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Router } from '@angular/router';
declare var $: any;
declare var iziToast: any;

import Swal from 'sweetalert2'
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  //pagination
  recordNotFound = false;
  pageLimit = 300;
  paginationData: any = { "info": "hide" };
  offset_count = 0;
  //userlist
  user_list: any;
  //group checkbox

  groupSelectCommonId: any;
  checkbox_value: any;
  edit_array: any = [];
  //Enable-Disable Permission
  userEnableDisableStatus:any = 0;

  constructor(public serverService: ServerService, private router: Router,) { }

  ngOnInit(): void {
    this.userList({})
  }

  selectAll(event: any) {
    console.log(event.target.checked)
    if (event.target.checked == true) {

      this.user_list.forEach((element: any, index: any) => {

        $("#check-grp1-" + index).prop('checked', true);
      });
    } else {
      this.user_list.forEach((element: any, index: any) => {

        $("#check-grp1-" + index).prop('checked', false);
      });

    }

  }



  EditCHK(data: any, event: any) {
    console.log("List - CheckBox ID", data);
    this.groupSelectCommonId = data;
    this.checkbox_value = event.target.checked;
    console.log(this.checkbox_value)
    if (this.checkbox_value) {

      this.edit_array.push(data);
      console.log("Final Checkbox After checkbox selected list", this.edit_array);
      this.edit_array.join(',');
      console.log("Final Checkbox After checkbox selected list", this.edit_array);
    }
    else {
      const index = this.edit_array.findIndex((el: any) => el === data)
      if (index > -1) {
        this.edit_array.splice(index, 1);
      }
      console.log("Final Checkbox After Deselected selected list", this.edit_array)

    }
  }
  userList(data: any) {



    var list_data = this.listDataInfo(data);
    console.log("data console", list_data)
    let api_req: any = new Object();
    let api_quotationList: any = new Object();
    api_req.moduleType = "quotation";
    api_req.api_url = "admin/user_list"
    api_req.api_type = "web";
    api_req.access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJhdWQiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJpYXQiOjE2NTQ2NjQ0MzksIm5iZiI6MTY1NDY2NDQzOSwiZXhwIjoxNjU0NjgyNDM5LCJhY2Nlc3NfZGF0YSI6eyJ0b2tlbl9hY2Nlc3NJZCI6IjIiLCJ0b2tlbl9hY2Nlc3NOYW1lIjoidGVzdGluZzA0MDYyMDIyIiwidG9rZW5fYWNjZXNzVHlwZSI6IjIifX0.NaymQDSiON2R3tKICGNpj6hsQfg9DGwEcZzrJcvsqbI";
    api_quotationList.action = "user_list";

    api_quotationList.off_set = list_data.offset;
    api_quotationList.limit_val = list_data.limit;
    api_quotationList.current_page = "";

    api_req.element_data = api_quotationList;


    this.serverService.sendServer(api_req).subscribe((response: any) => {
      console.log("qoutation list", response);
      if (response) {
        this.user_list = response.user_list;
        

        console.log("this.user_list", this.user_list)
        this.paginationData = this.serverService.pagination({ 'offset': response.off_set, 'total': response.total_cnt, 'page_limit': this.pageLimit });
      }
      else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }
  listDataInfo(list_data: any) {
    console.log(list_data)
    // list_data.search_text = list_data.search_text == undefined ? "" : list_data.search_text;
    // list_data.order_by_name = list_data.order_by_name == undefined ? "user.agent_name" : list_data.order_by_name;
    list_data.order_by_type = list_data.order_by_type == undefined ? "desc" : list_data.order_by_type;
    list_data.limit = list_data.limit == undefined ? this.pageLimit : list_data.limit;
    list_data.offset = list_data.offset == undefined ? 0 : list_data.offset;
    return list_data;
  }
  AddUserNavigation() {



    this.router.navigate(['/adduser']);

    // $('#addNewQuotationFormId').modal('hide');
  }
  EditUserNavigation(userid:any) {
    this.router.navigate(['/edituser']);

    // console.log("e_formID",this.editNewQuotationPopUpForm.value.e_enquiryFrom_addPopUP)
    // console.log("e_subject",this.editNewQuotationPopUpForm.value.e_enquirySubject_addPopUP)
    // console.log("e_valid",this.editNewQuotationPopUpForm.value.e_quotationValidity_addPopUP)
    // console.log("e_version",this.editNewQuotationPopUpForm.value.e_version_enqForm_addPopUP)
    var userID = userid;
    // var enq_formID = this.editNewQuotationPopUpForm.value.e_enquiryFrom_addPopUP;
    // var enq_subject = this.editNewQuotationPopUpForm.value.e_enquirySubject_addPopUP;
    // var enq_quotation_valid_day = this.editNewQuotationPopUpForm.value.e_quotationValidity_addPopUP;
    // var enq_duplicate_version = this.editNewQuotationPopUpForm.value.e_version_enqForm_addPopUP;

    this.router.navigate(['/edituser'], { queryParams: { e_userid: userID, 
   } });
  }
  delete(userid: any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
  
        let api_req: any = new Object();
        let api_delete: any = new Object();
        api_req.moduleType = "admin";
        api_req.api_url = "admin/user_delete"
        api_req.api_type = "web";
        api_req.access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJhdWQiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJpYXQiOjE2NTQ2NjQ0MzksIm5iZiI6MTY1NDY2NDQzOSwiZXhwIjoxNjU0NjgyNDM5LCJhY2Nlc3NfZGF0YSI6eyJ0b2tlbl9hY2Nlc3NJZCI6IjIiLCJ0b2tlbl9hY2Nlc3NOYW1lIjoidGVzdGluZzA0MDYyMDIyIiwidG9rZW5fYWNjZXNzVHlwZSI6IjIifX0.NaymQDSiON2R3tKICGNpj6hsQfg9DGwEcZzrJcvsqbI";
        api_delete.action = "user_delete";
        api_delete.user_id = userid;
        api_req.element_data = api_delete;
        this.serverService.sendServer(api_req).subscribe((response: any) => {
          if (response.status == true) {
    
            iziToast.success({
              message: "User deleted successfully",
              position: 'topRight'
            });
            this.userList({});
          }
        }),
          (error: any) => {
            console.log(error);
          };
      }
    })

  }
  userEnableDisable(userid: any) {
    let api_req: any = new Object();
    let api_enableDisable: any = new Object();
    api_req.moduleType = "admin";
    api_req.api_url = "admin/user_enable_disable"
    api_req.api_type = "web";
    api_req.access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJhdWQiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJpYXQiOjE2NTQ2NjQ0MzksIm5iZiI6MTY1NDY2NDQzOSwiZXhwIjoxNjU0NjgyNDM5LCJhY2Nlc3NfZGF0YSI6eyJ0b2tlbl9hY2Nlc3NJZCI6IjIiLCJ0b2tlbl9hY2Nlc3NOYW1lIjoidGVzdGluZzA0MDYyMDIyIiwidG9rZW5fYWNjZXNzVHlwZSI6IjIifX0.NaymQDSiON2R3tKICGNpj6hsQfg9DGwEcZzrJcvsqbI";
    api_enableDisable.action = "user_enable_disable";
    api_enableDisable.user_id = userid;
    api_req.element_data = api_enableDisable;


    this.serverService.sendServer(api_req).subscribe((response: any) => {
      this.userEnableDisableStatus = response[1].staff_status;
      console.log("response status", response[0].status);
      console.log("response staff status", response[1].staff_status);

      if (response[0].status == true) {
        this.userEnableDisableStatus = response[1].staff_status;
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Enabled',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Disabled',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });

  }
  passwordReset(userId:any){
    let api_req: any = new Object();
    let api_pwdReset: any = new Object();
    api_req.moduleType = "admin";
    api_req.api_url = "admin/user_pwd_reset"
    api_req.api_type = "web";
    api_req.access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJhdWQiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJpYXQiOjE2NTQ2NjQ0MzksIm5iZiI6MTY1NDY2NDQzOSwiZXhwIjoxNjU0NjgyNDM5LCJhY2Nlc3NfZGF0YSI6eyJ0b2tlbl9hY2Nlc3NJZCI6IjIiLCJ0b2tlbl9hY2Nlc3NOYW1lIjoidGVzdGluZzA0MDYyMDIyIiwidG9rZW5fYWNjZXNzVHlwZSI6IjIifX0.NaymQDSiON2R3tKICGNpj6hsQfg9DGwEcZzrJcvsqbI";
    api_pwdReset.action = "user_pwd_reset";
    api_pwdReset.user_id = userId;
    api_req.element_data = api_pwdReset;


    this.serverService.sendServer(api_req).subscribe((response: any) => {
   

      if (response.status == true) {
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Password Reset Successful',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Password Reset not Success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }

  ProductPermission(userId:any){
    let api_req: any = new Object();
    let api_prodPerm: any = new Object();
    api_req.moduleType = "admin";
    api_req.api_url = "admin/user_pwd_reset"
    api_req.api_type = "web";
    api_req.access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJhdWQiOiJ1cGRhdGVzLm1jb25uZWN0YXBwcy5jb20iLCJpYXQiOjE2NTQ2NjQ0MzksIm5iZiI6MTY1NDY2NDQzOSwiZXhwIjoxNjU0NjgyNDM5LCJhY2Nlc3NfZGF0YSI6eyJ0b2tlbl9hY2Nlc3NJZCI6IjIiLCJ0b2tlbl9hY2Nlc3NOYW1lIjoidGVzdGluZzA0MDYyMDIyIiwidG9rZW5fYWNjZXNzVHlwZSI6IjIifX0.NaymQDSiON2R3tKICGNpj6hsQfg9DGwEcZzrJcvsqbI";
    api_prodPerm.action = "user_pwd_reset";
    api_prodPerm.user_id = userId;
    api_req.element_data = api_prodPerm;


    this.serverService.sendServer(api_req).subscribe((response: any) => {
 

      if (response.status == true) {
       
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Enabled',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'User Disabled',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });

  }
}
