import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-heroe-tarjeta',
	templateUrl: './heroe-tarjeta.component.html',
	styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

	@Input() heroe: any= {};
	@Input() indice: number;

	//nombre del evento que el padre va a estar escuchando y el tipo de dato que va a emitir la funcion/evento
	@Output() heroeSeleccionado: EventEmitter<number>;

	constructor(private router:Router) {
		this.heroeSeleccionado = new EventEmitter();
	}

	ngOnInit() {

	}

	verHeroe(){
		this.router.navigate( ['/heroe', this.indice] );
		//console.log(this.indice);
		//this.heroeSeleccionado.emit( this.indice );
	}

}
