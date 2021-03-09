import { Component, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface Skin{
  value: string;
  viewValue: string;
}
interface Mode{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'ucb-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
    ])]
})
export class SidenavComponent implements OnInit {
  expanded1 = false;
  expanded2 = false;
  expanded3 = false;

  actual = '';

  @Input() item: any;
  @Input() depth: number;

  @Output()onClickLink = new EventEmitter<string>();
  @HostBinding('class')classValue = '';
  mode = 'over';
  hasBackdrop = false;
  fillerNav = Array.from({length: 10}, (_, i) => `Nav Item ${i + 1}`);
  mobileQuery: MediaQueryList;
// NAVEGACION LATERAL IZQUIERDA
  sideNavLeftOpen = false;
  // NAVEGACION LATERAL DERECHA
  sideNavRightOpen = false;
  skins: Skin[] = [
    { value: 'dark_theme', viewValue: 'DARK' },
    { value: 'light_theme', viewValue: 'LIGHT' }
  ];
  modes: Mode[] = [
    { value: 'over', viewValue: 'OVER' },
    { value: 'push', viewValue: 'PUSH' },
    { value: 'side', viewValue: 'SIDE' }
  ];
  formModel = new FormGroup({
    skin: new FormControl(''),
    mode: new FormControl(''),
    backdrop: new FormControl(false)
  });
  // ENLACES DE NAVEGACION
  @Input() navItems: any;

  constructor() {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {
    this.valueChanges();
  }

  seTerminoDeAbrir(): void{
    console.log('SE TERMINO DE ABRIR');
  }
  seTerminoDeCerrar(): void{
    console.log('SE TERMINO DE CERRAR');
  }

  toggleSidenavLeft(): void{
    this.sideNavLeftOpen = !this.sideNavLeftOpen;
  }
  // NAVEGACION LATERAL DERECHA
  toggleSidenavRight(): void{
    this.sideNavRightOpen = !this.sideNavRightOpen;
  }
  onSubmit(): void {
    return;
  }
  valueChanges(): void{
    this.formModel.valueChanges.subscribe(
      ( data ) => {
        console.log('valueChanges', data);
        this.mode = data.mode;
        this.hasBackdrop = data.backdrop;
        this.classValue = data.skin;
      }
    );
  }
  metodo(event) {
    console.log('La path recibida en SideNavComponent: ', event);
    this.onClickLink.emit(event);
  }
}
