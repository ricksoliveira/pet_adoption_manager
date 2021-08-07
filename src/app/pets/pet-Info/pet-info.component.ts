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
        this.petService.retrievePetById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: pet => this.pet = pet,
            error: e => console.log('Error', e)
        });        
    }

    save(): void{
        this.petService.save(this.pet).subscribe({
            next: pet => console.log('Pet saved successfully: ', pet),
            error: e => console.log('Error ', e)
        });
    }

    deletePetById(id: number): void {
        this.petService.deletePetById(id).subscribe({
            next: () => {
                console.log('Deleted Pet successfully!');
            },
            error: e => console.log('Error ', e)
        });
    }

}