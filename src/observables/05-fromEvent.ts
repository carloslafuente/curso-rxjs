import { fromEvent } from 'rxjs';

// Eventos del DOM

const source1$ = fromEvent<MouseEvent>(document, 'click');
const source2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: (val) => console.log('[next]: ', val),
};

source1$.subscribe(({ x, y }) => {
  console.log(x, y);
});

source2$.subscribe((evento) => {
  console.log(evento.key);
});
