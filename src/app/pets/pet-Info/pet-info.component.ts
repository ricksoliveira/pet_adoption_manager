import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pet } from "../pet";
import { PetService } from "../pet.service";

@Component({
    templateUrl: './pet-info.component.html',
    styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

    pet!: Pet;

    constructor(private activatedRoute: ActivatedRoute, private petService: PetService){
    }

    ngOnInit(): void{
        this.pet = this.petService.retrievePetById(+this.activatedRoute.snapshot.paramMap.get('id')!);        
    }

}