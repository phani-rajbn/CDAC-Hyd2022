module.exports = (function(){
    let cart = [];

    function add(item) {
        cart.push(item)
    }

    function deleteItem(id){
        let item = cart.find((e)=>e.id == id)
        let index = cart.indexOf(item);
        cart.splice(index, 1);
    }

    function getAll(){
        return cart;
    }

    return{
        addItemToCart : add, 
        deleteItem, 
        getAll
    }
})();