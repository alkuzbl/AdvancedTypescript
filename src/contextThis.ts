class UserBuilder {
    name: string

    setName(name: string): this {
        this.name = name;
        return  this;
    }
    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder
    }
}

class AdminBuilder extends UserBuilder{
    roles: string[]
}

const res1 = new UserBuilder().setName('Vasya')
const res2 = new UserBuilder().setName('Sasha')


let user: UserBuilder | AdminBuilder = new AdminBuilder()

if(user.isAdmin()){
    console.log(user)
} else {
    console.log('not admin')
}
