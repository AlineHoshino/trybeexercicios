"use strict";
class Tv {
    constructor(brand, size, resolution, connections, connectedTo) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        this._connectedTo = connectedTo;
    }
    turnOn() {
        console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
    }
    get connection() {
        return this._connectedTo;
    }
    set connection(value) {
        if (this._connections.includes(value)) {
            this._connectedTo = value;
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi'], '');
tv1.turnOn();
tv1.connection = 'sasqsqsqw';
// console.log('Connected to: ', tv1.connectedTo);
