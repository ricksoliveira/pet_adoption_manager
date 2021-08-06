import { Component, OnInit } from "@angular/core";
import { Pet } from "./pet";
import { PetService } from "./pet.service";

@Component({
    templateUrl: './pet-list.component.html',
    styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

    _pets: Pet[] = [];

    _filteredPets: Pet[] = [];
    _filterByName!: string;
    _filterByRace!: string;

    constructor(private petService: PetService){
    }

    ngOnInit(): void {
        this._pets = this.petService.retrieveAllPets();
        this._filteredPets = this._pets;
    }

    set filterName(value: string){
        this._filterByName = value;
        this._filteredPets = this._pets.filter((pet: Pet) => pet.name
            .toLocaleLowerCase()
            .indexOf(this._filterByName.toLocaleLowerCase()) > -1);
    }

    get filterName(){
        return this._filterByName;
    }

    set filterRace(value: string){
        this._filterByRace = value;
        this._filteredPets = this._pets.filter((pet: Pet) => pet.race
            .toLocaleLowerCase()
            .indexOf(this._filterByRace.toLocaleLowerCase()) > -1);
    }

    get filterRace(){
        return this._filterByRace;
    }

}