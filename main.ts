let p0 = false
let p1 = false
input.onPinPressed(TouchPin.P0, function () {
    p0 = !(p0)
})
input.onPinPressed(TouchPin.P1, function () {
    p1 = !(p1)
})
basic.forever(function () {
    if (p0) {
        basic.showNumber(1)
    } else {
        basic.showNumber(0)
    }
})
