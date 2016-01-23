var inStock = [ 'apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', 'carrot', 'broccoli', 'pizza', 'potato', 'crackers', 'onion', 'tofu', 'frozen dinner', 'cucumber'];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true){
	search = prompt("Search for a product in stock. Type 'list' to show all product in stock and 'quit' to exit");

	if (search === 'quit'){
		break
	} else if (search === 'list'){
		print(inStock.join(', ');
	}
}