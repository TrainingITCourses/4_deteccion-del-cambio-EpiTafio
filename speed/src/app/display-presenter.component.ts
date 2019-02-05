import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-display-presenter',
  template: `
    <p>caracter {{ cadena.caracter }}</p>

  `,
  styles: []
})
export class DisplayPresenterComponent implements OnInit {
  @Input() public cadena = { caracter: 'xXx' };
  constructor() {}
  ngOnInit() {}

}
