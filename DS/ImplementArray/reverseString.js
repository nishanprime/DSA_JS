function reverse(str) {
  const stringArray = str.split(''); //split string into array
  let a = 0;
  let b = stringArray.length - 1;
  while (a < b) {
    const temp = stringArray[a];
    stringArray[a] = stringArray[b];
    stringArray[b] = temp;
    a++;
    b--;
  }
  return stringArray.join('');
}
const ran = 'hi how are you';
console.log([...ran]);
console.log(reverse('hello how are you'));
