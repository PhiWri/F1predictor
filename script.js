// Define arrays
const team = ["Red Bull", "McLaren", "Ferrari", "Mercedes", "Aston Martin", "VCARB", "Haas", "Williams", "Alpine", "Sauber",];
const driver = ["Max Verstappen", "Lando Norris", "Charles Leclerc", "Lewis Hamilton", "Oscar Piastri",
                 "George Russell", "Fernando Alonso", "Andrea Kimi Antonelli", "Nico Hulkenberg", 
                 "Sergio Perez", "Yuki Tsunoda", "Pierre Gasly", "Liam Lawson", "Carlos Sainz", 
                 "Alex Albon", "Lance Stroll", "Esteban Ocon", "Oliver Bearman", "Jack Doohan"];
const newWinner = ["Andrea Kimi Antonelli", "Nico Hulkenberg", "Yuki Tsunoda", "Liam Lawson", 
                   "Alex Albon", "Lance Stroll", "Oliver Bearman", "Jack Doohan"];

//Generate random number skewed towards lower end to make predictions more realistic
function randomNumber(arr) {
    return Math.floor((1 - Math.cbrt(Math.random())) * arr.length);
}

//Generate random team
function randomTeam(arr) {
    return team[randomNumber(team)];
}

console.log('The winner of the F1 2025 Constuctors Champion will be ' + randomTeam(team));


//Generate random driver
function randomDriver(arr) {
    return driver[randomNumber(driver)];
}

console.log('The winner of the F1 2025 Drivers Champion will be ' + randomDriver(driver));


//Generate random new winner
function randomNewWinner(arr) {
    return newWinner[randomNumber(newWinner)];
}

console.log('The driver that will win their first Grand Prix in 2025 is ' + randomNewWinner(newWinner));
