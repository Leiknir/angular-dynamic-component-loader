import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { AdComponent }      from '../../interfaces/ad-component';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.scss']
})
export class HeroProfileComponent implements AdComponent {
  constructor(private cdr: ChangeDetectorRef) {}
  @Input() data: any;
}
