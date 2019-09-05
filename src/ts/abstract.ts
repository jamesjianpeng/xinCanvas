

interface Education {
    startTime: string
    endTime: string
    level: string
}

abstract class Person {
  public name: string
  protected idea: string[]
  protected education: Education
  protected salary?: number
  private spirit: string[] = ['唯物主义']

  abstract eat(arg?: string): string

  abstract run(arg?: string): string

  abstract work(arg?: string): string

  abstract promotionEducation(arg?: Education): string

  abstract getEducation(): Education

  abstract getSalary(time: number): number
}

interface PersonType {
  name: string
  salary: number
  idea: string | string[]
  education: Education
}

class FrontEnd extends Person {
  static readonly idea: string[] = ['JavaScript', 'Node', 'Typescript']
  static readonly spirit: string[] = ['Fe spirit']

  get educationString(): string {
    return this.education.level
  }

  constructor(data: PersonType) {
      super()
      this.name = data.name
      this.idea = FrontEnd.idea

      /** @description
       * Person 中 private spirit: string[] 在子类中是不可以修改
       * Property 'spirit' is private and only accessible within class 'Person'
       */
      // this.spirit = FrontEnd.spirit

      this.education = data.education
      this.salary = data.salary
  }

  eat(arg?: string): string {
    return this.name + ' eat fast ' + arg
  }

  run(arg?: string): string {
    return this.name + ' run fast ' + arg
  }

  work(arg?: string): string {
    const data =  this.name + ' conding with JavaScript fast '
    return arg ? data + arg : data
  }

  playGame(arg?: string): string {
    const data =  this.name + ' play Ps4 '
    return arg ? this.name + ' ' +arg : data
  }
  promotionEducation(arg: Education): string {
    this.education = arg
    return 'ok!'
  }
  getEducation() {
    return this.education
  }
  getSalary(time: number): number {
    return this._getSalary(time, this.salary)
  }
  private _getSalary(time: number, salary: number): number {
    return time * salary
  }
}

class BackEnd extends Person {
  static readonly idea: string[] = ['Java', 'Node', 'Typescript']
  static readonly spirit: string[] = ['Be spirit']

  constructor(data: PersonType) {
      super()
      this.name = data.name
      this.idea = BackEnd.idea

      /** @description
       * Person 中 private spirit: string[] 在子类中是不可以修改
       * Property 'spirit' is private and only accessible within class 'Person'
       */
      // this.spirit = FrontEnd.spirit

      this.education = data.education
  }

  eat(arg?: string): string {
    return this.name + ' eat fast ' + arg
  }

  run(arg?: string): string {
    return this.name + ' run fast ' + arg
  }

  work(arg?: string): string {
    const data =  this.name + ' conding with ' + this.idea.toString() + '  fast '
    return arg ? data + arg : data
  }

  playGame(arg?: string): string {
    const data =  this.name + ' play Ps4 '
    return arg ? this.name + ' ' +arg : data
  }
  promotionEducation(arg: Education): string {
    this.education = arg
    return 'ok!'
  }
  getEducation() {
    return this.education
  }
  getSalary(time: number): number {
    return this._getSalary(time, this.salary)
  }
  private _getSalary(time: number, salary: number): number {
    return time * salary
  }
}

const james = new FrontEnd({
  name: 'James',
  salary: 11,
  idea: ['Vue', 'React'],
  education: {
    startTime: new Date('2015-3-10').toString(),
    endTime: new Date('2018-3-10').toString(),
    level: '大专'
  }
})
const Jordan = new BackEnd({
  name: 'joardan',
  salary: 15,
  idea: ['Vue', 'React'],
  education: {
    startTime: new Date('2012-3-10').toString(),
    endTime: new Date('2016-3-10').toString(),
    level: '本科'
  }
})

console.log(james)
console.log(james.eat('66')) // James eat fast 66
console.log(james.run('66')) // James run fast 66
console.log(james.work('66')) // James conding with JavaScript fast 66
console.log(james.playGame()) // James play Ps4
console.log(james.educationString) // get 的使用
/** @description
 * Person protected education: Education  只能在内部修改
 * Property 'education' is protected and only accessible within class 'Person' and its subclasses.
 */
// console.log(james.education)

console.log(Jordan)
console.log(Jordan.eat('66')) // joardan eat fast 66
console.log(Jordan.run('66')) // joardan run fast 66
console.log(Jordan.work('66')) // joardan conding with Java,Node,Typescript  fast 66
console.log(Jordan.playGame()) // joardan play Ps4

console.log(FrontEnd.idea) // ["JavaScript", "Node", "Typescript"]

/** @description 抽象类的不能被实例
 * Cannot create an instance of an abstract class.
 */
// new Person() // error
