import { Situacao } from './situacao';

export class Boletim {
  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number): number {
    return (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10;
  }

  calcularMediaFinal(mediaParcial: number, notaFinal: number): number {
    return (mediaParcial + notaFinal) / 2;
  }

  determinarSituacao(mediaParcial: number, notaFinal?: number): Situacao {
    if (mediaParcial >= 60) {
      return Situacao.APROVADO;
    } else if (mediaParcial >= 10 && notaFinal !== undefined) {
      const mediaFinal = this.calcularMediaFinal(mediaParcial, notaFinal);
      return mediaFinal >= 50 ? Situacao.APROVADO : Situacao.REPROVADO;
    } else if (mediaParcial >= 10) {
      return Situacao.AVFINAL;
    } else {
      return Situacao.REPROVADO;
    }
  }
}
