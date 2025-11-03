import { Component, signal } from "@angular/core";
import { App } from '../../app.component';


@Component({
  selector: 'app-placeholder',
  imports: [],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css',
})
export class PlaceholderComponent {
  protected readonly title = signal('AngularCourseFH');
}
