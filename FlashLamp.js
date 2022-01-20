class FlashLamp {
    constructor(status, battery) {
        this.status = status;
        this.battery = battery;
    }

    setBattery(newBattery) {
        this.battery = newBattery;
    }

    getBatteryInfo() {
        return this.battery.getEnergy();
    }

    light() {
        if (this.status) {
            if (this.battery.getEnergy() > 0) {
                alert("Bật đèn rồi đấy. Giờ thì tắt đi");
                this.battery.decreaseEnergy();
            } else {
                alert(("Het pin roi. Di thay di"))
            }
        } else {
            alert("Đèn tắt. Bật lên đi");
        }
    }

    turnOnOff() {
        this.status = !this.status;
    }
}

let pin1 = new Battery(2);
let pin2 = new Battery(12);
let den = new FlashLamp(true, pin1);