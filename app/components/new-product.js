import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
 actions: {
   productFormShow() {
     this.set('addNewProduct', true);
   },
   saveProduct1() {
      var params = {
        image: this.get('image'),
        price: this.get('price'),
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct2', params);
    }
 }
});
