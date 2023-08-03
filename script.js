let resultado = 0;

const state = {
  clicksSumarUno: 0,
  clicksSumarDos: 0,
  clicksRestarUno: 0,
  /** Método que nos permite agregar un número. */
  sumarUno() {
    resultado = resultado + 1;
    this.clicksSumarUno = this.clicksSumarUno + 1;
  },
  sumarDos() {
    resultado = resultado + 2;
    this.clicksSumarDos = this.clicksSumarDos + 1;
  },
  restarUno() {
    resultado = resultado - 1;
    this.clicksRestarUno = this.clicksRestarUno + 1;
  },
  mostrarResultado() {
    alert(resultado);
  },
};

function debug() {
  console.log(state);
}
