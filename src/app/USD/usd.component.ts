import { Component } from "@angular/core";
import { Data } from "../services/data";

@Component({
    selector: 'app-usd',
    templateUrl: './usd.component.html'
})

export class UsdComponent{
    YEN: number | undefined;
    constructor(public data:Data){
    }
    changeDetect(e: any){
        let usd = parseInt(e.target.value);
        if(!isNaN(usd)){
            this.data.setUSD(usd);
            this.data.usdToYenConversion();
        }
    }
}