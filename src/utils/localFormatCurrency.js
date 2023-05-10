export default function localFormatCurrency(number) {
    return new Intl.NumberFormat("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2, roundingIncrement: 1,}).format(number)
}