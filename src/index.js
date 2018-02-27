// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coinsName = [{name: "H", value: 50},{name: "Q", value: 25}, {name: "D", value: 10}, {name: "N", value: 5}, {name: "P", value: 1}];
    const lengthArrOfCoins = coinsName.length;
    let exchange = {};
    let remainder = currency;

    if (remainder > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    } else if (remainder < 1) {
        return exchange;
    }
    for (let i = 0; i < lengthArrOfCoins; i++) {
        let name = coinsName[i].name;
        let value = coinsName[i].value;

        if (value <= remainder) {
            exchange[name] = Math.floor(remainder / value);
            remainder = remainder % coinsName[i].value;       
        }
    }
    return exchange;    
}
