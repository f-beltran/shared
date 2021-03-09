import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'ucb-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
    ])
  ]
})
export class MenuItemsComponent implements OnInit {
  expanded: boolean;

  actual = '';

  @Input() navItems: any;
  // @Input() depth: number;

  @Output() clickLink = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void { return; }
  onItemSelected(menuItem, newValue: string){
    this.actual = newValue;
    if (menuItem.children && menuItem.children.length) {
      // this.expanded1 = !this.expanded1;
    }
    if (!menuItem.children || !menuItem.children.length) {
      this.clickLink.emit(menuItem.route)
      // console.log('-->',menuItem);
    }
  }

}
