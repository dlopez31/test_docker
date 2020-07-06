const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: { type: Number, unique: true, require: [true, 'El id es necesario'] },
  brand: { type: String, require: [true, 'La marca es necesaria'] },
  description: {
    type: String,
    require: [true, 'La la descripcion es nesesaria'],
  },
  image: { type: String, require: false },
  price: { type: Number, require: [true, 'El precio es nesesario'] },
});

module.exports = mongoose.model('Product', productSchema);
