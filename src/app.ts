// button potentially might be null. Need to relax typescript by !, ? OR
// set strictNullChecks: false
const button = document.querySelector('button');
button?.addEventListener('click', () => {
  console.log('You clicked me!');
});
