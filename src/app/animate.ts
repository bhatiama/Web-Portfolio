import { animate, style, state, query, transition, trigger, group, stagger } from '@angular/animations';

export let fadeEarly = trigger('fadeEarly', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [
    animate(2000, style({ opacity: 1 }))
  ])
]);

export let introPara = trigger('introPara', [
  transition(':enter, :leave', [
    query('.intro', style({ opacity: 0, transform: 'translateX(-150px)' })),
      query('.intro', stagger(200, [
        animate('2000ms ease-in-out', style({ opacity: 1,  transform: 'translateX(0)' }))
      ]))
  ])
]);

export let skillsAnimate = trigger('skillsAnimate', [
    transition(':enter, :leave', [
      query('.skillFade', style({ opacity: 0, transform: 'translateX(-30px)' })),
      query('.skillFade', stagger(50, [
        animate('1000ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ]))
    ])
]);

export let projectsAnimate = trigger('projectsAnimate', [
  transition(':enter, :leave', [
    query('.projectFade', style({ opacity: 0, transform: 'translateX(-30px)' })),
    query('.projectFade', stagger(600, [
      animate('1000ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)' }))
    ]))
  ])
]);
