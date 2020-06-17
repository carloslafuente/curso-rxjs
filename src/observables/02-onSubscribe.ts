import { Observable, Observer } from 'rxjs';
const observer: Observer<any> = {
  next: (value) => console.log('[next]: ', value),
  error: (error) => console.warn('[error]: ', error),
  complete: () => console.info('[complete]'),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // Crear un contador: para emitir cada segundo un valor
  let contador = 0;
  const interval = setInterval(() => {
    contador++;
    subscriber.next(contador);
    console.log(contador);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 4000);

  return () => {
    clearInterval(interval);
    console.log('[interval] destruido');
  };
});

const suscripcion = intervalo$.subscribe(observer);
const suscripcion2 = intervalo$.subscribe(observer);
const suscripcion3 = intervalo$.subscribe(observer);

suscripcion.add(suscripcion2).add(suscripcion3);

setTimeout(() => {
  suscripcion.unsubscribe();
  // suscripcion2.unsubscribe();
  // suscripcion3.unsubscribe();

  console.log('Terminaron las suscripciones');
}, 6000);
