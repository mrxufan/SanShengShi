<template>
  <div id="product-list-two">
    <h2>product list two</h2>
    <ul>
      <li v-for="product in saleProducts">
        <span class="name">{{product.name}}</span>
        <span class="price">${{product.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
computed:{
   products:function(){
    return this.$store.state.products
   },
   saleProducts:function(){
    return this.$store.getters.saleProducts;
   }
 }
};
</script>

<style scoped>
#product-list-two{background: green;box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);margin-bottom: 30px;padding: 10px 20px;}
#product-list-two ul{padding: 0;}
#product-list-two li{display: inline-block;margin-right: 10px;margin-top: 10px;padding: 20px;background-color: rgba(255, 255, 255, .7)}
.price{font-weight: bold;color: #E8800C;}
</style>
