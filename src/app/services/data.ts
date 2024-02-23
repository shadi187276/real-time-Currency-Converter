import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
 private usd: number = 0;
 private yen: number = 0;
 public getConvertedUSD: number = 0;
 public getConvertedYEN: number = 0;
  constructor() {}

  getUSD(): number {
    return this.usd;
  }
  setUSD(usdValue: number): void {
    this.usd = usdValue;
  }

  getYEN():number {
    return this.yen;
  }
  setYEN(yenValue: number): void {
    this.yen = yenValue;
  }

  yenToUsdConversion(): void{
   this.getConvertedUSD = this.getYEN() * 0.088;
  }
  usdToYenConversion(): void {
   this.getConvertedYEN = this.getUSD() * 113;
  }
}
