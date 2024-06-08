const cart=["shoes","pants","kurta"]
createOrder(cart,function(){
    processedToPayment()
})
//0.importance of callbacks
//there are asynchronous operation exit because of callbacks
//1.issue with callbacks
//a.callback hell
//b.inversion of control