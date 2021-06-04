const str = 'i love cryptology';
const getMap = (legend, shift) => {
   return legend.reduce((charsMap, currentChar, charIndex) => {
      const copy = { ...charsMap };
      let ind = (charIndex + shift) % legend.length;
      if (ind < 0) {
         ind += legend.length;
      };
      copy[currentChar] = legend[ind];
      return copy;
   }, {});
};
const encrypt = (str, shift = 0) => {
   const legend = 'abcdefghijklmnopqrstuvwxyz'.split('');
   const map = getMap(legend, shift);
   return str
   .toLowerCase()
   .split('')
   .map(char => map[char] || char)
   .join('');
};
console.log(encrypt(str, 3));

/*
Part 2 - Cyphers
Open up a text editor and create your very own cypher. State all the logic behind your cypher. Then, using your cypher, encipher the phrase “I love cryptology!” Display the result. Using your cypher again, unencipher the enciphered phrase. Do your get “I love cryptology!”?

Take this one step further and create the


Our cypher text is just like Julius Caesar which is called the Caesar Cipher. You shift each letter by 3 and z wraps back to a. If you start with the letter a, shift 3 letters forward and a becomes d. To encipher the code, you simply shift the letter backwards 3 letters so the letter e becomes b.


alphabet: abcdefghijklmnopqrstuvwxyz
I love cryptology +3 -> L orys fubswrortb

To decode: 
L oryh fubswrorjb -3 -> I love cryptology

We also used a javascript function to use Caesar's shift to get our code.

*/