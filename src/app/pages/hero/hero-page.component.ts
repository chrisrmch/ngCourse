import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal} from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";


@Component({
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  imports: [UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroPageComponent {
  protected name = signal("Ironman");
  protected readonly age = signal(45);
  protected readonly description = signal("");

  capitalizedName = computed( () => this.name().toLocaleUpperCase() );

  getHeroDescription() : String {
    return `${this.name()} is ${this.age()} years old.`;
  }

  changeHero() : void {
    this.name.update( n => "Spiderman" );
    this.age.update( n => 22 );

  }

  resetForm() : void {
    this.name.set("Ironman");
    this.age.set(45);
  }

  changeAge() : void {
    this.age.update( n => 60 );
  }
}
