import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css',
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400'
  }
})
export class CalculatorButtonComponent  {
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

}
