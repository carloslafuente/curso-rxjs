import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => console.log('Hola mundo');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 2000);

// El tercer parametro es el state, que deberia ser un objeto para poder pasar mas parametros
// asyncScheduler.schedule(saludar2, 2000, 'Carlos');

// No puede recibir una lambda function, arrow function
const subscription = asyncScheduler.schedule(
  function (state) {
    console.log('state', state);

    this.schedule(state + 1, 1000);
  },
  3000,
  10
);

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
