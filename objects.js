// Objects
const car = {
    name: 'Honda',
    model: 'Civic 1992',
    color: 'black',
}

const player = {
    hp: 98,
    skills: ['super strength', 'invincibility'],
    ammo: 50,
    increaseAmmo(addition) {
        this.ammo += addition;
    },
    getCurrentHpPercentage: function() {
        return (() => this.hp / 100)()
    },
}

// console.log('player ammo', player.ammo);
// console.log('add 10 ammo');
// increasePlayerAmmo(player, 10);
// console.log('player ammo', player.ammo);
console.log('getCurrentHpPercentage', player.getCurrentHpPercentage());

