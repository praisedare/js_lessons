// Arrays

const names = ['Jason', "matthew", 'aaron', 'john']

// via
const upperCaseNames = names.map((value, index, array) => {
    return value.toUpperCase();
})

console.log('upperCaseNames', upperCaseNames)
console.log('names', names)

const names_longer_than_5 = names.filter(name => {
    return name.length > 5
})

console.log('names_longer_than_5', names_longer_than_5)

const names_copy = [...names]
names_copy.push('Praise')

console.log('names', names)
console.log('names_copy', names_copy)




