
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
