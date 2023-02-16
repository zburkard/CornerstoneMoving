<template>
  <section class="container-fluid mt-2">
    <div class="row justify-content-center mt-5">
      <div
        class="
          col-10
          hero
          size
          rounded
          d-flex
          justify-content-end
          align-items-end
        "
      >
        <button class="btn btn-success m-3">Get a Free Quote!</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.hero {
  background-image: url(../assets/img/hero.png);
  background-repeat: no-repeat;
  object-fit: cover;
  height: 50vh;
  // width: 80%;
}
// .size {
//   height: 60vh;
// }
.quote {
  height: 7vh;
  width: 30vh;
}
</style>
