import { ChangeDetectionStrategy, Component, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from '../calculator-button/calculator-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handleKeyboardEvent($event)',
  }
})
export class CalculatorComponent {

  /**
   * Referencia a los botones de la calculadora.
   * Se usa para poder acceder a los botones desde el componente padre.
   */
  public calculatorButtons = viewChildren(CalculatorButtonComponent);

  /**
   * Maneja el clic en un botón de la calculadora.
   * @param key 
   */
  handleClick(key: string) {
    console.log({key});

  }

  // Escucho el evento de teclado en el documento, no en el componente y el segundo argumento es el evento
  // @HostListener('document:keyup', ['$event'])
  // --Ahora uso el host en el decorador del componente, para escuchar el evento de teclado en el documento--
  handleKeyboardEvent(event: KeyboardEvent) {

    /**
     * Diccionario de equivalentes de teclas.
     * Aquí se pueden agregar equivalentes de teclas para que funcionen con la calculadora
     */
    const keyEquivalents: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'X',
      '/': '÷',
      'Enter': '=',
      'Backspace': '←',
      '+': '+',
      '-': '-',
    }

    /**
     * Obtengo la tecla presionada.
     * Si la tecla no está en el diccionario de equivalentes, uso la tecla presionada.
     */
    const key = event.key;
    const keyValue = keyEquivalents[key] ?? key;



    /**
     * Si la tecla presionada es una de las teclas equivalentes, uso esa tecla.
     * Si no, uso la tecla presionada.
     */
    this.handleClick(keyValue);

    /**
     * Si el botón tiene un estilo de pulsado, lo quito.
     * Si no, lo añado.
     */
    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStyle(keyValue);
    });
  }
}
