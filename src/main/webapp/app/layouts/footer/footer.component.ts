import { Component } from '@angular/core';

@Component({
    selector: 'jhi-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
   ule:string;
   hp:string;
   name:string;

    constructor(


    ){
        this.ule="Universidad de León";
        this.hp="HPECDS";
        this.name="Víctor Paniagua Castro";
        
    }
}
