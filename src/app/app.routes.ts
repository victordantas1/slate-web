import { Routes } from '@angular/router';

import { ShellComponent } from './shared/layout/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'mes' },
      {
        path: 'mes',
        title: 'Mês · Slate',
        loadComponent: () => import('./features/month/month.page').then((m) => m.MonthPage),
      },
      {
        path: 'compromissos',
        title: 'Compromissos · Slate',
        loadComponent: () =>
          import('./features/commitments/commitments.page').then((m) => m.CommitmentsPage),
      },
      {
        path: 'configuracao',
        title: 'Configuração · Slate',
        loadComponent: () =>
          import('./features/settings/settings.page').then((m) => m.SettingsPage),
      },
    ],
  },
  { path: '**', redirectTo: 'mes' },
];
