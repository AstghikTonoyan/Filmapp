"use strict";
let numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));

const personalMovieDB = {
	
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start() {
			while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
				numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
		}
	},
 rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt(`${i+1}.Ո՞րն ֆիլմն եք վերջերս դիտել`);
		const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք");
	
		if (a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("DONE");
		} else {
			console.log("ERROR");
			i--;
		}
	}
},
 detectUserPersonalLevel () {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք Կինոման եք !!!");
	}
},
 yourFavoriteGenres(){
		for (let i = 0; i < 3; i++) {
			const answer = prompt(`${i+1}. Ձեր նախընտրելի ժանրը,`);
			if (answer !== null  && answer !=="" && answer.length <= 20) {
				personalMovieDB.genres[i] = answer;
				
			}else {
				i--;
			  }
			  
			}
    personalMovieDB.genres.forEach ((item , index) => { 
	console.log(`Ձեր նախընտրելի ժանրը.ժանր ${index+1} ${item}`);}); 

    },
	showMyDB () {
		return personalMovieDB.privat === true?
			 console.log(personalMovieDB) :
			 console.log ("Տվյալների բազան փակ է։");
	},
	isVisibleMyDB(){ 
		personalMovieDB.privat === true ?  
		personalMovieDB.privat = false : personalMovieDB.privat = true ;
		return personalMovieDB.showMyDB();
	},

};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.yourFavoriteGenres();
personalMovieDB.detectUserPersonalLevel();
personalMovieDB.isVisibleMyDB();





