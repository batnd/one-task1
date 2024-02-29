import {Component, DestroyRef, EventEmitter, inject, Output} from '@angular/core';
import {interval, Subscription, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-rectangle',
  standalone: true,
  imports: [],
  templateUrl: './rectangle.component.html',
  styleUrl: './rectangle.component.scss'
})
export class RectangleComponent {
  @Output()
  public childComponentPositionEmit: EventEmitter<string> = new EventEmitter<string>();

  public componentPosition: string = 'left: 20px; top: 20px';
  public rectWidth: number = 100;
  public rectHeight: number = 50;

  private subscription: Subscription | null = null;
  private destroyRef: DestroyRef = inject(DestroyRef);

  public color: string = 'red';

  public handleClickRect(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    } else {
      this.subscription = interval(1000)
        .pipe(
          tap(() => {
            this.componentPosition = this.randomizePosition();
            this.color = this.randomizeColor();
          }),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe(() => {
          this.childComponentPositionEmit.emit(this.componentPosition);
        });
    }
  }

  public randomizePosition(): string {
    const windowWidth: number = window.innerWidth;
    const windowHeight: number = window.innerHeight;

    const rectWidth: number = this.rectWidth;
    const rectHeight: number = this.rectHeight;

    const left: number = Math.round(Math.random() * (windowWidth - rectWidth)) - (rectWidth / 2 + 50);
    const top: number = Math.round(Math.random() * (windowHeight - rectHeight)) - (rectHeight / 2 + 100);

    return `left: ${left}px; top: ${top}px`;
  }

  public randomizeColor(): string {
    const red: number = Math.floor(Math.random() * 256);
    const green: number = Math.floor(Math.random() * 256);
    const blue: number = Math.floor(Math.random() * 256);

    return '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1);
  }
}
