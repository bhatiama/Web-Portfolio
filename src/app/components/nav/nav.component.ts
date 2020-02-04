import { Component, OnInit } from '@angular/core';
import { fadeEarly } from 'src/app/animate';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    fadeEarly
  ]
})

export class NavComponent implements OnInit {

  constructor(location: Location, private router: Router) { }

  ngOnInit() {
    const element = document.querySelector('.navbar-brand');
    element.addEventListener('mouseenter', function () {
      this.classList.add('animated', 'jello', 'ease-in');
    });
    element.addEventListener('mouseleave', function () {
      this.classList.remove('animated', 'jello', 'ease-in');
    });

    const nav = document.querySelectorAll('.nav-item');
    const path = location.pathname.split('/');

    const act = document.querySelectorAll('.active');
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < act.length; j++) {
      act[j].classList.remove('active');
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < nav.length; i++) {
      if (nav[i].classList.contains(path[1])) {
        nav[i].classList.add('active');
      }
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < nav.length; i++) {
      nav[i].addEventListener('click', function () {
        const active = document.querySelectorAll('.active');
        // tslint:disable-next-line: prefer-for-of
        for (let j = 0; j < active.length; j++) {
          active[j].classList.remove('active');
        }
        this.classList.add('active');
      });
      console.log(location.pathname.split('/'));
    }
  }

}
