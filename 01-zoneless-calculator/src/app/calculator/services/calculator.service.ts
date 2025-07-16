import { Injectable, signal } from "@angular/core";

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/', '%'];
const specialOperators = ['=', 'C', 'CE', 'AC', '+/-', 'Backspace'];

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    public resultTxt = signal<string>('10');
    public subResultTxt = signal<string>('20');
    public lastOperator = signal<string>('+');


    public constructNumber(value: string) {
        // Validar el input
        if (![...numbers, ...operators, ...specialOperators].includes(value)) {
            console.warn(`El valor ${value} no es un número o un operador válido.`);
            return;
        }

        // =
        if (value === '=') {
            console.log('Calcular el resultado');
            return;
        }

        if (value === 'C') {
            this.resultTxt.set('0');
            this.subResultTxt.set('0');
            this.lastOperator.set('+');
            return;
        }

        // Backspace
        if (value === 'Backspace') {
            const currentResult = this.resultTxt();
            if (currentResult.length > 1) {
                this.resultTxt.update(v => v.slice(0, -1));
            } else {
                this.resultTxt.set('0');
            }
            return;
        }

        // Opertadores
        if (operators.includes(value)) {
            this.lastOperator.set(value);
            this.subResultTxt.set(this.resultTxt());
            this.resultTxt.set('0');
            return;
        }

        // Validar punto decimal
        if (value === '.' && !this.resultTxt().includes('.')) {
            if(this.resultTxt() === '0' || this.resultTxt() === '') {
                this.resultTxt.update(v => v + '0.');
            }
            return;
        }

        this.resultTxt.update(v => v + '.');
        return;
    }

}
