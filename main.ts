input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A/B")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Logo")
})
basic.forever(function () {
	
})
