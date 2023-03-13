<template>
  <section
    class="bg-dark-30 showcase-page-header module parallax-bg"
    data-background="assets/images/showcase_bg.jpg"
  >
    <div class="titan-caption">
      <div class="caption-content">
        <div class="font-alt mb-30 titan-title-size-1">
          Сайт портфолио. Дизайн и веб-разработка.
        </div>
        <div class="font-alt mb-40 titan-title-size-4">Третьяков Никита</div>
        <a class="section-scroll btn btn-border-w btn-round" href="#demos"
          >см. Резюме</a
        >
      </div>
    </div>
  </section>
  <div class="main showcase-page">
    <section class="module-medium" id="demos">
      <div class="container">
        <div v-for="project in projects" :key="project.id" class="row multi-columns-row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <router-link :props="project" class="content-box" :to="{name: 'project', params: { id: `${project.id}`}}">
              <div class="content-box-image">
                <img
                  :src="project.preview_image_url"
                  :alt="project.title"/>
              </div>
              <h3 class="content-box-title font-serif">{{ project.title }}</h3></router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      projects: [],
      project: [],
    };
  },
  mounted() {
    $(document).trigger("chenge");
    this.getProjects();
  },
  methods: {
    getProjects() {
      this.axios.get("http://127.0.0.1:8000/api/projects")
      .then((res) => {
        this.projects = res.data.data;
      })
      .finally(v => {
        $(document).trigger("chenge");
      })
    },
    getProject(id) {
      this.axios.get(`http://127.0.0.1:8000/api/projects/${id}`)
      .then((res) => {
        this.project = res.data.data;
        console.log(this.project)
      })
      .finally(v => {
        $(document).trigger("chenge");
      })
    },
  },
};
</script>

<style scoped>
</style>