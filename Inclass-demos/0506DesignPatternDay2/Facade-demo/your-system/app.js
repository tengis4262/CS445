const MortgageFacade = require('../mortgage-subsystem/app');

class MortgageAgency {
    
    apply(name, amount){
        MortgageFacade.applyFor(name, amount);
    }

}

new MortgageAgency().apply(name, amount);