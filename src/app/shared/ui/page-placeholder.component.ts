import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-placeholder',
  template: `
    <section class="placeholder">
      <h1>{{ title() }}</h1>
      <p>{{ note() }}</p>
    </section>
  `,
  styles: `
    .placeholder {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      padding: var(--space-6);
    }
    p {
      margin: var(--space-2) 0 0;
      color: var(--color-muted);
    }
  `,
})
export class PagePlaceholderComponent {
  readonly title = input.required<string>();
  readonly note = input('');
}
