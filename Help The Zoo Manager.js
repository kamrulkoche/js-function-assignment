function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number (you can give your own string error message)"
    }
    else {
        const ticketamount = ticketSale * 120;
        // return ticketamount;

        const gateman = 500;
        const staff = 8 * 50;
        const totalcost = gateman + staff;
        //return totalcost
        const income = ticketamount - totalcost;
        return income;
    }

}


const result = calculateMoney(10);
console.log(result);