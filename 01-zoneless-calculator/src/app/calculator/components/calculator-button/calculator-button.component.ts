import { Component, ElementRef, HostBinding, input, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-700'
  }
})
export class CalculatorButtonComponent {

  public isPressed = signal(false);

  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  public onClick = output<string>();


  public isCommand = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });
  public isDoubleSize = input(false, {
    transform: (value: boolean | string) =>
      typeof value === 'string' ? value === '' : value,
  });

  // @HostBinding('class.is-command') get commandStyle() {
  //   return this.isCommand();
  // }
  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }
  // Con el "host" se le puede agregar estilos al componente desde el padre, en este caso se le agrega un borde a la derecha y abajo
  // en este caso le aplica a todo el componente, pero se puede aplicar a un elemento específico dentro del componente
  // Se puede usar para agregar clases de tailwind, pero no es necesario, ya que se pueden agregar directamente en el template
  // En este caso se le aplica a calcular-button

  handleClick() {

    if (!this.contentValue()?.nativeElement) {
      return;
    }

    const value = this.contentValue()!.nativeElement.innerText;

    this.onClick.emit(value);
  }

  /**
   * Maneja el evento de teclado y aplica un estilo al botón presionado.
   * @param key La tecla presionada.
   */
  keyboardPressedStyle(key: string) {
    if (!this.contentValue()) return;
    const button = this.contentValue()!.nativeElement.innerText;
    if (button === key) {
      this.isPressed.set(true);
    }

    setTimeout(() => {
      this.isPressed.set(false);
    }, 100);
  }

}
