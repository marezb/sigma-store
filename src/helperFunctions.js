export function formatPrice(value) {
    const format = {
        style: "currency",
        currency: "PLN",
    };
    const localization = navigator.language;
    return new Intl.NumberFormat(localization, format).format(value);
}
console.log("####################################################");
console.log(navigator.language);
console.log(navigator);

console.log("####################################################");
