import {MatBadgeModule} from '@angular/material/badge';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResponsiveMenu } from '../services/responsive-menu';

@Component({
  selector: 'app-topbar',
  imports: [FormsModule, MatBadgeModule,],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  responsiveMenuService = inject(ResponsiveMenu);
  q = '';
  expanded = true;

  expandMenu(){
    this.expanded = !this.expanded;
    this.responsiveMenuService.dataSource.next(this.expanded);
  }
  // collapseMenu(){
  //   this.responsiveMenuService.dataSource.next(false);
  // }
}
