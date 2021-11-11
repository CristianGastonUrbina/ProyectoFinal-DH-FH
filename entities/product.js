function Product(
  id,
  name,
  manufacturer,
  model,
  description,
  category,
  price,
  target,
  tags,
  image,
  ship,
  warranty,
  stock
) {
  this.id = id;
  this.name = name;
  this.manufacturer = manufacturer;
  this.model = model;
  this.description = description;
  this.category = category;
  this.price = price;
  this.target = target;
  this.tags = tags;
  this.image = image;
  this.ship = ship;
  this.warranty = warranty;
  this.stock = stock;
}

module.exports = Product;
