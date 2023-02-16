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
    <section id="About">
      <div class="row mt-5">
        <h3 class="blue-font">About Us</h3>
        <div class="d-flex">
          <div class="col-md-6 justify-content-center card">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium magnam doloribus totam esse quis accusamus assumenda
              dolor! Voluptas consequuntur accusantium laudantium, laborum
              facilis, illum esse repellat, dolorum voluptate labore a.
            </p>
          </div>
          <div class="col-md-4">
            <img src="" alt="" />
            Placholder
            <!-- TODO put an image in here -->
          </div>
        </div>
      </div>
    </section>
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
.blue-font {
  color: #00538e;
}
// .size {
//   height: 60vh;
// }
.quote {
  height: 7vh;
  width: 30vh;
}
</style>
