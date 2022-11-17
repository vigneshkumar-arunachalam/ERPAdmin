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
    pageLimit = 50;
    paginationData: any = { "info": "hide" };
    offset_count = 0;
    //userlist
    user_list:any;
    //group checkbox

    groupSelectCommonId:any;
    checkbox_value:any;
    edit_array:any=[];

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
     
      
      console.log("this.user_list",this.user_list)
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
EditUserNavigation(){
  this.router.navigate(['/edituser']);
}
}
