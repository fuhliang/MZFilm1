<template>
  <div>
    <van-nav-bar
      :title="hot_name"
      left-text=""
      left-arrow
      @click-left="goto('/home')"
    />
    <div class="header-img">
      <img :src="$request.baseUrl + hot_img_url" />
    </div>

    <div class="film-detail">
      <div class="col">
        <div class="film-name">
          <span class="name">{{ hot_name }}</span
          ><span class="item">2D</span>
        </div>
        <div class="film-grade">
          <span class="grade">{{ hot_grade }}</span
          ><span class="grade-text">分</span>
        </div>
      </div>
      <div class="film-category grey-text">{{ hot_category }}</div>
      <div class="film-premiere-time grey-text">2021-11-19上映</div>
      <div class="film-nation-runtime grey-text">
        {{ hot_nation }} | {{ hot_runtime }}分钟
      </div>
      <div class="test grey-text">
        {{ hot_synopsis }}
      </div>
    </div>

    <div class="movicer"><span>演职人员</span></div>
    <div style="padding: 15px; color: #ffb232; margin-bottom:50px;">{{ hot_actors }}</div>

    <a href="#" style="height: 49px; position: fixed; bottom: 0px; width: 100%"
      ><div
        v-for="item in hot"
        :key="item.id"
        class="goSchedule"
        @click="gotoDetail(item.id)"
      >
        选座购票
      </div></a
    >
  </div>
</template>
<script>
export default {
  //详情页
  name: "NowPlaying",
  data() {
    return {
      hot: [],
      now: [],
      hot_name: "",
      hot_img_url: "",
      hot_grade: "",
      hot_category: "",
      hot_nation: "",
      hot_runtime: "",
      hot_synopsis: "",
      hot_actors: "",
    };
  },
  created() {
    const { id } = this.$route.params;
    const { table_name } = this.$route.query;
    // console.log('table_name',table_name);
    // console.log("id", id);

    switch (table_name) {
      case "hot":
        this.$request.get("/hot/" + id).then((data) => {
          // console.log(data);
          this.hot = data.data.data;
          this.hot_name = data.data.data[0].name;
          this.hot_img_url = data.data.data[0].img_url;
          this.hot_grade = data.data.data[0].grade;
          this.hot_category = data.data.data[0].category;
          this.hot_nation = data.data.data[0].nation;
          this.hot_runtime = data.data.data[0].runtime;
          this.hot_synopsis = data.data.data[0].synopsis;
          this.hot_actors = data.data.data[0].actors;
        });

        break;

      case "now":
        this.$request.get("/now/" + id).then((data) => {
          // console.log(data);
          this.hot = data.data.data;
          this.hot_name = data.data.data[0].name;
          this.hot_img_url = data.data.data[0].img_url;
          this.hot_grade = data.data.data[0].grade;
          this.hot_category = data.data.data[0].category;
          this.hot_nation = data.data.data[0].nation;
          this.hot_runtime = data.data.data[0].runtime;
          this.hot_synopsis = data.data.data[0].synopsis;
          this.hot_actors = data.data.data[0].actors;
        });
        break;
    }

    // this.$request.get("/hot/" + id).then((data) => {
    // // console.log("hot", data.data.data);

    // this.hot = data.data.data;
    // this.hot_name = data.data.data[0].name;
    // this.hot_img_url = data.data.data[0].img_url;
    // this.hot_grade = data.data.data[0].grade;
    // this.hot_category = data.data.data[0].category;
    // this.hot_nation = data.data.data[0].nation;
    // this.hot_runtime = data.data.data[0].runtime;
    // this.hot_synopsis = data.data.data[0].synopsis;
    // this.hot_actors = data.data.data[0].actors;
    // });
    // this.$request.get("/now/list").then((data) => {
    //   console.log("now", data.data.data);
    //   this.now = data.data.data;
    // this.now_actors = data.data.data[0].actors;
    // });
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({
        name: "Buy",
        params: {
          id,
        },
      });
    },
    goto(url) {
      this.$router.push(url);
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  z-index: 999;
}
.goSchedule {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 3.0625rem;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 1rem;
  line-height: 3.0625rem;
}
div {
  box-sizing: border-box;
}
.header-img {
  height: 250px;
  overflow: hidden;
  img {
    width: 100%;
    position: relative;
    top: -60%;
  }
}
.grey-text {
  font-size: 0.8125rem;
  color: #797d82;
  margin-top: 0.25rem;
}
.film-detail {
  padding: 0.9375rem;
  padding-top: 0.75rem;
  .col {
    display: flex;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    .film-name {
      width: 16rem;
      .name {
        color: #191a1b;
        font-size: 1.125rem;
        height: 1.5rem;
        line-height: 1.5rem;
        margin-right: 0.4375rem;
      }
      .item {
        font-size: 0.5625rem;
        color: #fff;
        background-color: #d2d6dc;
        height: 0.875rem;
        line-height: 0.875rem;
        padding: 0 0.125rem;
        border-radius: 0.125rem;
        display: inline-block;
      }
    }
    .film-grade {
      width: calc(100% - 15.625rem);
      text-align: right;
      color: #ffb232;
      .grade {
        font-size: 1.125rem;
        font-style: italic;
      }
      .grade-text {
        font-size: 0.625rem;
      }
    }
  }
}
.test {
  margin-top: 0.75rem;
}
.movicer {
  width: 100%;
  padding: 0.9375rem;
}
</style>