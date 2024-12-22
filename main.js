const $ = el => document.querySelector(el)
const $$ = el => document.querySelectorAll(el)

const daysCounter = $('#days .countdown-card-inner-top')
const currentDays = $$('.current-days-count')
const nextDays = $$('.next-days-count')

const hoursCounter = $('#hours .countdown-card-inner-top')
const currentHours = $$('.current-hours-count')
const nextHours = $$('.next-hours-count')

const minutesCounter = $('#minutes .countdown-card-inner-top')
const currentMinutes = $$('.current-minutes-count')
const nextMinutes = $$('.next-minutes-count')

const secondsCounter = $('#seconds .countdown-card-inner-top')
const currentSeconds = $$('.current-seconds-count')
const nextSeconds = $$('.next-seconds-count')

function countdownTimer() {
  const endDate = new Date('Sat Dec 28 2024 19:46:39')

  function updateCounter(nextCounter, currentCounter, counter, newCount) {
    if (nextCounter[0].textContent !== newCount.toString().padStart(2, '0')) {
      nextCounter.forEach(count => count.textContent = newCount.toString().padStart(2, '0'))
      counter.classList.add('flip-countdown')
      counter.addEventListener('animationend', () => {
        counter.classList.remove('flip-countdown')
        currentCounter.forEach(count => count.textContent = newCount.toString().padStart(2, '0'))
      })
    }
  }

  function updateTimer() {
    const currentDate = new Date()
    const differenceInMS = endDate - currentDate

    if (differenceInMS <= 0) {
      clearInterval(timer)
      return
    }

    let days = Math.floor(differenceInMS / (1000 * 60 * 60 * 24))
    let hours = Math.floor((differenceInMS / (1000 * 60 * 60)) % 24)
    let minutes = Math.floor((differenceInMS / (1000 * 60)) % 60)
    let seconds = Math.floor((differenceInMS / 1000) % 60)

    updateCounter(nextDays, currentDays, daysCounter, days)
    updateCounter(nextHours, currentHours, hoursCounter, hours)
    updateCounter(nextMinutes, currentMinutes, minutesCounter, minutes)
    updateCounter(nextSeconds, currentSeconds, secondsCounter, seconds)
  }

  const timer = setInterval(updateTimer, 1000)
}

countdownTimer()
