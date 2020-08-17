import { Observable, Observer, Subject } from 'rxjs';
const observer: Observer<any> = {
  next: (value) => console.log('[next]: ', value),
  error: (error) => console.warn('[error]: ', error),
  complete: () => console.info('[complete]'),
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.floor(Math.random() * 10));
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log('[intervalo] destruido');
  };
});

// const subs1 = intervalo$.subscribe((randomNumer) => console.log('subs1',randomNumer));
// const subs2 = intervalo$.subscribe((randomNumer) => console.log('subs2',randomNumer));

// 1.- Casteo multiple
// 2.- Tambien es un Observer
// 3.- Tambien se puede manejar el next, error y complete
const subject$ = new Subject();

const suscripcion = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);

const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(15);
  subject$.complete();
  suscripcion.unsubscribe();
}, 3000);
