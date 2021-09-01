/* ------------- INFORMATIONS SECTION (BEGIN) ------------- */
// F = frente
// B = Trás
// R = Direita
// L = Esquerda

// Ex: FBFBBFFRLR

// primeiros 7 caracteres serão F ou B
// Especificam as 128 linhas dos primeiros assentos do avião (0 - 127)

// a primeira letra indica se o assento está na frente ou atrás

// para as primeiras 2 letras
// se F = 0 - 63
// se B = 64 - 128

// os 7 primeiros caracteres definem em quais linhas estão o assento

// os 3 ultimos caracteres definem as 8 colunas
// R = Metade superior
// L = Metade inferior

// Linha * 8 + coluna = ID

// TODO:
// Pegar linha e coluna através de uma boardingPass e Calcular do ID;

// Pegar o id Mais alto através de uma string de varios boardingPass separados por / n

/* ------------- INFORMATIONS SECTION (END) ------------- */


const { igorInputDay5 } = require('./inputs');


/* ------------- UTILS SECTION (BEGIN) ------------- */
const convertBinToInt = (bin) => {
  let res = 0 // 101
  for (let i = 0; i < bin.length; i++) {
    const chr = bin[i];
    if (chr === '1') {
      res = (res * 2) + 1
    } else {
      res = (res * 2)
    }
  }
  return parseInt(res);
}
/* ------------- UTILS SECTION (END) ------------- */



const getIdByBoardingPass = (boardingPass = '') => {
  const row = boardingPass.substring(0, 7).split('B').join('1').split('F').join('0')
  const col = boardingPass.substring(7, 10).split('R').join('1').split('L').join('0')
  return convertBinToInt(row) * 8 + convertBinToInt(col);
}

const maxBoardingPass = (boardingPasses = []) => {
  return boardingPasses.map(item => getIdByBoardingPass(item)).sort((a, b) => b - a)[0]
}

const getHigherID = (boardingPasses = '') => {
  const boardingPassesArr = boardingPasses.split(`\n`);
  return maxBoardingPass(boardingPassesArr);
}


/* ------------- TESTS SECTION (BEGIN) ------------- */

const verifyIdByBoardingPass = (test) => {
  if (getIdByBoardingPass(test.boardingPass) === test.id) {
    return '[Success]';
  }
  return '[Falhou Miseravelmente]';
};

const verifyHigherIdFromBoradingPassList = (boardingPasses = [], higherId) => {
  if (getHigherID(boardingPasses) === higherId) {
    return '[Success]';
  }
  return '[Falhou Miseravelmente]';
}

const tests = [
  {
    boardingPass: 'BFFFBBFRRR',
    id: 567
  },
  {
    boardingPass: 'FFFBBBFRRR',
    id: 119
  },
  {
    boardingPass: 'BBFFBBFRLL',
    id: 820
  },
]

const secondTestCase = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`

console.log('Should return id 567 when boarding pass is BFFFBBFRRR ==', verifyIdByBoardingPass(tests[0]));
console.log('Should return id 119 when boarding pass is FFFBBBFRRR ==', verifyIdByBoardingPass(tests[1]));
console.log('Should return id 820 when boarding pass is BBFFBBFRLL ==', verifyIdByBoardingPass(tests[2]));
console.log('Should get the higher id from a list of boarding pass ==', verifyHigherIdFromBoradingPassList(secondTestCase, 820));

/* ------------- TESTS SECTION (END) ------------- */



console.log('Caso real de teste ====', getHigherID(igorInputDay5))