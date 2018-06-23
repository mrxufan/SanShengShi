<template>
  <div id="product-list-one">
    <h2>product list one</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
    <button v-on:click="reducePrice">商品降价</button>
  </div>
</template>

<script>

export default {
 computed:{
   products:function(){
    return this.$store.state.products;
   },
   saleProducts:function(){
    return this.$store.getters.saleProducts;
   }
 },
 methods:{
   reducePrice:function(){
    // this.$store.state.products.forEach(product=>{
    //   product.price-=1;
    // })
    this.$store.commit('reducePrice');
   }
 }
};
</script>

<style scoped>
#product-list-one{background: #FFF881;box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);margin-bottom: 30px;padding: 10px 20px;}
#product-list-one ul{padding: 0;}
#product-list-one li{display: inline-block;margin-right: 10px;margin-top: 10px;padding: 20px;background-color: rgba(255, 255, 255, .7)}
.price{font-weight: bold;color: #E8800C;}
</style>
