//**Space complexity */
function isOdd(n) {
    if (n % 2 == 0) {
        return 'even'
    }
    return 'odd'
};
const state = isOdd(40);
console.log(state);