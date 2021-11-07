let product ={
    id:"",
    manufacturer:"",
    model:"",
    description:"",
    category:"",
    price:"",
    target:"",
    tags:[],
    image:"",

    function(
        id,
        manufacturer,
        model,
        description,
        category,
        price,
        target,
        tags,
        image
        ){
            this.id=id;
            this.manufacturer=manufacturer;
            this.model=model;
            this.description=description;
            this.category=category;
            this.price=price;
            this.target=target;
            this.tags=tags;
            this.image=image;
    }
}

module.exports=product;