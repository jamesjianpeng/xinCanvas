/**
 * @description 车父类
 *
 */
function CarJs (name, fuelConsumption, distance) {
    this.name = name
    this.fuelConsumption = fuelConsumption
    this.distance = distance
}

CarJs.prototype.getName = function () {
  return this.name
}
CarJs.prototype.getFuelConsumption = function () {
  return this.fuelConsumption
}
CarJs.prototype.getDistance = function () {
  return this.distance
}

CarJs.prototype.getTotalFuel = function () {
  return this.fuelConsumption * this.distance
}

function Truck () {

}
