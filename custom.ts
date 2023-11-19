
/**
* Χρησιμοποιήστε αυτό το αρχείο για να ορίσετε προσαρμοσμένες συναρτήσεις και μπλοκ.
* Διαβάστε περισσότερα στο https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}
enum GigoMotorPort {
    'E',
    'F',
    'G',
    'H'
    
}
/**
 * myGigo blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace myGigo {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

    //% block="Κινητήρας σε θύρα $Port με κατεύθυνση $Direction και ταχύτητα $Speed"
    //% Direction.min=0 Direction.max=1
    //% Speed.min=0 Speed.max=255
    //% Port.min=1 Port.max=4
    export function Motor(Speed: number, Direction: number, Port: GigoMotorPort) {
        switch(Port) {
            case GigoMotorPort.E:
                {   pins.analogWritePin(AnalogPin.P15, pins.map(Direction, 0, 1, 0, 1023));
                    pins.analogWritePin(AnalogPin.P16, pins.map(Speed, 0, 255, 0, 1023));
                }
            case GigoMotorPort.F: {
                pins.analogWritePin(AnalogPin.P13, pins.map(Direction, 0, 1, 0, 1023));
                pins.analogWritePin(AnalogPin.P14, pins.map(Speed, 0, 255, 0, 1023));
                }
            case GigoMotorPort.G: {
                pins.analogWritePin(AnalogPin.P12, pins.map(Direction, 0, 1, 0, 1023));
                pins.analogWritePin(AnalogPin.P2, pins.map(Speed, 0, 255, 0, 1023));
            }
            case GigoMotorPort.H: {
                pins.analogWritePin(AnalogPin.P1, pins.map(Direction, 0, 1, 0, 1023));
                pins.analogWritePin(AnalogPin.P8, pins.map(Speed, 0, 255, 0, 1023));
            }            
        }

    }
}
