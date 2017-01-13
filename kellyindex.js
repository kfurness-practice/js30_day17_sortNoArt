const bandsList = document.querySelector('#bands');
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const takeOutArticles = (c) => {
  let test;
  const artThe = "The",
          artAn = "An",
          artA = "A";
  if ( c.includes(artThe) ) {
    test = c.replace('The ', '')
  } else if ( c.includes(artAn) ) {
    test = c.replace('An ', '');
  } else if ( c.includes(artA) ) {
      test = c.replace('A ', '')
  } else {
    test = c
  }
  return test
}

const newArr = bands.map(takeOutArticles)
const sorted = newArr.sort();

sorted.forEach( (c) => {
    const listItem =  `<li>${c}</li>`;
    bandsList.innerHTML += listItem;
 })
