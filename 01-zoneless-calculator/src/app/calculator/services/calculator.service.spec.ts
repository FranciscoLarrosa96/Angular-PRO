import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
    let service: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculatorService);
    });



    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be created with initial values', () => {
        expect(service.resultTxt()).toBe('10');
        expect(service.subResultTxt()).toBe('20');
        expect(service.lastOperator()).toBe('+');
    });

    it('should set resultTxt, subResultTxt to 0 when C is pressed', () => {
        service.resultTxt.set('12345');
        service.subResultTxt.set('67890');
        service.lastOperator.set('*');

        service.constructNumber('C');
        expect(service.resultTxt()).toBe('0');
        expect(service.subResultTxt()).toBe('0');
        expect(service.lastOperator()).toBe('+');
    });

    it('sould update resultTxt with number input', () => {
        service.resultTxt.set('0');
        service.constructNumber('5');
        expect(service.resultTxt()).toBe('5');
        service.constructNumber('3');
        expect(service.resultTxt()).toBe('53');
    });

    it('should handle operators correctly', () => {
        service.resultTxt.set('5');
        service.subResultTxt.set('10');
        service.lastOperator.set('+');
        service.constructNumber('*');
        expect(service.resultTxt()).toBe('0');
        expect(service.subResultTxt()).toBe('15');
        expect(service.lastOperator()).toBe('*');
    });

    it('should calculate result correctly for addition', () => {
        service.resultTxt.set('5');
        service.subResultTxt.set('10');
        service.lastOperator.set('+');
        service.constructNumber('=');
        expect(service.resultTxt()).toBe('15');
    });

    it('should calculate result correctly for subtraction', () => {
        service.resultTxt.set('5');
        service.subResultTxt.set('10');
        service.lastOperator.set('-');
        service.constructNumber('=');
        expect(service.resultTxt()).toBe('5');
    });

    it('should calculate result correctly for multiplication', () => {
        service.resultTxt.set('5');
        service.subResultTxt.set('10');
        service.lastOperator.set('*');
        service.constructNumber('=');
        expect(service.resultTxt()).toBe('50');
    });

    it('should calculate result correctly for division', () => {
        service.resultTxt.set('5');
        service.subResultTxt.set('10');
        service.lastOperator.set('/');
        service.constructNumber('=');
        expect(service.resultTxt()).toBe('2');
    });

    it('should handle decimal points correctly', () => {
        service.resultTxt.set('0');
        service.constructNumber('.');
        expect(service.resultTxt()).toBe('0.');
        service.constructNumber('5');
        expect(service.resultTxt()).toBe('0.5');
        service.constructNumber('.');
        expect(service.resultTxt()).toBe('0.5.'); // No debería agregar otro punto
    });
});
