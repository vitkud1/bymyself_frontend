<template>
  <div class="container">
    <b-carousel
      :autoplay="false"
      indicator-custom
      :indicator-inside="false"
      :overlay="gallery"
      @click="switchGallery(true)"
    >
      <b-carousel-item v-for="(item, i) in 15" :key="i">
        <a class="image">
          <img
            style="
              max-height: 600px;
              width: auto;
              margin-left: auto;
              margin-right: auto;
            "
            :src="require(`../assets/${getImgUrl(i)}.jpg`)"
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
            :src="require(`../assets/${getImgUrl(props.i)}.jpg`)"
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
          return "Ложка с утолщенной ручкой";
        case 2:
          return "Ложка с загнутой ручкой ";
        case 3:
          return "Ложка с загнутой ручкой";
        case 4:
          return "Ложка с манжетой";
        case 5:
          return "Ложка с насаженным шаром ";
        case 6:
          return "Адаптированные тарелки";
        case 7:
          return "Бортик для тарелки, защищает от расплескивания пищи ";
        case 8:
          return "Тарелка с присоской";
        case 9:
          return "Кружка для ребенка с ДЦП ";
        case 10:
          return "Кружка и тарелка для ребенка с ДЦП";
        case 11:
          return "Кружки для детей с ДЦП";
        case 12:
          return "Двуручная кружка для ребенка с ДЦП";
        case 13:
          return "Правила посадки в ортопедическом стуле ";
        case 14:
          return "Ортопедический стул";
        case 15:
          return "Ортопедический стул";
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
@media (min-width: 768px) {
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
}
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
  border: 1px solid #fff;
  filter: grayscale(0%);
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}
</style>