import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERPUpdate';
 
  public file_path: string = "";
  templateAuthView = false;
  constructor(private router: Router, private bnIdle: BnNgIdleService) { }
  ngOnInit(): void {
    
    this.bnIdle.startWatching(600).subscribe((res) => {
      if (res) {
        console.log('session expired after 600 seconds');
        this.router.navigateByUrl('/timeout');
      }
    });

  }
  onActivate(event:any) {
      this.file_path=this.router.url;
      console.log(this.router.url);
      if (localStorage.getItem('access_token')) {
          this.templateAuthView=false;
          if(this.router.url!=''){
            this.router.navigate([this.router.url]);
          }
          } 
         
      else{
          this.templateAuthView=true;
          this.router.navigate(['/login']);
      }
  }
}
