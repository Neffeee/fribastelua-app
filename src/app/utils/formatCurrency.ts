// Muuttaa hinnat oikeanlaisiksi ja näyttää 2:den desimaalin tarkkuudella.


const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency"
})

export function formatCurrency(number: number){
    return CURRENCY_FORMATTER.format(number)
}