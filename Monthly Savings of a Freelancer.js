function monthlySavings(array, livingCost) {
    let newTaxAmount = [];
    let totalTaxAmountResult = 0;
    let noTaxAmount = 0;
    if (typeof array == "object" && typeof livingCost == "number") {
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 3000) {
                //console.log(array[i])
                const tax = 20 / 100;
                const taxAmount = array[i] - array[i] * tax;
                //console.log(amount);
                newTaxAmount.push(taxAmount);
            }
            else {
                let noTax = (array[i]);
                noTaxAmount = noTaxAmount + noTax;
            }
        }
        //console.log(total);
        for (const totalTaxAmount of newTaxAmount) {
            //console.log(x);
            totalTaxAmountResult = totalTaxAmountResult + totalTaxAmount;
        }
        // console.log(noTaxAmount);
        // console.log(totalTaxAmountResult)
        const totalAmount = noTaxAmount + totalTaxAmountResult;
        //console.log(totalAmount);
        const totalSavings = totalAmount - livingCost;

        if (0 >= totalSavings) {
            return "earn more";
        }
        else {
            return totalSavings;
        }
    }
    else {
        return ("invalid input")
    }
}


const result = monthlySavings([1000, 2000, 2500], 5000);
console.log(result)