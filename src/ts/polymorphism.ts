/** @description TS 多态 */
abstract class Work {
  workName: string

  constructor(workName: string) {
    this.workName = workName
  }

  abstract sayWorkName(): void
}

class Fe extends Work {
  workName: string

  constructor(workName: string) {
    super('Fe')
  }

  sayWorkName() {
    console.log(this.workName)
  }
}

class Be extends Work  {
  workName: string

  constructor(workName: string) {
    super('Be')
  }

  sayWorkName() {
    console.log(this.workName)
  }
}

export type SayName = Work

function sayName(o: SayName) {
  o.sayWorkName()
}

const fe = new Fe('Fe')
console.log(fe)

const be = new Be('Be')
console.log(be)

sayName(fe)
sayName(be)
