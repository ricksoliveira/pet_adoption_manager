import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from './pet';

@Injectable({
    providedIn: 'root'
})
export class PetService{

    private petUrl: string = 'http://localhost:3100/api/pets';

    constructor(private httpClient: HttpClient){
    }

    retrieveAllPets(): Observable<Pet[]> {
        return this.httpClient.get<Pet[]>(this.petUrl);
    }

    retrievePetById(id: number): Observable<Pet> {
        return this.httpClient.get<Pet>(`${this.petUrl}/${id}`);
    }

    save(pet: Pet): Observable<Pet> {
        if(pet.id){
            return this.httpClient.put<Pet>(`${this.petUrl}/${pet.id}`, pet);
        }
        else{
            return this.httpClient.post<Pet>(`${this.petUrl}`, pet);
        }
    }

    deletePetById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.petUrl}/${id}`);
    }

}

var PETS: Pet[] = [
    {
        id: 1,
        name: 'Yago',
        race: 'Maltese',
        imgUrl: '/assets/images/yago.JPG',
        birthday: '05/10/2005',
        mood: 3.5
    },
    {
        id: 2,
        name: 'Lupita',
        race: 'Dachshund',
        imgUrl: '/assets/images/lupita.jpg',
        birthday: '13/07/2020',
        mood: 4
    },
    {
        id: 3,
        name: 'Tob',
        race: 'Boxer',
        imgUrl: '/assets/images/tob.jpg',
        birthday: '06/01/2019',
        mood: 4
    },
    {
        id: 4,
        name: 'Faisca',
        race: 'Beagle',
        imgUrl: '/assets/images/faisca.jpg',
        birthday: '08/05/2017',
        mood: 3.5
    },
    {
        id: 5,
        name: 'Goku',
        race: 'Golden Retriever',
        imgUrl: '/assets/images/goku.jpg',
        birthday: '19/02/2015',
        mood: 5
    },
    {
        id: 6,
        name: 'Johnny',
        race: 'Shih Tzu',
        imgUrl: '/assets/images/johnny.jpg',
        birthday: '29/04/2016',
        mood: 3
    },
    {
        id: 7,
        name: 'Milu',
        race: 'Corgi',
        imgUrl: '/assets/images/jake.jpg',
        birthday: '15/03/2020',
        mood: 4
    },
    {
        id: 8,
        name: 'Spike',
        race: 'Coker Spaniel',
        imgUrl: '/assets/images/spike.jpg',
        birthday: '01/09/2018',
        mood: 4.5
    }
]