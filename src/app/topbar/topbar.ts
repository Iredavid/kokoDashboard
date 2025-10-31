import {MatBadgeModule} from '@angular/material/badge';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topbar',
  imports: [FormsModule, MatBadgeModule,],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {
  q = '';
}
