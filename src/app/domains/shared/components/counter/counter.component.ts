import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // Before render
    // Ejecucion una sola ves
    console.log('Constructor');
    console.log(' - '.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    //Before render and During render
    // se ejecuta antes del ngOnInit | depende de donde le estes llamando
    console.log('ngOnChanges');
    console.log(' - '.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomeThing();
    }

    // console.log(duration);
  }

  ngOnInit() {
    // Inicializador | renderiza | after render
    // Ejecucion una sola ves
    // Async, then, subs
    console.log('ngOnInit');
    console.log(' - '.repeat(10));
    console.log('duration=>', this.duration);
    console.log('message=>', this.message);

    // this.counterRef = window.setInterval(() => {
    //   console.log('run interval');
    //   this.counter.update((statePrev) => statePrev + 1);
    // }, 5000);
  }

  ngAfterViewInit() {
    // Ejecuta despues de ngOnInit
    // cuando los hijos de este componente ya se renderizados
    console.log('ngAfterViewInit');
    console.log(' - '.repeat(10));
  }

  ngOnDestroy() {
    // Cuando el componente se destruye | ejm: cuando le pones condicional para que no se muestre es una destruccion
    console.log('ngOnDestroy');
    console.log(' - '.repeat(10));

    // Control de fugas de memoria
    // window.clearInterval(this.counterRef);
  }

  doSomeThing() {
    console.log('doSomeThing | change Duration');
    console.log(' - '.repeat(10));
  }
}
