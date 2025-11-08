import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {

  characters = signal<Character[]>( loadFromLocalStorage() );

  addCharacter(newCharacter: Character) {
    this.characters.update(
      (list) => [...list, newCharacter]);
  }

  saveToLocalStorage = effect(() => {
    console.log(`characer count changed: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()) )
  })

}

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}
