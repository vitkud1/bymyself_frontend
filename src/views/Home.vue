<template>
  <div class="card-content" style="width: 100% !important">
    <section>
      <div class="content">
        <h3
          style="
            font-family: Georgia, Times, serif;
            margin-left: 5%;
            margin-right: 5%;
          "
        >
          Что такое ДЦП?
        </h3>
        <p
          style="
            background-color: transparent;
            border-bottom: none;
            border-left: none;
            border-right: none;
            border-top: none;
            line-height: 1.38;
            margin-bottom: 0;
            margin-left: 5%;
            margin-right: 5%;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            text-align: justify;
            text-indent: 28pt;
            white-space: normal;
            font-family: Georgia, Times, serif;
          "
        >
          Детский церебральный паралич – заболевание, появляющееся вследствие
          органического поражения головного мозга, которое возникает в период
          внутриутробного развития, в период родов или в период новорожденности
          и сопровождается различными двигательными нарушениями: парезами,
          параличами, насильственными движениями, нарушением координации. Кроме
          того, у 60% детей, страдающих детскими церебральными параличами,
          наблюдаются нарушения психики и речи. Как видно из данной
          характеристики, при ДЦП поражены самые важные для человека функции –
          интеллект, речь, психика, движение. Степень тяжести двигательных
          нарушений варьирует в большом диапазоне – от грубейших двигательных
          нарушений до минимальных, таких, что у ряда детей стирается грань
          между детскими церебральными параличами и другими заболеваниями, также
          связанными с поражением головного мозга, но протекающими без
          параличей.
        </p>
      </div>
    </section>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      carousels: [
        { text: "Slide 1", color: "primary" },
        { text: "Slide 2", color: "info" },
        { text: "Slide 3", color: "success" },
        { text: "Slide 4", color: "warning" },
        { text: "Slide 5", color: "danger" },
      ],
    };
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    },
  },
  components: {},
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
</style>