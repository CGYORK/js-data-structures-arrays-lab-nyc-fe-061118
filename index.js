// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}
function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver() {
   drivers.pop(); 
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
function appendDriver(name) {
  let updatedDriver = [...drivers, name]; 
  return updatedDriver;
}
function prependDriver(name) {
  let updatedDrivers = [name, ...drivers];
  return updatedDrivers;
}
function removeLastDriver() {
  drivers.slice(0, 2);
  let appendedDriver = drivers.slice(0, 2);
  return appendedDriver;
}
function removeFirstDriver() {
  drivers.slice(1, 3);
  let appendedDrivers = drivers.slice(1, 3);
  return appendedDrivers;
}