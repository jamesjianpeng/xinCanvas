/**
 * @description 封装

 * @property {String} name 汽车的名字
 * @property {String} tire 汽车的轮胎
 * @property {String} light 汽车的灯

 * @property {Number} distance 汽车行驶的距离
 * @property {Number} distance 汽车行驶的距离
 * @property {Number} engine 汽车的发动机
 * @property {Number} fuelConsumption 油耗
 * @property {Number} fuleContainer 油箱容量

 * @property {Number} factory 产家
 * @property {Number} _technicalDetails 技术细节
 */

interface CarType {
  name: string
  tire: string
  light: string
  factory: string

  distance: number
  engine: string
  fuelConsumption: number
  fuleContainer: number
  carType: string

  _technicalDetails: string
}


class CarTs {
  public name: string

  protected tire: string
  protected light: string
  protected factory: string
  protected fuelConsumption: number
  protected fuleContainer: number

  protected distance: number
  protected engine: string
  protected carType: string

  private _technicalDetails: string

  constructor({ name, tire, light, factory, distance, engine, fuelConsumption, fuleContainer, carType, _technicalDetails }: CarType) {
    this.name = name
    this.tire = tire
    this.light = light
    this.factory = factory

    this.distance = distance
    this.engine = engine
    this.fuelConsumption = fuelConsumption
    this.fuleContainer = fuleContainer
    this.carType = carType

    this._technicalDetails = _technicalDetails
  }

  getTotalFuel () {
    return this.fuelConsumption * this.distance
  }

  getCarType () {
    return this.carType
  }

  setNewEngine (engine: string) {
    this.engine = engine
  }

  run (time: number, speed: number): number {
    this.distance = this.distance + ( time * speed )
    return this.distance
  }

  getDistance () {
    return this.distance
  }

  _setTechnicalDetails(technicalDetails: string) {
    this._technicalDetails = technicalDetails
  }
}

const CarOption = {
  name: 'car',
  tire: 'A轮胎',
  light: 'black light',
  distance: 100,
  engine: 'A engine',
  fuelConsumption: 1.5,
  fuleContainer: 60,
  factory: 'A 厂家',
  carType: 'carType',
  _technicalDetails: '牛xx'
}

const carTs = new CarTs(CarOption)

console.log(carTs)

console.log('---- 显示属性 ---- start')
console.log(carTs.name)
// console.log(carTs.tire) // TS error
// console.log(carTs.light) // TS error
// console.log(carTs.factory) // TS error
// console.log(carTs.fuelConsumption) // TS error
// console.log(carTs.fuleContainer) // TS error
// console.log(carTs.distance) // TS error
// console.log(carTs.engine) // TS error
// console.log(carTs._technicalDetails) // TS error
// protected 关键字标识的属性在子类中才嫩访问
console.log('---- 显示属性 ---- end')

console.log('---- 修改属性 ---- start')
carTs.name = 'carTs'
console.log(carTs.name)
console.log('---- 修改属性 ---- end')

console.log('---- 调用方法 ---- start')
const totalFuel = carTs.getTotalFuel()
console.log(totalFuel)
console.log('---- 调用方法 ---- end')

console.log('---- 调用方法,修改属性 ---- start')
// carTs.setNewEngine('B engine') // error
// carTs._setTechnicalDetails('B engine') // error
// console.log(carTs)
console.log('---- 调用方法,修改属性 ---- end')

interface TruckType {
  name: string
}

class TruckTs extends CarTs {
  static readonly factory: string = 'Truck 厂家'
  static readonly carType: string = 'truckType'
  static readonly tire: string = 'A轮胎'
  static readonly light: string = 'Truck black light'
  static readonly engine: string = 'Truck engine'
  static readonly fuelConsumption: number = 4
  static readonly fuleContainer: number = 120
  static readonly _technicalDetails: string = 'Truck 牛xx'
  static carName: string = '无名'
  truckNumber: number
  // static 的属性只能 通过 类名.staticProperty 进行访问，并且可以进行修改
  // static readonly 标识的属性只能读


  constructor(data: TruckType) {
    const scope: CarType = {
      name: TruckTs.carName,
      tire: TruckTs.carType,
      light: TruckTs.light,
      distance: 0,
      fuelConsumption: TruckTs.fuelConsumption,
      fuleContainer: TruckTs.fuleContainer,
      engine: TruckTs.engine,
      factory: TruckTs.factory,
      carType: TruckTs.carType,
      _technicalDetails: TruckTs._technicalDetails,
      ...data
    }
    super(scope)
    this.truckNumber = new Date().getTime()
  }
  /** description 对 CarTs 父类进行重写，输入参数 / 返回值 不能修改，内部实现可以修改 */
  run (time: number, speed: number): number {
    this.distance = this.distance + ( time * speed ) + 100
    return this.distance
  }
}

const TruckOption = {
  name: 'my truck car'
}

const truckTs = new TruckTs(TruckOption)
console.log(truckTs)
console.log('---- 显示属性 ---- start')
console.log(truckTs.name)
console.log(TruckTs.factory)
console.log(TruckTs.carType)
console.log(TruckTs.carName)
console.log(TruckTs.carName)
console.log(truckTs)
// console.log(truckTs.tire) // TS error
// console.log(truckTs.light) // TS error
// console.log(truckTs.factory) // TS error
// console.log(truckTs.fuelConsumption) // TS error
// console.log(truckTs.fuleContainer) // TS error
console.log('---- 显示属性 ---- end')

const truckTs2 = new TruckTs({
  name: 'my truck two car'
})
console.log('---- 显示属性 ---- start')
console.log(truckTs2.name)

console.log(truckTs2)
truckTs2.run(10, 60) // run
const money = howMuch(truckTs2, 10) // 算钱
pay(money, 'channel') // 支付
console.log('---- 显示属性 ---- end')

type payedObject = CarTs

function howMuch (obj: payedObject, price: number) {
  if (obj.getDistance) {
    return obj.getDistance() * price
  }
}

function pay (totalMoney: number, channel: string) {
  // do pay
}
