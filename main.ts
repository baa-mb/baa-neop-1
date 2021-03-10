/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace libBaa {
     //% block
    export function ZeigeName() {
        basic.showString("Bachinger Alois")
    }

    //% block
    export function ZeigeDrei() {
       strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }

    // Hier wird die Hardware initialisiert......

    // let baa: neopixel.Strip = null;
    // baa = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB);
    // baa.showColor(neopixel.colors(NeoPixelColors.Black));



}