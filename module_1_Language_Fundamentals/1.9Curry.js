    // 1.
const sum = function (a){
    return function (b){
        return a + b;
    }
}
const cl = sum(5);
const ans = cl(6);
console.log(ans);

// 2.
const ans1 = sum(5)(6);
console.log(ans1);

// 3. 
const sum1 = (a) => {
    return (b) => {
        return a + b;
    }
}
const ans2 = sum1(5)(6);
console.log(ans2);

// 4.
const sum2 = a =>  b => a + b;

const ans3 = sum2(5)(6);
console.log(ans3);

//5. 
const PriceCalc = (price) => {
    return (dPer) => {
        return price*dPer;
    }
}

const discountAmount = PriceCalc(300);
console.log(discountAmount(0.5));
console.log(discountAmount(0.3));
console.log(discountAmount(0.2));
