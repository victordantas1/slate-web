import { Component } from '@angular/core';

import { PagePlaceholderComponent } from '../../shared/ui/page-placeholder.component';

@Component({
  selector: 'app-month-page',
  imports: [PagePlaceholderComponent],
  template: '<app-page-placeholder title="Mês" note="Tela de Mês — issue #4." />',
})
export class MonthPage {}
