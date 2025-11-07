import { Component, signal } from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-adder',
  imports: [],
  templateUrl: './character-adder.component.html',
})
export class DragonballCharacterAdd {

  name = signal("Gohan")
  power = signal(100)
  characters = signal<Character[]>([]);

    addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    console.log({ name: this.name(), power: this.power() });

    const newCharacter: Character = {
      id: Math.random() + 1,
      name: this.name(),
      power: this.power(),
    };


    console.log(newCharacter);

    // this.characters.update(
    //   (list) => [...list, newCharacter]);
    // this.resetFields();
  }

}
