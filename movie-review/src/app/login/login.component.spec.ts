import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the password input field', () => {
    const passwordInput = fixture.nativeElement.querySelector('input[name="password"]');
    expect(passwordInput).toBeTruthy();
  });

  it('should capture user input in the password field', () => {
    const passwordInput = fixture.nativeElement.querySelector('input[name="password"]');
    const testPassword = 'testpassword123';

    // Simulate user input
    passwordInput.value = testPassword;
    passwordInput.dispatchEvent(new Event('input'));

    // Expect the component's password property to be updated
    expect(component.password).toBe(testPassword);
  });
});
