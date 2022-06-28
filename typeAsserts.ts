interface User {
    name: string;
    age: number
}
const newUser = {};

assertUser(newUser)

newUser.name = 'Vasya'

function assertUser(obj: unknown): asserts obj is User {
    if(typeof obj === 'object' && !!obj && 'name' in obj){
        return ;
    }
    throw new Error('Данный объект не юзер')
}

