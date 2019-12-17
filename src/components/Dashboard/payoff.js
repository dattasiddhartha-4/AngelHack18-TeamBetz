import value from './count.js'
import prediction from  './dashboard.js'
import initial_deposit from  './dashboard.js'

const payoff = () => {
        if (prediction != 0 ) { // A1 | B2 | C3 | D4
            return(
                payoff = initial_deposit + 1/value*100
            )
        }
}

export default payoff;