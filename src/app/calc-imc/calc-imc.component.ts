import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-imc',
  templateUrl: './calc-imc.component.html',
  styleUrls: ['./calc-imc.component.css'],
})
export class CalcImcComponent implements OnInit {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  result: string = '';

  constructor() {}

  ngOnInit(): void {}
  calcImc() {
    if (!this.peso || !this.altura) {
      alert('Peso ou altura estão vazios');
      return;
    }
    const imc = (this.peso / (this.altura * this.altura)).toFixed(2);
    this.imc = parseFloat(imc);
    if (this.imc < 18.5) {
      this.result = `IMC: ${this.imc} Magreza`;
    } else if (this.imc > 18.5 && this.imc < 24.9) {
      this.result = `IMC: ${this.imc} Normal`;
    } else if (this.imc > 24.9 && this.imc < 30) {
      this.result = `IMC: ${this.imc} Sobrepeso`;
    } else {
      this.result = `IMC: ${this.imc} Obsidade`;
    }
  }
  valuePeso(event) {
    this.peso = parseFloat(event.target.value);
  }
  valueAltura(event) {
    this.altura = parseFloat(event.target.value);
  }
}
