import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroesService';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

	heroe:any = {};

	constructor(
		private _heroesService: HeroesServices,
		private activatedRoute: ActivatedRoute) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe( params => {
			this.heroe = this._heroesService.getHeroe( params['id'] );
		});
	}

}
