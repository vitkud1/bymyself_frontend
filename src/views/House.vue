<template>
  <div class="container">
    <b-carousel
      :autoplay="false"
      indicator-custom
      :indicator-inside="false"
      :overlay="gallery"
      @click="switchGallery(true)"
    >
      <b-carousel-item v-for="(item, i) in 10" :key="i">
        <a class="image">
          <img
            style="
              max-height: 600px;
              width: auto;
              margin-left: auto;
              margin-right: auto;
            "
            :src="require(`../assets/z${getImgUrl(i)}.jpg`)"
          />
          <div class="centered">{{ getText(i) }}</div>
        </a>
      </b-carousel-item>
      <span
        v-if="gallery"
        @click="switchGallery(false)"
        class="modal-close is-large"
      />
      <template #indicators="props">
        <figure class="al image" :draggable="false">
          <img
            :draggable="false"
            :src="require(`../assets/z${getImgUrl(props.i)}.jpg`)"
            :title="props.i"
          />
        </figure>
      </template>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gallery: false,
    };
  },
  methods: {
    getImgUrl(value) {
      value += 1;
      return value;
    },
    getText(value) {
      value += 1;
      switch (value) {
        case 1:
          return "Ванная комната";
        case 2:
          return "Ванная комната";
        case 3:
          return "Ванная комната";
        case 4:
          return "Ванная комната";
        case 5:
          return "Ванная комната";
        case 6:
          return "Ванная комната";

        case 8:
          return "Спальня и спальное место";
        case 9:
          return "Доска для пересаживания";
        case 10:
          return "Кухонное пространство";
      }
    },
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    },
  },
};
</script>

<style>
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  text-align: center;
  color: black;
}
/* @media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
} */
.centered {
  position: absolute;
  top: 50%;
  font-size: xx-large;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  left: 50%;
  color: black;
  text-shadow: white 0 0 5px;
  transform: translate(-50%, -50%);
}
.is-active .al img {
  border: 1px solid rgb(0, 0, 0);
  filter: grayscale(0%);
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}
</style>