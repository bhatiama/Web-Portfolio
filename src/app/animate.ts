import { animate, style, state, query, transition, trigger, group, stagger } from '@angular/animations';

export let fadeEarly = trigger('fadeEarly', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [
    animate(2000, style({ opacity: 1 }))
  ])
]);

export let introPara = trigger('introPara', [
  state('void', style({ opacity: 0, transform: 'translateX(-50px)' })),
  transition(':enter, :leave', [
    group([
      animate('3000ms ease-in-out', style({ opacity: 1 })),
      animate('3000ms ease-in-out', style({ transform: 'translateX(0)' }))
    ])
  ])
]);
