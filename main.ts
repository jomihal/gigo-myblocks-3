basic.forever(function () {
    myGigo.GigoServo(0, GigoIOPort.P16)
    basic.pause(2000)
    myGigo.GigoServo(180, GigoIOPort.P16)
    basic.pause(2000)
})
