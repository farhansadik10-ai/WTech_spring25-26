const price = document.getElementById('price');
const quantity = document.getElementById("qpd");
const total = document.getElementById("tp");

const days = 30;

function calculator() {
    let unit = Number(price.value);
    let qp = Number(quantity.value);

    
    if (isNaN(unit) || isNaN(qp)) {
        total.value = "";
        return;
    }

    
    if (qp < 0 || unit < 0) {
        alert("Value cannot be negative!");
        quantity.value = 0;
        price.value = 0;
        total.value = "";
        return;
    }

    
    let ctotal = unit * qp * days;
    total.value = ctotal;

    
    if (ctotal > 1000) {
        alert("Congratulations! You are eligible for a gift coupon");
    }
}


quantity.addEventListener('input', calculator);
price.addEventListener('input', calculator);