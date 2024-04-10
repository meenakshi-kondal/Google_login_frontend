import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonButtonData } from '../../interfaces/common';
@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss'
})
export class CommonButtonComponent {
  // To get the button details
  @Input() buttonDetails: CommonButtonData = {
      value: 'Save',
      width: '100%',
      color: 'white',
      background: 'var(--primary-color)',
      border: 'none',
      borderRadius: '5px',
    };

}

