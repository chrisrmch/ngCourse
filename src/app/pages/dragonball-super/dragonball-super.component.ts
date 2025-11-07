import { Component, signal, computed  } from '@angular/core';
import { CharacterList } from "../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { DragonballCharacterAdd } from '../components/dragonball/character-adder/character-adder.component';

@Component({
  selector: 'app-dragon-ball-super',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css',
})
export class DragonBallSuperComponent {

  name = signal("Gohan")
  power = signal(100)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  powerClasses = computed(
    () => {
      return {
        'text-danger': true,
      };
    });

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
