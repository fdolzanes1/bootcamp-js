import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  title: string = "Counter";
  valor: number = 0;

  incrementar() {
    this.valor++;
  }

  decrementar() {
    this.valor--;
  }
  
}
