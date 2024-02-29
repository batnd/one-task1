import { Component } from '@angular/core';
import {RectangleComponent} from "@pages/entertainment/components/rectangle/rectangle.component";

@Component({
  selector: 'app-entertainment',
  standalone: true,
  imports: [
    RectangleComponent
  ],
  templateUrl: './entertainment.component.html',
  styleUrl: './entertainment.component.scss'
})
export class EntertainmentComponent {
  public childComponentPosition: string = 'left: 20px; top: 20px';

  public onChildComponentChangedPosition(position: string): void {
    this.childComponentPosition = position;
  }
}
