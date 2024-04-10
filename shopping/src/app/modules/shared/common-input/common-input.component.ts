import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-input',
  standalone: true,
  imports: [],
  templateUrl: './common-input.component.html',
  styleUrl: './common-input.component.scss'
})
export class CommonInputComponent {
// to get the details for input field
  @Input() inputDetails = {
    name: '',
    placeholder: '',
  };

}
