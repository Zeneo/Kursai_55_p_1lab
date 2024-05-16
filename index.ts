console.log('hi');
let username: string = 'Paulius'
const age: number = 37
const someRandom: any = 'asd'

const arrNums: number[] = [2,3,5,7]
const arrStr: string[] = ['asd', 'qwe', 'zxc']

const items: [string, number, boolean] = ['asd', 60, true]
const sameName: string | number = 4

//Objects
type UserType = {
    userName: string,
    age?: number,
    city: string,
    hasCat: boolean,
    hasDog: 1 | 0
}

const myUser: UserType = {
    userName: 'Paulius',
    age: 37,
    city: "Trakai",
    hasCat: true,
    hasDog: 1
}
const myUser2: UserType = {
    userName: 'Paulius',
    city: "Trakai",
    hasCat: true,
    hasDog: 1
}

interface City {
    population: number,
    country: string,
}

const myCity: City = {
    population: 400,
    country: 'Lithuania',
}

function sayName(username: string):string {
    return username
}

function countData(num1: number, num2: number):void {
    console.log(num1+num2)
}

function updateUser(item: UserType):void {
    console.log(item.userName);
    console.log(item.age)
}














