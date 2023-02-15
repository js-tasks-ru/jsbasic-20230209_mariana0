function checkSpam(str) {
  let strLowerCase = str.toLowerCase();
  return strLowerCase.includes('1xBet') || strLowerCase.includes('XXX');
}

alert(checkSpam('1XbeT now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));
