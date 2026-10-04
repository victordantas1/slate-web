import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  it('renderiza a navegação principal com as três áreas', async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(ShellComponent);
    fixture.detectChanges();

    const links = Array.from<HTMLAnchorElement>(
      fixture.nativeElement.querySelectorAll('nav a'),
    ).map((a) => a.textContent?.trim());

    expect(links).toEqual(['Mês', 'Compromissos', 'Configuração']);
  });
});
