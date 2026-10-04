import { Component } from '@angular/core';

import { PagePlaceholderComponent } from '../../shared/ui/page-placeholder.component';

@Component({
  selector: 'app-commitments-page',
  imports: [PagePlaceholderComponent],
  template: '<app-page-placeholder title="Compromissos" note="Tela de Compromissos — issue #8." />',
})
export class CommitmentsPage {}
