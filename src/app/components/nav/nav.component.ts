import { Component, OnInit } from '@angular/core';
import { fadeEarly } from 'src/app/animate';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    fadeEarly
  ]
})

export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const element = document.querySelector('.navbar-brand');
    element.addEventListener('mouseenter', function() {
      this.classList.add('animated', 'jello', 'ease-in');
    });
    element.addEventListener('mouseleave', function() {
      this.classList.remove('animated', 'jello', 'ease-in');
    });
  }

}
