import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe} from '../../services/heroesService';
import { Router } from '@angular/router';


@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	Heroes:Heroe[] = [];

	constructor(
		private _heroesService: HeroesServices,
		private router: Router) {

		this.Heroes = this._heroesService.getHeroes();

	}

	ngOnInit() {
	}

	verHeroe( id: number ){
		this.router.navigate( ['/heroe', id] );
	}
	
}
