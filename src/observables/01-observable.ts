import { Observable, Observer } from 'rxjs';
// Este observer es un objeto de la interfaz Observer
// que implementa next, error, complete
const observer: Observer<any> = {
  next: (value) => console.log('[next]: ', value),
  error: (error) => console.warn('[error]: ', error),
  complete: () => console.info('[complete]'),
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo');
  subs.next('Hola');
  subs.next('Mundo');

  // Forzando un error
  // const a = undefined;
  // a.nombre = 'Carlos';

  subs.complete();

  subs.next('Hola');
  subs.next('Mundo');
});

// obs$.subscribe((res) => console.log(res));

// obs$.subscribe(
//   (valor) => console.log('next: ', valor),
//   (error) => console.warn('error: ', error),
//   () => console.log('complete')
// );

obs$.subscribe(observer);
