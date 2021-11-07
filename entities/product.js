
    function Product(
        id,
        manufacturer,
        model,
        description,
        category,
        price,
        colors,
        target,
        tags,
        image
        ){
            this.id=id;
            this.manufacturer=manufacturer;
            this.model=model;
            this.description=description;
            this.category=category;
            this.colors=colors;
            this.price=price;
            this.target=target;
            this.tags=tags;
            this.image=image;
    }


module.exports=Product;