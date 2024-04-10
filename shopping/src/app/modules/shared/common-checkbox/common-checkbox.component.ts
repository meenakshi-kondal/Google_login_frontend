import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-common-checkbox',
  standalone: true,
  imports: [CheckboxModule],
  templateUrl: './common-checkbox.component.html',
  styleUrl: './common-checkbox.component.scss'
})
export class CommonCheckboxComponent {

}
