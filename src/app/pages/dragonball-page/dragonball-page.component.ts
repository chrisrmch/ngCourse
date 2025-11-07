import { Component, signal, computed } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonBallPageComponent {

  name = signal("Gohan")
  power = signal(100)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  powerClasses = computed(
    () => {
      return {
        'text-danger': true,
      };
    });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    console.log({ name: this.name(), power: this.power() });

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update(
      (list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
