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

    const nav = document.querySelectorAll('.nav-item');
    for(let i=0; i<nav.length; i++){
        nav[i].addEventListener('click', function() {
          const act = document.querySelectorAll('.active');
          for(let j = 0; j<act.length; j++ ){
            act[j].classList.remove('active');
          }
          this.classList.add('active');
        });
    }
  }

}
