import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavItem {
  readonly path: string;
  readonly label: string;
}

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  protected readonly nav: readonly NavItem[] = [
    { path: '/mes', label: 'Mês' },
    { path: '/compromissos', label: 'Compromissos' },
    { path: '/configuracao', label: 'Configuração' },
  ];
}
