<template>
  <div>
    <a>
      <van-image
        v-for="item in now"
        :key="item.tp"
        width="100%"
        height="76"
        :src="$request.baseUrl + item.filmType"
      />
    </a>
    <a>
      <img
        width="100%"
        height="76"
        src="../assets/imgs/mine/10.jpg"
      />
    </a>
  </div>
</template>
<script>
export default {
  //资讯
  name: "Information",
  data() {
    return {
      now: [],
    };
  },
  created() {
    this.$request.get("/now/list").then((data) => {
      // console.log("now", data.data.data);
      this.now = data.data.data;
    });
  },
};
</script>
<style scoped>
img{
    margin-bottom: 2.5rem;
}
</style>