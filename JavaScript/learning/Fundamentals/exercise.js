// Arrays and for loop 
const names = ['john', 'james', 'tom']
const lastName = ' smith'

const fullName = []
for (let i = 0; i < names.length; i++){
    names[i] += lastName
    fullName.push(names[i])
}
console.log(fullName)


