class Bank {
    verify(name, amount) {
        // complex logic ...
        return true;
    }
}
class Credit {
    get(name) {
        // complex logic ...
        return true;
    }
}
class Background {
    check(name) {
        // complex logic ...
        return true;
    }
}

module.exports = class MortgageFacade {
   
    static applyFor(amount, name) {
        let result = 'Approved';
        if(!new Bank().verify(name, amount)) {
            result = 'NOT approved';
        } else if (!new Credit().get(name)){
            result = 'NOT approved';
        } else if(!new Background().check(name)){
            result = 'NOT approved';
        }

        return result;
    }
}