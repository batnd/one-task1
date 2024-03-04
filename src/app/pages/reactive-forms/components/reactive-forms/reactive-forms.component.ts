import {Component, inject} from '@angular/core';
import {ColorizePipe} from "@pages/directives/pipes/colorize.pipe";
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [
    ColorizePipe,
    FormsModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private nameFieldPattern: RegExp = /^[а-яА-Яa-zA-Z]+-[а-яА-Яa-zA-Z]+$/;
  private phoneFieldPattern: RegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  private emailFieldPattern: RegExp = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.nameFieldPattern)]],
    phone: ['', [Validators.required, Validators.pattern(this.phoneFieldPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailFieldPattern)]],
    interests: this.fb.array([
      this.fb.control('', Validators.required)
    ])
  });

  get nameControl(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get phoneControl(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  get emailControl(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get interests(): FormArray {
    return this.form.get('interests') as FormArray;
  }


  public isInterestControlInvalid(index: number): boolean {
    const control: FormControl = (this.form.get('interests') as FormArray).at(index) as FormControl;
    return control.invalid && control.dirty;
  }

  public createInterestField(): FormControl {
    return this.fb.control('', Validators.required);
  }

  public addInterestField(): void {
    const currentInterests: FormArray = this.form.get('interests') as FormArray;
    currentInterests.push(this.createInterestField());
  }

  public removeInterest(index: number): void {
    const currentInterests: FormArray = this.form.get('interests') as FormArray;
    currentInterests.removeAt(index);
  }

  public save(): void {
    this.nameControl.markAsDirty();
    this.phoneControl.markAsDirty();
    this.emailControl.markAsDirty();
    const interestsControls: FormArray = this.form.get('interests') as FormArray;
    interestsControls.controls.forEach(control => control.markAsDirty());

    if (this.form.valid
      && this.nameControl.value
      && this.phoneControl.value
      && this.emailControl.value
      && this.form.get('interests')?.valid) {
      console.log(this.form.value);
    }
  }
}
