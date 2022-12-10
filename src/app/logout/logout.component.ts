import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // sessionStorage.removeItem('user_id');


    Swal.fire({
      title: 'Are you sure to Logout of ERP Admin?',
      text: "Logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.value) {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      }
      else{
        this.router.navigate(['/']);
      }
    })

  }

}
