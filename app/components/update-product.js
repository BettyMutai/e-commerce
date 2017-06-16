import Ember from 'ember';

export default Ember.Component.extend({
  updateProductForm: false,
actions: {
  updateProductForm() {
    this.set('updateProductForm', true);
  },
  update(product) {
    var params = {
      image: this.get('image'),
      price: this.get('price'),
    };
    this.set('updateProductForm', false);
    this.sendAction('update', product, params);
  }
}
});
