import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// describe es un bloque que agrupa pruebas relacionadas
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>
  let compile: HTMLElement;

  /**
   * Antes de cada prueba, se configura el entorno de pruebas
   * Aquí se declara el componente que se va a probar
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compile = fixture.nativeElement as HTMLElement;
  });

  /**
   * Prueba para verificar que el componente se crea correctamente
   */
  it('should create the app', () => {
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
    const app = fixture.componentInstance;
    expect(app.title).toEqual('01-zoneless-calculator');
  });

  // it('should render title', () => {
  //   fixture.detectChanges();
  //   expect(compile.querySelector('h1')?.textContent).toContain('Hello, 01-zoneless-calculator');
  // });

  it('should render outer outlet',() => {
    expect(compile.querySelector('router-outlet')).not.toBeNull();
  })
});
