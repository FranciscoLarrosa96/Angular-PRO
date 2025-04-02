import { Component } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  handleClick(key: string) {
    console.log({key});
    
  }
}
