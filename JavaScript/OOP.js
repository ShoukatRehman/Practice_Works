var purchase = {
    shoes : 100,
    stateTax : 1.2,
    totalPrice : function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total price :',calculation);
    }

}
purchase.totalPrice();

var purchase2 = {
    shoes : 50,
    stateTax : 1.2,
    totalPrice : function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total price :',calculation);
    }

}
purchase2.totalPrice();