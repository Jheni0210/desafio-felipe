
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitorias = calcularSaldo(10, 3);

function determinarNivel(saldo) {
    if (saldo < 10) return "Ferro";
    if (saldo >= 11 && saldo <= 20) return "Bronze";
    if (saldo >= 21 && saldo <= 50) return "Prata";
    if (saldo >= 51 && saldo <= 80) return "Ouro";
    if (saldo >= 81 && saldo <= 90) return "Diamante";
    if (saldo >= 91 && saldo <= 100) return "Lendário";
    if (saldo >= 101) return "Imortal";
}

let nivel = determinarNivel(saldoVitorias);
console.log(`O Herói tem de saldo de ${saldoVitorias} vitorias e está no nível de ${nivel}`);