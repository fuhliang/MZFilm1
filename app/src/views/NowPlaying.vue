<template>
  <div>
        <van-nav-bar
          :title="hot[0].name"
          left-text=""
          left-arrow
          @click-left="goto('/home')"
        />
        <div class="header-img">
          <img
            src="https://static.maizuo.com/pc/v5/usr/movie/20333e2fec359bf2154fd9f5dd90c007.jpg@1024h_768w_50Q?x-oss-process=image/quality,Q_70"
          />
        </div>

        <div class="film-detail">
          <div class="col">
            <div class="film-name">
              <span class="name">{{hot[0].name}}</span><span class="item">2D</span>
            </div>
            <div class="film-grade">
              <span class="grade">{{hot[0].grade}}</span><span class="grade-text">分</span>
            </div>
          </div>
          <div class="film-category grey-text">{{hot[0].category}}</div>
          <div class="film-premiere-time grey-text">2021-11-19上映</div>
          <div class="film-nation-runtime grey-text">{{hot[0].nation}} | {{hot[0].runtime}}分钟</div>
          <div class="test grey-text">
            {{hot[0].synopsis}}
          </div>
        </div>

        <div class="movicer"><span>演职人员</span></div>
        <div style="padding:15px; color:#ffb232">{{hot[0].actors}}</div>

        <a
          href="#"
          style="height: 49px; position: fixed; bottom: 0px; width: 100%"
          ><div class="goSchedule">选座购票</div></a
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
    };
  },
  created() {
       console.log("$route",this.$route);
       const {id} = this.$route.params
       console.log('id',id);

    this.$request.get("/hot/"+id).then((data) => {
      console.log("hot", data.data.data);

      this.hot = data.data.data;
    //   console.log(data.data.data[0].poster);
    });
    this.$request.get("/now/list").then((data) => {
      console.log("now", data.data.data);
      this.now = data.data.data;
    });
  },
  methods: {
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