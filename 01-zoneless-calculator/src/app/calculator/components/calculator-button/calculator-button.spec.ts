import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CalculatorButtonComponent } from "./calculator-button.component";


describe('CalculatorButtonComponent', () => {
    let fixture: ComponentFixture<CalculatorButtonComponent>;
    let compiled: HTMLElement;
    let component: CalculatorButtonComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CalculatorButtonComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CalculatorButtonComponent);
        compiled = fixture.nativeElement;
        component = fixture.componentInstance;  

        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should apply w-1/4 doubleSize is false', () => {
        const hostClasses: string[] = compiled.classList.value.split(' ');
        expect(hostClasses).toContain('w-1/4');
        expect(component.isDoubleSize()).toBeFalse();
    });
    it('should apply w-2/4 doubleSize is true', () => {
        fixture.componentRef.setInput('isDoubleSize', true);
        fixture.detectChanges();
        const hostClasses: string[] = compiled.classList.value.split(' ');
        expect(hostClasses).toContain('w-2/4');
        expect(component.isDoubleSize()).toBeTrue();
    });
});