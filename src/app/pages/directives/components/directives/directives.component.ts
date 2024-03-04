import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ColorizePipe} from "@pages/directives/pipes/colorize.pipe";

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    ColorizePipe
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  private fb: FormBuilder = inject(FormBuilder);
  public inputForm: FormGroup = this.fb.group({
    input: ['', Validators.pattern(/^[a-zA-Z0-9]*\.?[a-zA-Z0-9]*$/)]
  });
  public results: string[] = [];

  public onlySimpleNumbers(): boolean {
    const value: string | null | undefined = this.inputForm.value.input;
    if (value) return /^[0-9]$/.test(value);
    else return false;
  }

  public onlyCompNumbers(): boolean {
    const value: string | null | undefined = this.inputForm.value.input;
    if (value) return /^[0-9]{2,}$/.test(value);
    else return false;
  }

  public save(): void {
    this.results = [...this.results, this.inputForm.value.input];
    this.inputForm.reset();
  }
}
