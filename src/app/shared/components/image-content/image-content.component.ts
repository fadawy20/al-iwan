import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-content.component.html',
  styleUrls: ['./image-content.component.scss']
})
export class ImageContentComponent {

  @Input() labelTitle!: string;
  @Input() labelContent!: string;
  @Input() srcImage!: string;
  @Input() classDirection!: string;
  @Input() classContent!: string[];
  @Input() isImageFirst: boolean = true;

}
