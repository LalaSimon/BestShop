const form = document.querySelector(".calc__form");
const quantity = form.querySelector("#products");
const ordersAmmount = form.querySelector("#orders");
const _package = form.querySelector("#package > div");
const packageList = form.querySelector(".select__dropdown");
const firstCheckbox = form.querySelector("#accounting");
const secondCheckbox = form.querySelector("#terminal");
const firstItem = document.querySelector(".calc__summary > ul > li");
const secondItem = document.querySelector(".calc__summary > ul > li + li");
const thirdItem = document.querySelector(".calc__summary > ul > li + li + li");
const fourthItem = document.querySelector(".calc__summary > ul > li + li + li + li");
const fifthItem = document.querySelector(".calc__summary > ul > li + li + li + li + li");
const selectInput = document.querySelector(".select__input");
const totalSum = document.querySelector("#total-price");
const totalPrice = document.querySelector(".total__price");
let price = 0;
quantity.addEventListener("input", function(event) {
    if (quantity.value === "") firstItem.style.display = "none";
    else {
        firstItem.style.display = "flex";
        firstItem.children[1].innerText = this.value + " * $0.5";
        firstItem.children[2].innerText = "$" + this.value * 0.5;
        price += this.value * 0.5;
        updatePrice();
    }
});
ordersAmmount.addEventListener("input", function(event) {
    if (ordersAmmount.value === "") secondItem.style.display = "none";
    else {
        secondItem.style.display = "flex";
        secondItem.children[1].innerText = this.value + " * $0.25";
        secondItem.children[2].innerText = "$" + this.value * 0.25;
        price += this.value * 0.25;
        updatePrice();
    }
});
_package.addEventListener("click", function(event) {
    if (packageList.style.display == "none" || packageList.style.display == "") packageList.style.display = "block";
    else packageList.style.display = "none";
});
packageList.children[0].addEventListener("click", function(event) {
    selectInput.innerText = "Basic";
    thirdItem.style.display = "flex";
    thirdItem.children[1].innerText = "Basic";
    thirdItem.children[2].innerText = "10$";
    packageList.style.display = "none";
    price += 10;
    updatePrice();
});
packageList.children[1].addEventListener("click", function(event) {
    selectInput.innerText = "Professional";
    thirdItem.style.display = "flex";
    thirdItem.children[1].innerText = "Professional";
    thirdItem.children[2].innerText = "20$";
    packageList.style.display = "none";
    price += 20;
    updatePrice();
});
packageList.children[2].addEventListener("click", function(event) {
    selectInput.innerText = "Premium";
    thirdItem.style.display = "flex";
    thirdItem.children[1].innerText = "Premium";
    thirdItem.children[2].innerText = "30$";
    packageList.style.display = "none";
    price += 30;
    updatePrice();
});
firstCheckbox.addEventListener("change", function(event) {
    if (this.checked) {
        fourthItem.style.display = "flex";
        price += 10;
        updatePrice();
    } else {
        fourthItem.style.display = "none";
        price -= 10;
        updatePrice();
    }
});
secondCheckbox.addEventListener("change", function(event) {
    if (this.checked) {
        fifthItem.style.display = "flex";
        price += 10;
        updatePrice();
    } else {
        fifthItem.style.display = "none";
        price -= 10;
        updatePrice();
    }
});
function updatePrice() {
    if (price > 0) {
        totalSum.style.display = "flex";
        totalPrice.innerText = "$" + price;
    }
}

//# sourceMappingURL=index.cea00a9b.js.map
