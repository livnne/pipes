import { DatePipe, LowerCasePipe, UpperCasePipe, AsyncPipe, SlicePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, SlicePipe, CurrencyPipe, DecimalPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  presentDate = new Date();
  currentTime$!: Observable<Date>;
  constructor () {
    this.currentTime$ = interval(1000).pipe(map(() => new Date()));
  }
  title: string = "Angular Pipes"
  price : number= 2000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
}