basic.forever(function () {
    myGigo.GigoLed(1, LedPort.H)
    basic.pause(1000)
    myGigo.GigoLed(0, LedPort.H)
    basic.pause(1000)
    myGigo.GigoLed(1, LedPort.F)
    basic.pause(1000)
    myGigo.GigoLed(0, LedPort.F)
    basic.pause(1000)
    myGigo.GigoLed(1, LedPort.G)
    basic.pause(1000)
    myGigo.GigoLed(0, LedPort.G)
    basic.pause(1000)
})
