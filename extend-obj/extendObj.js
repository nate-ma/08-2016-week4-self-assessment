// define loop here
var loop = function(collection, callback){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
			callback(collection[i], i)
		}
	}
	if(typeof collection === 'object'){
		for(var key in collection){
			callback(collection[key], key)
		}
	}
};

// define extendObj here
var extendObj = function(obj1, obj2){
	loop(obj2, function(value, key){
		// console.log("testing value:", value);
		// console.log("testing key:", key);
		obj1[key] = value;
	})
};


// test data we're giving you:
var Jon = {name: "Jon", fear: "koala bears"};
var moreCharacteristics = {favoriteFruit: "avocados", funFact: "I once played basketball with Prince in the summer of 1984."};

// test extendObj here using the two sample data objects given above
extendObj(Jon, moreCharacteristics);

console.log(Jon);