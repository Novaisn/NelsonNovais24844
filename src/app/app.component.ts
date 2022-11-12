import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Início', url: '/folder/Inicio', icon: 'home' },
    { title: 'Sobre mim', url: 'sobremim', icon: 'person' },
    { title: 'Habilitações', url: 'habilitacao', icon: 'school' },
    { title: 'Passatempos', url: 'passatempos', icon: 'game-controller' },
    { title: 'Contactos', url: 'contactos', icon: 'call' },
  ];
  public labels = [];
  constructor() {}
}
