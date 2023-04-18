import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Timer App</h1>
      <h2>{{ time / 100 | number: '1.2-2' }}</h2>
      <button (click)="startTimer()" [disabled]="timerOn">Start</button>
      <button (click)="stopTimer()" [disabled]="!timerOn">Stop</button>
      <button (click)="resetTimer()">Reset</button>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  time: number = 0;
  timerOn: boolean = false;
  interval: any;

  ngOnInit() {}

  startTimer() {
    this.timerOn = true;
    this.interval = setInterval(() => {
      this.time += 10;
    }, 10);
  }

  stopTimer() {
    this.timerOn = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.time = 0;
    clearInterval(this.interval);
    this.timerOn = false;
  }
}
