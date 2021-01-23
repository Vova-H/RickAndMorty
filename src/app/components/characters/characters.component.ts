import { Component, OnInit } from '@angular/core';
import { CHARACTERS, ICharacter } from '../../models/characters.model';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public characters:ICharacter[] = CHARACTERS;
  constructor() { }

  ngOnInit(): void {
  }

  public showEpisodes(episodes:string[]){
    console.log(episodes);
  }

}
