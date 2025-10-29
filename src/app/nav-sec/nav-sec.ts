import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-nav-sec',
  imports: [RouterModule, MatExpansionModule],
  templateUrl: './nav-sec.html',
  styleUrl: './nav-sec.scss',
})
export class NavSec {
  expanded = false;

}
