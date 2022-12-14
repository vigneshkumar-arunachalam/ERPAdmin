


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';



import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;


  title = 'ERPUpdate';
 
  public file_path: string = "";
  templateAuthView = false;
  constructor(private router: Router, private bnIdle: BnNgIdleService,private idle: Idle, private keepalive: Keepalive) { 
   
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }
  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
  // ngOnInit(): void {

  //   this.bnIdle.startWatching(600).subscribe((res) => {
  //     if (res) {
  //       console.log('session expired after 600 seconds');
  //       this.router.navigateByUrl('/timeout');
  //     }
  //   });

  // }
  onActivate(event:any) {
      this.file_path=this.router.url;
      console.log(this.router.url);
      if (localStorage.getItem('access_token')) {
          this.templateAuthView=false;
          } 
          // else if(this.router.url == '/forgot-pwd'){
          //     this.router.navigate(['/forgot-pwd']);
          // }
      else{
          this.templateAuthView=true;
          this.router.navigate(['/login']);
      }
  }
}

