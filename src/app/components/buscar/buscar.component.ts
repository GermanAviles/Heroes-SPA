import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices, Heroe } from '../../services/heroesService';

@Component({
	selector: 'app-buscar',
	templateUrl: './buscar.component.html',
	styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

	Heroes:Heroe[] = [];
	termino:string;

	constructor(
		private _heroesServices: HeroesServices,
		private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe( params => {
			this.Heroes = this._heroesServices.buscarHeroes( params['termino']);
			this.termino = params['termino'];
			console.log(this.Heroes);
		});
	}

}
