<template>
  <div class="card-content" style="width: 100% !important">
    <div class="card">
      <p class="sub">На странице представлены упражнения.</p>
      <p class="sub">
        Если условие не выполняется - открывайте текст упражнения.
      </p>
      <p class="sub">Если условие выполняется - читайте следующее условие.</p>
    </div>
    <section>
      <b-collapse
        class="card"
        animation="slide"
        v-for="(collapse, index) of collapses"
        :key="index"
        :open="isOpen == index"
        @open="isOpen = index"
      >
        <template #trigger="props">
          <div class="card-header" role="button">
            <p class="card-header-title">
              {{ collapse.condition }}
            </p>
            <a class="card-header-icon">
              <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
            </a>
          </div>
        </template>
        <div class="card-content">
          <div class="content">
            {{ collapse.exercise }}
          </div>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          condition: "",
          exercise: "",
        },
      ],
    };
  },
  async mounted() {
    let url = this.host + "/exercises/all";
    await axios.get(url).then((r) => {
      console.log(r.data);
      this.collapses = r.data;
    });
    console.log(this.collapses);
  },
  computed: {
    host() {
      return this.$store.getters.host;
    },
  },
};
</script>

<style>
.sub {
  font-size: large;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>