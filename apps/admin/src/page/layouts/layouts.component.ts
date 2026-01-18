import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import BreadcrumbComponent from './breadcrumb.component';

@Component({
  selector: 'app-layouts',
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css',
  standalone: true
})
export class LayoutsComponent {}
