input.onButtonPressed(Button.A, function () {
    basic.showString("The A button!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A and B button!")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("The B button!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Logo Pressed!")
})
basic.forever(function () {
	
})
