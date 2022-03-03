class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[],connectedTo: string) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;
  }

  turnOn():void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
  }

  get connection(): string {
    return this._connectedTo;
  }

  set connection(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'USB', 'Wi-Fi'], '');
tv1.turnOn();
tv1.connection = 'sasqsqsqw'
// console.log('Connected to: ', tv1.connectedTo);