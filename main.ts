basic.forever(function () {
    myGigo.Motor(255, 0, GigoMotorPort.&#39;E&#39;)
    basic.pause(2000)
    myGigo.Motor(0, 0, GigoMotorPort.&#39;E&#39;)
    basic.pause(2000)
})
