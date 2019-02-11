window.addEventListener("load", main);

function main(event){
	var people = [];
	var table = document.createElement("table");
	for (i = 0; i < 50; i++){		
		var person = { first: faker.name.firstName(),
				last: faker.name.lastName(),
				age: randRange(18, 100),
				job: faker.fake("{{name.jobTitle}}"),
				tel: faker.phone.phoneNumber(),
				address: faker.address.city()}
		var line = document.createElement("tr");
		for (k = 0; k < 1; k++){
			var cell = document.createElement("td");
			cell.innerHTML = person.first;
			line.appendChild(cell);
			var cell1 = document.createElement("td");
			cell1.innerHTML = person.last;
			line.appendChild(cell1);
			var cell2 = document.createElement("td");
			cell2.innerHTML = person.age;
			line.appendChild(cell2);
			var cell3 = document.createElement("td");
			cell3.innerHTML = person.job;
			line.appendChild(cell3);
			var cell4 = document.createElement("td");
			cell4.innerHTML = person.tel;
			line.appendChild(cell4);
			var cell5 = document.createElement("td");
			cell5.innerHTML = person.address;
			line.appendChild(cell5);
		}
	table.appendChild(line);
	}
document.body.appendChild(table);
}

function randRange(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}

	
