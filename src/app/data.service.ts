import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  public sliders = [
    [
      {title: 'Street-One/CECIL'},
      {title: "image", image: 'assets/so/so_x_1.jpg'},
      {title: "info", info: 'hier steht die beschreibung zu dem projekt'},
      {title: "technology", stack: ['angular', 'typescript', 'SCSS', 'docker']},
      {title: "ccc"},
      {title: "dd"},
      {title: "eee"},
    ],
    [
      {title: "slider 2"},
      {title: "xyz2"},
      {title: "mno2"},
      {title: "abc2"},
      {title: "technology", stack: ['angular', 'universal', 'typescript', 'SCSS', 'docker']},
      {title: "mno2"},
    ],
    [
      {title: "slider 3"},
      {title: "xyz2"},
      {title: "mno2"},
      {title: "technology", stack: ['angular', 'ssr', 'typescript', 'CSS', 'docker', 'traefik']},
    ],
  ];
}
