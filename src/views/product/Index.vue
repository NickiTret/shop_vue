<template>
  <div class="main">
    <section
      class="module bg-dark-60 shop-page-header"
      data-background="assets/images/shop/product-page-bg.jpg"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-sm-offset-3">
            <h2 class="module-title font-alt">Shop Products</h2>
            <div class="module-subtitle font-serif">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="module-small">
      <div class="container">
        <form class="row">
          <div class="col-sm-4 mb-sm-20">
            <select class="form-control">
              <option selected="selected">Default Sorting</option>
              <option>Popular</option>
              <option>Latest</option>
              <option>Average Price</option>
              <option>High Price</option>
              <option>Low Price</option>
            </select>
          </div>
          <div class="col-sm-2 mb-sm-20">
            <select class="form-control">
              <option selected="selected">Woman</option>
              <option>Man</option>
            </select>
          </div>
          <div class="col-sm-3 mb-sm-20">
            <select class="form-control">
              <option selected="selected">All</option>
              <option>Coats</option>
              <option>Jackets</option>
              <option>Dresses</option>
              <option>Jumpsuits</option>
              <option>Tops</option>
              <option>Trousers</option>
            </select>
          </div>
          <div class="col-sm-3">
            <button class="btn btn-block btn-round btn-g" type="submit">
              Apply
            </button>
          </div>
        </form>
      </div>
    </section>
    <hr class="divider-w" />
    <section class="module-small">
      <div class="container">
        <div class="row multi-columns-row">
          <div
            class="col-sm-6 col-md-4 col-lg-4"
            v-for="item in products"
            :key="item.id"
          >
            <div class="shop-item">
              <div class="shop-item-image">
                <img :src="item.preview_image_url" alt="Accessories Pack" />
                <div class="shop-item-detail">
                  <a class="btn btn-round btn-b"
                    ><span class="icon-basket">???????????????? ?? ??????????????</span></a
                  >
                </div>
              </div>
              <h4 class="shop-item-title font-alt">
                <a href="#">{{ item.title }}</a>
              </h4>
              {{ item.price }} RUB
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="pagination font-alt">
              <a href="#"><i class="fa fa-angle-left"></i></a
              ><a class="active" href="#">1</a><a href="#">2</a><a href="#">3</a
              ><a href="#">4</a
              ><a href="#"><i class="fa fa-angle-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "Product",
  components: {
    RouterLink,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    $(document).trigger("chenge");
    this.getProducts();
  },
  //???????????? ?????? ???????????????? ??????????????????
  methods: {
    getProducts() {
      this.axios.get("http://127.0.0.1:8000/api/products").then((res) => {
        this.products = res.data.data;
        console.log(this.products);
      });
    },
  },
};
</script>

<style scoped>
</style>
