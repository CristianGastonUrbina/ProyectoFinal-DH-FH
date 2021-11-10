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
  image
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
}

module.exports = Product;
