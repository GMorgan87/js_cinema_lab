const assert = require('assert');
const Cinema = require('../cinema.js');
const Film  = require('../film.js');

describe('Cinema', function(){

  let film;
  let film2;
  let film3;
  let cinema;


  beforeEach(function (){
    film = new Film('1917', 'War', '2019', 120);
    film2 = new Film('Venom', 'Superhero', '2018', 90);
    film3 = new Film('Uncut Gems', 'Thriller', '2020', 130);
    cinema = new Cinema([film, film2, film3, film]);
  });

  it('should have a collection of films', function (){
    const actual = cinema.films;
    assert.deepStrictEqual(actual, [film, film2, film3, film]);
  });

  it('should be able to get a list of film titles', function() {
    const actual = cinema.filmTitles();
    assert.deepStrictEqual(actual, ['1917', 'Venom', 'Uncut Gems', '1917']);
  });

  it('should be able to find a film by title', function (){
    const actual = cinema.filmByTitle('1917');
    assert.strictEqual(actual, film);
  });

  it('should be able to filter films by genre', function (){
    const actual = cinema.filmByGenre('War');
    assert.deepStrictEqual(actual, [film, film]);
  });

  it('should be able to check weather there are some films from a year', function() {
    const actual = cinema.filmFromYear('2018');
    assert.strictEqual(actual, true);
  });

  it('should be able to check if all films are over a particular length', function() {
    const actual = cinema.allFilmsOverLength(80);
    assert.strictEqual(actual, true);
  });

  it('should be able to calculate total running time of all films', function(){
    const actual = cinema.totalRunningTime();
    assert.strictEqual(actual, 460);
  });


  it('should be able to filter films by property', function(){
    const actual = cinema.filmByProperty('title','Venom');
    assert.deepStrictEqual(actual, [film2]);
  });

});
