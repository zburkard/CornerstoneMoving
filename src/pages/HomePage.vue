<template>
  <Navbar @click="scroll" />
  <section class="container-fluid mt-2">
    <div class="row justify-content-center mt-5">
      <div class="col-md-8 hero">
        <img src="../assets/img/hero.png" alt="" />
        <button class="btn btn-success">Get a Free Quote!</button>
      </div>
    </div>
    <section ref="About" id="About">
      <div class="row mt-5 ms-5">
        <div class="col-md-2">
          <h3 class="blue-font underline">About Us</h3>
        </div>
      </div>
      <div class="row justify-content-around">
        <div class="col-md-6 justify-content-center card m-2">
          <p>
            Welcome to Cornerstone Moving, a family-owned and operated moving
            company. We have been serving the Boise, Idaho area for generations
            and have built a reputation for providing exceptional moving
            services at affordable prices. Our team of experienced movers is
            dedicated to making your move as smooth and stress-free as possible.
            Our company was founded by Nicky Pendleton, who saw a need for a
            moving company that truly cared about its customers. At Cornerstone
            Moving, we believe that every move is unique, and we strive to
            customize our services to meet your specific needs. Our team of
            professional movers is trained in the latest moving techniques and
            equipped with the best equipment to ensure your belongings are
            handled with the utmost care. We also offer a variety of packing and
            storage solutions to make your move as convenient as possible. Our
            goal is to make your move as seamless and stress-free as possible,
            and we are dedicated to providing you with the highest level of
            customer service. We take pride in our work and always strive to
            exceed our customers' expectations. If you're looking for a reliable
            and affordable moving company, look no further than Cornerstone.
            Contact us today to schedule your move and experience the difference
            that comes with working with a family-owned business.
          </p>
        </div>
        <div class="col-md-4 m-2">
          <img
            class="img-fluid moving-photo"
            src="https://images.unsplash.com/photo-1601654717399-7486d5ebedca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
    <section ref="Schedule" id="Schedule">
      <div class="row mt-5 me-5 justify-content-end">
        <div class="col-md-2">
          <h3 class="blue-font underline2">Schedule Now</h3>
        </div>
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
    <section ref="Reviews" id="Reviews">
      <div class="row mt-5 ms-5">
        <div class="col-md-2">
          <h3 class="blue-font underline">Reviews</h3>
        </div>
      </div>
      <div class="row">
        <div class="d-flex justify-content-evenly">
          <div class="col-md-4 card bg-blue">
            <div class="row">
              <div class="d-flex">
                <i class="mdi mdi-star"></i>
                <i class="mdi mdi-star"></i>
                <i class="mdi mdi-star"></i>
              </div>
              <div class="col-md-12">
                <h2 class="text-white text-end me-4">4.8/5</h2>
              </div>
            </div>
            <div class="row justify-content-center">
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
          <div class="col-md-4 card bg-blue">
            <div class="row">
              <div class="d-flex">
                <i class="mdi mdi-star"></i>
                <i class="mdi mdi-star"></i>
                <i class="mdi mdi-star"></i>
              </div>
              <div class="col-md-12">
                <h2 class="text-white text-end me-4">4.8/5</h2>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-11 card">
                <div class="d-flex">
                  <h5>Zak Burkard</h5>
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
      </div>
    </section>
    <section ref="Contact" id="Contact">
      <div class="row mt-5 ms-5">
        <div class="col-md-2">
          <h3 class="blue-font underline">Contact Us</h3>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { AppState } from "../AppState";
export default {
  setup() {
    // function scroll() {
    //   this.$refs.Contact;
    //   let refName = AppState.pageSection;
    //   console.log(this.$refs.refName);
    //   let element = this.refName;
    //   let top = element.offsetTop;

    //   window.scrollTo(0, top);
    // }
    return {
      scroll() {
        debugger;
        console.log("start", AppState.pageSection);
        let section = AppState.pageSection;
        console.log("alias", section);
        let scrollHeight = document.getElementById(section).scrollHeight;
        console.log("num", scrollHeight);
        window.scrollTo(0, scrollHeight);
      },
    };
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
.underline {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 6px;
  width: 9rem;
  border-color: #00538e;
  border-style: solid;
}
.underline2 {
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 6px;
  width: 12rem;
  border-color: #00538e;
  border-style: solid;
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
  margin-left: 2rem;
}
.moving-photo {
  height: 25rem;
  // width: 15rem;
}
</style>
