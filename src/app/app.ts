import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSec } from './nav-sec/nav-sec';
import { Topbar } from './topbar/topbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavSec, Topbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('kokoDashboard');
}
