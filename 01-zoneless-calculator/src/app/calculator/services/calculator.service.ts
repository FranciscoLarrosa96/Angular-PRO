import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CalculatorService {
    public resultTxt = signal<string>('10');
    public subResultTxt = signal<string>('20');
    public lastOperator = signal<string>('+');

}
