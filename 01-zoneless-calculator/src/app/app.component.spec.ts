import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// describe es un bloque que agrupa pruebas relacionadas
describe('AppComponent', () => {
  /**
   * Antes de cada prueba, se configura el entorno de pruebas
   * Aquí se declara el componente que se va a probar
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  /**
   * Prueba para verificar que el componente se crea correctamente
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should be 3", () => {
    // A = ARRANGE
    const num1 = 1;
    const num2 = 2;

    // A = ACT
    const result = num1 + num2;

    // A = ASSERT
    expect(result).toBe(3);
  });

  it(`should have the '01-zoneless-calculator' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('01-zoneless-calculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, 01-zoneless-calculator');
  });
});
