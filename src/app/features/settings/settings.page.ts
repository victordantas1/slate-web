import { Component } from '@angular/core';

import { PagePlaceholderComponent } from '../../shared/ui/page-placeholder.component';

@Component({
  selector: 'app-settings-page',
  imports: [PagePlaceholderComponent],
  template:
    '<app-page-placeholder title="Configuração" note="Contas, categorias e titulares — issues #12 a #14." />',
})
export class SettingsPage {}
