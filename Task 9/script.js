/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive() {
    if (this.budget > 100000000) {
      return true;
    } else {
      return false;
    }
  }
}

const theBlairWitchProject = new Movie(
  'The Blair Witch Project',
  'Daniel Myrick',
  '60000'
);
console.log(theBlairWitchProject.wasExpensive());

const piratesOfTheCaribbeanOnStrangerTides = new Movie(
  'Pirates of the Caribbean: On Stranger Tides',
  'Rob Marshall',
  '378000000'
);
console.log(piratesOfTheCaribbeanOnStrangerTides.wasExpensive());
