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
