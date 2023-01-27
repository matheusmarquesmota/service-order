// PROMPT-BASED SO GENERATOR 

/* 

OBS: Due to some important details, this project will be written in portuguese.

prompts needed, by order. 
1. prazo.
2. disponibilidade (cliente).
3. observação opcional (ligar antes?).
4. contato.
5. problema.
6. último sinal. 
7. equipamentos no local. 
8. detalhes:
9. quedas de PPPoE (últimos 30 dias)
10. IPv6 (status).
11. visitas recentes (status).
12. rua.
13. bairro.
14. cidade. 

*/

// TEXT FUNCTIONS 
function breakLine() {
	document.write("<br>")
}

function show(text) {
	document.write(text)
	breakLine();
}




// USER PROMPT LIST: 

show("test");
alert("The following lines must be filled in portuguese.");

alert("1. Gathering deadline, availability, contact info...");
var deadline = prompt("Type the 'deadline': F: (36h)");
var availableness = prompt("Type the 'availableness': F: (Only until 12pm)");
var optionalObs = prompt("If needed, type 'optional obs.:' F: (Call before)");
var contactNum = prompt("Type 'contact num.': F: (Only numbers)");

alert("2. Gathering the problem, signal info, equipments...");
var mainProblem = prompt("Describe the 'main problem':");
var lastSignal = prompt("Type the 'last signal': F: (-20.00)");
var equipments = prompt("Type the 'equipments': F: (Only text)");

alert("3. Gathering PPPoE drops, IPv6 status, and recent visits...");
var pppoeDrops = prompt("Type the num. of 'PPPoE drops', (last 30 days) F: (Number only)");
var statusIpv6 = prompt("Type the 'IPv6 current status':");
var recentVisits = prompt("Type about 'recent visits':");

alert("4. Gathering adress information...");
var street = prompt("Type the 'street name':");
var neighborhood = prompt("Type the 'neighborhood name':");
var city = prompt("Type the 'city name':");

show("prazo " + deadline + "- " + availableness + ". " + optionalObs + ".");

show("contato: " + contactNum);
show("> " + mainProblem);
show("último sinal:<br>" + lastSignal);
show("equipamentos no local:<br>" + equipments);
show("1. Houveram ")
show("2. " + statusIpv6);
show("3. " + recentVisits);
show("endereço:<br>" + street);
show(neighborhood);
show(city);
