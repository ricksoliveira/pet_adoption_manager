import { Component, Input } from "@angular/core";
import { OnChanges } from "@angular/core";

@Component({
    selector: 'app-mood-star',
    templateUrl: './mood.component.html',
    styleUrls: ['./mood.component.css']
})
export class MoodComponent implements OnChanges {

    @Input()
    mood: number = 0;

    starWidth!: number;

    ngOnChanges(): void{
        this.starWidth = this.mood * 74 / 5;
    }

}