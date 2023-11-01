import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
 