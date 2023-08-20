import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageContentComponent } from 'src/app/shared/components/image-content/image-content.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ImageContentComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {}
