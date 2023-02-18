<template>
  <section class="container-fluid mt-2">
    <div class="row justify-content-center mt-5">
      <div class="col-md-8 hero">
        <img src="../assets/img/hero.png" alt="" />
        <button class="btn btn-success">Get a Free Quote!</button>
      </div>
    </div>
    <section id="About">
      <div class="row mt-5">
        <h3 class="blue-font">About Us</h3>
      </div>
      <div class="row">
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
          Placeholder
          <!-- TODO put an image in here -->
        </div>
      </div>
    </section>
    <section id="Schedule">
      <div class="row mt-5">
        <h3 class="blue-font text-end">Schedule Now</h3>
      </div>
      <div class="row">
        <div class="d-flex justify-content-center">
          <div class="col-md-10">
            <img
            src=https://s3-eu-central-1.amazonaws.com/euc-cdn.freshdesk.com/data/helpdesk/attachments/production/80064177158/original/DlQcbNChnVHLJnZoZ-iTAnG9RXY8Z5d-6g.gif?1640620735
            alt="" />
          </div>
        </div>
      </div>
    </section>
    <section id="Reviews">
      <div class="row mt-5">
        <h3 class="blue-font">Reviews</h3>
      </div>
      <div class="row">
        <div class="col-md-4 card bg-blue">
          <div class="row">
            <div class="d-flex">
              <i class="mdi mdi-star"></i>
              <i class="mdi mdi-star"></i>
              <i class="mdi mdi-star"></i>
            </div>
            <h5 class="text-white text-end">4.8/5</h5>
          </div>
          <div class="row">
            <div class="col-md-11 card">
              <div class="d-flex">
                <h5>Tyler Rice</h5>
                <img
                  class="img-fluid profile-pic"
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum corporis aspernatur minima illo earum dolore, fugiat
                quaerat impedit laboriosam ex porro deserunt asperiores,
                necessitatibus, eaque doloremque error id optio ea.
              </p>
            </div>
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
  position: relative;
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
.blue-font {
  color: #00538e;
}

.bg-blue {
  background-color: #00538e !important;
}
// .size {
//   height: 60vh;
// }
.quote {
  height: 7vh;
  width: 30vh;
}

.profile-pic {
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
}
</style>
