import { Component, signal, output } from '@angular/core';
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
  newCharacter = output<Character>()


    addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    console.log({ name: this.name(), power: this.power() });

    const newCharacter: Character = {
      id: Math.floor(Math.random()),
      name: this.name(),
      power: this.power(),
    };


    console.log(newCharacter);

    this.newCharacter.emit(newCharacter);
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
