class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    setEnergy(newEnergy) {
        this.energy = newEnergy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        this.energy--;
    }
}