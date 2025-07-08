import { Component } from '@angular/core';
import { Situacao } from './situacao';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcula-media',
  standalone: false,
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.css'
})
export class CalculaMedia {
  boletim: Boletim = new Boletim();
  mediaParcial: number | undefined 
  mediaFinal: number | undefined
  situacao: Situacao
  constructor() {
    this.situacao = Situacao.CURSANDO
  }
  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number) {
    this.mediaParcial = this.boletim.calcularMediaParcial(b1, b2, b3, b4);
    this.modificarSituacao(this.mediaParcial);
  }
  calcularMediaFinal(nf: string): void {
  const notaFinal = parseFloat(nf);
  if (this.mediaParcial !== undefined) {
    this.mediaFinal = this.boletim.calcularMediaFinal(this.mediaParcial, notaFinal);
    this.situacao = this.boletim.determinarSituacao(this.mediaFinal);
  }
}

  modificarSituacao(mp: number) {
    if (mp >= 60) {
      this.situacao = Situacao.APROVADO;
    } else if (mp >= 10) {
      this.situacao = Situacao.AVFINAL;
    } else {
      this.situacao = Situacao.REPROVADO;
    }
  }
}