<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="footer-left">
            <h3 class="footer-heading">Get New Jobs Notification!</h3>
            <p class="desc-white mt-4 mb-4">
              Subscribe & get all related jobs notification
            </p>
            <form action="" class="subscribe-frm">
              <input type="text" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="col-md-5 text-center">
          <h3 class="footer-heading">Follow us</h3>
          <div class="social-icons mt-5 m-auto">
            <a href=""
              ><img src="../assets/img/instragrame.png" alt=""
            /></a>
            <a href=""
              ><img src="../assets/img/facebook.png" alt=""
            /></a>
            <a href=""
              ><img src="../assets/img/linkdin.png" alt=""
            /></a>
          </div>
        </div>
      </div>
      <p class="copywrite-text">
        2023 &copy; Jobiet - Job Listing Page Template by kavyabhargavay
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  padding: 5rem 1.5rem;
  background: #0146b1;
  border-radius: 3rem;
  margin: auto;
}
.footer-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}
.subscribe-frm {
  height: 5.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 40rem;
  background: rgba(53, 219, 255, 0.1);
  border: 0.3rem solid rgba(255, 255, 255, 0.3);
  border-radius: 3rem;
  overflow: hidden;
  margin-top: 5rem;
}
.subscribe-frm input {
  padding-left: 2rem;
  border-radius: 3rem 0 0 3rem;
  background: transparent;
  color: #fff;
  width: 100%;
}
.subscribe-frm input,
.subscribe-frm button {
  border: 0;
  outline: 0;
  height: 100%;
}
.subscribe-frm button {
  background: #b3fd4c;
  padding: 0 2rem;
  border-radius: 3rem;
}
.social-icons a {
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.social-icons a img {
  width: 4rem;
  margin-right: 1rem;
}
.social-icons a:hover {
  opacity: 0.7;
}
.copywrite-text {
  text-align: center;
  color: #fff;
  margin-top: 9rem;
  font-size: 1.9rem;
}
/* banner section */
/* .banner-section {
} */
.banner-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.banner-left {
  -ms-flex-preferred-size: 70%;
  flex-basis: 70%;
  background: #0146b1;
  text-align: center;
  height: 12rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.banner-right {
  -ms-flex-preferred-size: 30%;
  flex-basis: 30%;
  background: #b3fd4c;
}
/* related-job */
.related-job {
  background: #fff;
  padding: 4rem 4%;
  border-radius: 3rem;
  width: 97%;
  margin: 5rem auto;
  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;
}
.related-job svg {
  fill: #0146b1;
}
.related-job:hover {
  color: #fff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#0d57cb),
    to(#0141a4)
  );
  background: -o-linear-gradient(top, #0d57cb 0%, #0141a4 100%);
  background: linear-gradient(180deg, #0d57cb 0%, #0141a4 100%);
}
.related-job:hover a {
  color: #fff;
}
.related-job:hover .related-job-tag svg {
  fill: #fff;
}
.related-job:hover .resume-btn {
  background: #fff;
}
.related-job:hover .resume-btn span {
  color: #0146b1;
}
.related-job:hover .resume-btn svg {
  fill: #0146b1;
}
.related-job h3 {
  font-size: 2.2rem;
  font-weight: 700;
}
.related-job-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 5rem;
  margin-top: 4rem;
}
.related-job-content img {
  width: 6rem;
  height: 6rem;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
}
/* d-flex align-items-center justify-content-between */
.related-bottom {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.related-bottom .job-tags {
  margin-left: 10rem;
}
.related-job-tag {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 6rem;
}
.read-full-btn {
  cursor: pointer;
}
.read-full-btn p {
  color: #0146b1;
  font-weight: 600;
  font-size: 2rem;
}
.related-bottom .common-btn {
  padding: 1rem 3rem;
}
.related-bottom .job-tags a {
  padding: 0.8rem 2rem;
}
</style>