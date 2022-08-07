//! This contract implements simple counter backed by storage on blockchain.
//!
//! The contract provides methods to [increment] / [decrement] counter and
//! get it's current value [getNum] or [reset].
import { NearContract, NearBindgen, near, call, view } from 'near-sdk-js'

@NearBindgen
class Counter extends NearContract {
    constructor() {
        super()
        this.val = 0
    }

    @call
    // Smart contract function: Increment the counter.
    increment() {
        this.val += 1;
        near.log(`Increased number to ${this.val}`)
    }

    @call
    // Smart contract function: Decrement the counter.
    decrement() {
        this.val -= 1;
        near.log(`Decreased number to ${this.val}`)
    }

    @call
    // Smart contract function: Reset to zero.
    reset() {
        this.val = 0;
        near.log(`Reset counter to zero`)
    }

    @view
    // Smart contract function: Returns the counter value.
    getNum() {
        return this.val
    }
}

