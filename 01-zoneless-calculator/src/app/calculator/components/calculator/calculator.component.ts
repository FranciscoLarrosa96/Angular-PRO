import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  }
})
export class CalculatorComponent {

  /**
   * Maneja el clic en un botón de la calculadora.
   * @param key 
   */
  handleClick(key: string) {
    console.log('Leyendo el output', key);

  }

  // Escucho el evento de teclado en el documento, no en el componente y el segundo argumento es el evento
  // @HostListener('document:keyup', ['$event'])
  // --Ahora uso el host en el decorador del componente, para escuchar el evento de teclado en el documento--
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    this.handleClick(key);
  }
}
