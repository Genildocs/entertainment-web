import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AngularSvgIconModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
})
export class LogoComponent {}
