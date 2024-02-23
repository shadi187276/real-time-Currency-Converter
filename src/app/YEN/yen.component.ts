import { ChangeDetectorRef, Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Data } from "../services/data";


@Component({
    selector: 'app-yen',
    templateUrl: './yen.component.html'
})
export class YenComponent{
    constructor(public data:Data,private cdr: ChangeDetectorRef){}

    changeDetect(e:any){
        let yen = parseInt(e.target.value);
        if(!isNaN(yen)){
            this.data.setYEN(yen);
            this.data.yenToUsdConversion();
        }
     }



}