basic.forever(function () {
    if (myGigo.GigoReadIRSensor(GigoIOPort.P16) == 0) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Sword)
    }
})
