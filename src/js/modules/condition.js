export default function condition(cond1, cond2, operator) {
    switch(operator) {
        case '==':
            return cond1 == cond2
            break
        case '>=':
            return cond1 >= cond2
            break
        case '<=':
            return cond1 <= cond2
            break
        case '!=':
            return cond1 != cond2
            break
        default:
            break
        }
}