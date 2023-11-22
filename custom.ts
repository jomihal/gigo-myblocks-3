
/**
* Χρησιμοποιήστε αυτό το αρχείο για να ορίσετε προσαρμοσμένες συναρτήσεις και μπλοκ.
* Διαβάστε περισσότερα στο https://makecode.microbit.org/blocks/custom
*/

enum GigoMotorPort {
    E, F, G, H 
    }

enum LedPort {
    B, C, D, E, F, G, H
    }

enum GigoIOPort {
    P1, P8, P12, P2, P13, P14, P15, P16
}

/**
 * myGigo blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace myGigo {
    /**
     * Κινητήρας: Έλεγχος κινητήρα
     * Ταχύτητα Speed : ταχύτητα περιστροφής 0-255
     * Κατεύθυνση Direction: φορά περιστροφής 0 ή 1 για αριστερόστροφα ή δεξιόστροφα
     * Θύρα Port : Θύρα σύνδεσης του κινητήρα: E, F, G, H
     */
    
    //% block="Κινητήρας σε ταχύτητα $Speed με κατεύθυνση $Direction στη θύρα $Port"
    //% Direction.min=0 Direction.max=1
    //% Speed.min=0 Speed.max=255
    export function Motor(Speed: number, Direction: number, Port: GigoMotorPort) {
        if (Port == GigoMotorPort.E) {
            pins.analogWritePin(AnalogPin.P15, pins.map(Direction, 0, 1, 0, 1023));
            pins.analogWritePin(AnalogPin.P16, pins.map(Speed, 0, 255, 0, 1023));
        } else {
            if (Port == GigoMotorPort.F) {
                pins.analogWritePin(AnalogPin.P13, pins.map(Direction, 0, 1, 0, 1023));
                pins.analogWritePin(AnalogPin.P14, pins.map(Speed, 0, 255, 0, 1023));
            } else {
                if (Port == GigoMotorPort.G) {
                    pins.analogWritePin(AnalogPin.P12, pins.map(Direction, 0, 1, 0, 1023));
                    pins.analogWritePin(AnalogPin.P2, pins.map(Speed, 0, 255, 0, 1023));
                } else {
                    if (Port == GigoMotorPort.H) {
                        pins.analogWritePin(AnalogPin.P1, pins.map(Direction, 0, 1, 0, 1023));
                        pins.analogWritePin(AnalogPin.P8, pins.map(Speed, 0, 255, 0, 1023));
                    }
                }
            }
        }

    }


    /**
     * GigoLed: Έλεγχος εξωτερικού Led
     * Κατάσταση Status : αναμμένο ή σβηστό 0 ή 1
     * Θύρα Port : Θύρα σύνδεσης του Led: B, C, D, E, F, G, H
     */

    //% block="Led σε κατάσταση $Status στη θύρα $Port"
    //% Status.min=0 Status.max=1
    export function GigoLed(Status: number, Port: LedPort) {
        if (Port == LedPort.B) {
            pins.digitalWritePin(DigitalPin.P14, Status);
        }
        else {
            if (Port == LedPort.C) {
                pins.digitalWritePin(DigitalPin.P2, Status);
            }
            else {
                if (Port == LedPort.D) {
                    pins.digitalWritePin(DigitalPin.P8, Status);
                } else {
                    if (Port == LedPort.E) {
                        pins.digitalWritePin(DigitalPin.P15, Status);
                    }
                    else {
                        if (Port == LedPort.F) {
                            pins.digitalWritePin(DigitalPin.P13, Status);
                        }
                        else {
                            if (Port == LedPort.G) {
                                pins.digitalWritePin(DigitalPin.P12, Status);
                            }
                            else {
                                if (Port == LedPort.H) {
                                    pins.digitalWritePin(DigitalPin.P1, Status);
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }

    /**
     * GigoServo: Έλεγχος Servo από τον ακροδέκτη ΙΟ του Gigo
     * Γωνία Angle : 0 -180
     * Θύρα Port : Ακροδέκτης σύνδεσης του Servo: P1, P8, P12, P2, P13, P14, P15, P16
     */

    //% block="Servo σε γωνία $Angle στον ακροδέκτη $Port"
    //% Angle.min=0 Angle.max=180
    export function GigoServo(Angle: number, Port: GigoIOPort) {
        if (Port == GigoIOPort.P1) {
            pins.servoWritePin(AnalogPin.P1, Angle);
        }
        else {
            if (Port == GigoIOPort.P8) {
                pins.servoWritePin(AnalogPin.P8, Angle);
            }
            else {
                if (Port == GigoIOPort.P12) {
                    pins.servoWritePin(AnalogPin.P12, Angle);
                } else {
                    if (Port == GigoIOPort.P2) {
                        pins.servoWritePin(AnalogPin.P2, Angle);
                    }
                    else {
                        if (Port == GigoIOPort.P13) {
                            pins.servoWritePin(AnalogPin.P13, Angle);
                        }
                        else {
                            if (Port == GigoIOPort.P14) {
                                pins.servoWritePin(AnalogPin.P14, Angle);
                            }
                            else {
                                if (Port == GigoIOPort.P15) {
                                    pins.servoWritePin(AnalogPin.P15, Angle);
                                }
                                else {
                                    if (Port == GigoIOPort.P16) {
                                        pins.servoWritePin(AnalogPin.P16, Angle);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    

    /**
     * GigoReadIRSensor: Διάβασμα τιμής αισθητήρα IR  στον ακροδέκτη ΙΟ του Gigo
     * Θύρα Port : Ακροδέκτης σύνδεσης του αισθητήρα IR: P1, P8, P12, P2, P13, P14, P15, P16
     */
    //% block="Διάβασμα τιμής αισθητήρα IR στον ακροδέκτη $Port"
     export function GigoReadIRSensor(Port: GigoIOPort): number  {
        if (Port == GigoIOPort.P1) {
            return pins.digitalReadPin(DigitalPin.P1);
        }
        else {
            if (Port == GigoIOPort.P8) {
                return pins.digitalReadPin(DigitalPin.P8);
            }
            else {
                if (Port == GigoIOPort.P12) {
                    return pins.digitalReadPin(DigitalPin.P12);
                } else {
                    if (Port == GigoIOPort.P2) {
                        return pins.digitalReadPin(DigitalPin.P2);
                    }
                    else {
                        if (Port == GigoIOPort.P13) {
                            return pins.digitalReadPin(DigitalPin.P13);
                        }
                        else {
                            if (Port == GigoIOPort.P14) {
                                return pins.digitalReadPin(DigitalPin.P14);
                            }
                            else {
                                if (Port == GigoIOPort.P15) {
                                    return pins.digitalReadPin(DigitalPin.P15);
                                }
                                else {
                                    if (Port == GigoIOPort.P16) {
                                        return pins.digitalReadPin(DigitalPin.P16);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    return 0;
    }

    /**
     * GigoReadForceSensor: Διάβασμα τιμής αισθητήρα αφής  σε θύρα του Gigo
     * Θύρα Port : Ακροδέκτης σύνδεσης του αισθητήρα αφής: E, F, G, H
     */
    //% block="Διάβασμα τιμής αισθητήρα αφής στη θύρα $Port"
    export function GigoReadForceSensor(Port: GigoMotorPort): number {
        if (Port == GigoMotorPort.E) {
            return pins.digitalReadPin(DigitalPin.P15);
        }
        else {
            if (Port == GigoMotorPort.F) {
                return pins.digitalReadPin(DigitalPin.P13);
            }
            else {
                if (Port == GigoMotorPort.G) {
                    return pins.digitalReadPin(DigitalPin.P12);
                } else {
                    if (Port == GigoMotorPort.H) {
                        return pins.digitalReadPin(DigitalPin.P1);
                    }
                     
                    }
                }
            }
        
        return 0;
    }

} /* End namespace */

