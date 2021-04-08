// Change this to your secret
const stripeSecret = 'sk_live_1234456789'
// Change this to your GST/HST number
const gstHstNumber = '123456789'

const stripe = require('stripe')(stripeSecret)

const provinces = [
  ['NL', 'HST', 15],
  ['PE', 'HST', 15],
  ['NS', 'HST', 15],
  ['NB', 'HST', 15],
  ['ON', 'HST', 13],
  ['QC', 'GST', 5],
  ['MB', 'GST', 5],
  ['SK', 'GST', 5],
  ['AB', 'GST', 5],
  ['BC', 'GST', 5],
  ['YT', 'GST', 5],
  ['NT', 'GST', 5],
  ['NU', 'GST', 5],
]

;(async () => {
  console.log('Started adding tax rates')
  for (const province of provinces) {
    console.log(`Adding ${province}`)
    await stripe.taxRates.create({
      display_name: `${province[1]} #${gstHstNumber}`,
      inclusive: false,
      percentage: province[2],
      country: 'CA',
      state: province[0],
    })
  }
  console.log('Finished adding tax rates')
})()
