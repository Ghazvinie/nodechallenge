module.exports = class Product {
    constructor(name, category, price, onSale){
        this.name = name;
        this.category = category;
        this.price = price;
        this.onSale = onSale
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
   
    getCategory(){
        return this.category;
    }
    setCategory(category){
        this.category = category;
    }
  
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price = price;
    }

    getOnSale(){
        return this.onSale;
    }
    setOnSale(onSale){
        this.onSale = onSale;
    }
}