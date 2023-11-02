import { Component, Input } from '@angular/core';
import { NavItem, navData } from './side-nav-data';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
  @Input() sideNavCollapsed = false;
  navItems: NavItem[] = navData();

  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;

  sideNavToggle() {
    throw new Error('Method not implemented.');
  }
}
