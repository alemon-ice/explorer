import {
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
} from "./elements.js"

export default function() {
    const buttonPressAudio = new Audio("./assets/audios/button-press.wav")
    const kitchenTimer = new Audio("./assets/audios/kitchen-timer.mp3")
    const bgAudioForest = new Audio("./assets/audios/forest.wav")
    const bgAudioRain = new Audio("./assets/audios/rain.wav")
    const bgAudioCoffeeShop = new Audio("./assets/audios/coffee-shop.wav")
    const bgAudioFireplace = new Audio("./assets/audios/fireplace.wav")

    bgAudioForest.loop = true
    bgAudioRain.loop = true
    bgAudioCoffeeShop.loop = true
    bgAudioFireplace.loop = true
    
    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function audioForest() {
        buttonSoundForest.classList.contains('active')
        ? bgAudioForest.play()
        : bgAudioForest.pause()
    }

    function audioRain() {
        buttonSoundRain.classList.contains('active')
        ? bgAudioRain.play()
        : bgAudioRain.pause()
    }

    function audioCoffeeShop() {
        buttonSoundCoffeeShop.classList.contains('active')
        ? bgAudioCoffeeShop.play()
        : bgAudioCoffeeShop.pause()
    }

    function audioFireplace() {
        buttonSoundFireplace.classList.contains('active')
        ? bgAudioFireplace.play()
        : bgAudioFireplace.pause()
    }

    return {
        pressButton,
        timeEnd,
        audioForest,
        audioRain,
        audioCoffeeShop,
        audioFireplace
    }
}
