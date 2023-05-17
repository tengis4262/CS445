class UPS {
    calculate(product) { return "$45.95" }
}

class USPS {
    calculate(product) { return "$39.40" }
}

class Fedex {
    calculate(product) { return "$43.20" }
}

class Shipping {
    
    constructor(){
        this.shippingCompany = new USPS();
    }

    setStrategy(shippingCompany) {
        this.shippingCompany = shippingCompany;
    }

    calculate(product) {
        return this.shippingCompany.calculate(product);
    }
}

const shipping = new Shipping();
document.getElementById('calculate').onclick = function(){
    const strategy = document.getElementById('shipping').value;
    if(strategy === 'UPS') {
        shipping.setStrategy(new UPS());
    } else if (strategy === 'Fedex'){
        shipping.setStrategy(new Fedex())
    } else {
        shipping.setStrategy(new USPS());
    }
    document.getElementById('result').innerHTML = shipping.calculate('dfadsfasd');
}