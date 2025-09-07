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
});
