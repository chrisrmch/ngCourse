import { Component, signal, computed, inject } from '@angular/core';
import { CharacterList } from "../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { DragonballCharacterAdd } from '../components/dragonball/character-adder/character-adder.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragon-ball-super',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css',
})
export class DragonBallSuperComponent {

  public dragonballService = inject(DragonballService);



}
