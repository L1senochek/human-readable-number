module.exports = function toReadable (number) {
  const fromOneToTen = ['','one','two','three','four','five','six','seven','eight','nine']; 
  const numbersTenToNineteen = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; 
  const twoDigit = ['','',' twenty',' thirty',' forty',' fifty',' sixty',' seventy',' eighty',' ninety']; 

  let strNum = String(number); 
    
  if (number === 0) {
    return 'zero';
  } else if (strNum.length === 1) {
    return fromOneToTen[(strNum)]; 
  } else if (strNum.length === 2) {
    if ((strNum.substr(-2,1)) === '1'){
      return numbersTenToNineteen[strNum.substr(-1,1)];
    } else if (strNum.substr(-1,1) === '0'){
      return (twoDigit[strNum.substr(-2,1)]).trim();
    } else {
      return (twoDigit[strNum.substr(-2,1)] + ' ' + fromOneToTen[strNum.substr(-1,1)]).trim();
    }
  } else if (strNum.length === 3) {
    if ((strNum.substr(-2,1)) === '1') {
      return fromOneToTen[strNum.substr(-3,1)] + ' hundred' + ' ' + numbersTenToNineteen[strNum.substr(-1,1)];
    } else if (strNum.substr(-1,1) === '0'){
      return (fromOneToTen[strNum.substr(-3,1)] + ' hundred' + twoDigit[strNum.substr(-2,1)]).trim();
    } else {
      return (fromOneToTen[strNum.substr(-3,1)] + ' hundred' + twoDigit[strNum.substr(-2,1)] + ' ' + fromOneToTen[strNum.substr(-1,1)]).trim();
    }
  }
}