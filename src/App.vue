<template>
  <div>
    <main>
      <div class="page-loader">
        <div class="loader">Загрузка...</div>
      </div>
      <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button
              class="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#custom-collapse"
            >
              <span class="sr-only">Меню</span><span class="icon-bar"></span
              ><span class="icon-bar"></span
              ><span class="icon-bar"></span></button
            ><router-link class="navbar-brand" to="/">NickWeb</router-link>
          </div>
          <div class="collapse navbar-collapse" id="custom-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <router-link to="/">Главная</router-link>
              </li>
              <li>
                <!-- <router-link to="/products">Продукты</router-link> -->
              </li>
              <li>
                <router-link to="/about">Обо мне</router-link>
              </li>
              <!-- <li class="dropdown">
                <a class="dropdown-toggle" href="#" data-toggle="dropdown"
                  >Разделы</a>
                <ul class="dropdown-menu">
                  <li><a href="index_agency.html">Агенство</a></li>
                  <li><a href="index_portfolio.html">Портфолио</a></li>
                  <li><a href="index_restaurant.html">Рестораны</a></li>
                  <li><a href="index_finance.html">Финансы</a></li>
                  <li><a href="index_landing.html">Лендинг</a></li>
                  <li><a href="index_photography.html">Фотографии</a></li>
                  <li><a href="index_shop.html">Магазин</a></li>
                </ul>
              </li> -->
              <li>
                <router-link to="/login">Войти</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <router-view />

      <div class="module-small bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="widget">
                <h5 class="widget-title font-alt">О нас</h5>
                <p>
                  Языки отличаются только своей грамматикой, произношением и
                  наиболее распространенными словами.
                </p>
                <p>Телефон: +1 234 567 89 10</p>
                <p>Email:<a href="#">somecompany@example.com</a></p>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="widget">
                <h5 class="widget-title font-alt">Разделы</h5>
                <ul class="icon-list">
                  <li><a href="#">Фотографии - 7</a></li>
                  <li><a href="#">Веб - дизайн - 3</a></li>
                  <li><a href="#">Илюстрации - 12</a></li>
                  <li><a href="#">Маркетинг - 1</a></li>
                  <li><a href="#">Vue JS - 16</a></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="widget">
                <h5 class="widget-title font-alt">Популярные посты</h5>
                <ul class="widget-posts">
                  <li class="clearfix">
                    <div class="widget-posts-image">
                      <a href="#"
                        ><img src="assets/images/rp-1.jpg" alt="Post Thumbnail"
                      /></a>
                    </div>
                    <div class="widget-posts-body">
                      <div class="widget-posts-title">
                        <a href="#">Дизайн старых технологий</a>
                      </div>
                      <div class="widget-posts-meta">23 Января</div>
                    </div>
                  </li>
                  <li class="clearfix">
                    <div class="widget-posts-image">
                      <a href="#"
                        ><img src="assets/images/rp-2.jpg" alt="Post Thumbnail"
                      /></a>
                    </div>
                    <div class="widget-posts-body">
                      <div class="widget-posts-title">
                        <a href="#">Реалистичный бизнес дизайн</a>
                      </div>
                      <div class="widget-posts-meta">15 Февраля</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="divider-d" />
      <footer class="footer bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <p class="copyright font-alt">
                &copy; 2023&nbsp;<router-link to="/">NICKWEB</router-link>, ВСЕ
                ПРАВА ЗАЩИЩЕНЫ
              </p>
            </div>
            <div class="col-sm-6">
              <div class="footer-social-links">
                <a href="#"><i class="fa fa-facebook"></i></a
                ><a href="#"><i class="fa fa-twitter"></i></a
                ><a href="#"><i class="fa fa-dribbble"></i></a
                ><a href="#"><i class="fa fa-skype"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="scroll-up">
        <a href="#totop"><i class="fa fa-angle-double-up"></i></a>
      </div>
    </main>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterLink,
  },
  metaInfo: {
    title: "Vue App",
    meta: [
      { vmid: "description", property: "description", content: "Vue App" },
      { vmid: "og:title", property: "og:title", content: "Vue App" },
      {
        vmid: "og:description",
        property: "og:description",
        content: "Vue App",
      },
    ],
  },
  data() {
    return {
      pages: [],
      page: [],
    };
  },
  mounted() {
    $(document).trigger("chenge");
    this.getPages();
  },
  methods: {
    getPages() {
      this.axios
        .get("http://127.0.0.1:8000/api/pages")
        .then((res) => {
          this.pages = res.data.data;
          let thisPage = this.$route.path;
          let page = this.pages.find((p) => p.link_page === thisPage);
          console.log(this.$route.meta.dataInMeta)
        })
        .catch((error) => {
          console.log(error || error.message);
          context.commit("error", error);
        });
    },
  },
};
</script>

<style scoped>
</style>
