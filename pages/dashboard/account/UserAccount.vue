<template>

  <div class="col-xl-12">
    <div class="dashboard-box margin-top-0">
      <!-- Headline -->
      <div class="headline">
        <h3><i class="icon-material-outline-account-circle"></i> My Account</h3>
      </div>
      <div class="content with-padding padding-bottom-0">
        <div class="row">
          <div class="col-auto">
            <div class="avatar-wrapper" data-tippy-placement="bottom" data-tippy="" data-original-title="Change Avatar">
              <img class="profile-pic" src="images/user-avatar-placeholder.png" alt="">
              <div class="upload-button"></div>
              <input class="file-upload" type="file" accept="image/*">
            </div>
          </div>

          <div class="col">
            <div class="row">
              <div class="col-xl-6">
                <div class="submit-field">
                  <h5>First Name</h5>
                  <input type="text" class="with-border" value="Nitish">
                </div>
              </div>
              <div class="col-xl-6">
                <div class="submit-field">
                  <h5>Last Name</h5>
                  <input type="text" class="with-border" value="Chopra">
                </div>
              </div>
              <div class="col-xl-6">
                <div class="submit-field">
                  <h5>Email</h5>
                  <input type="text" class="with-border" value="tom@example.com">
                </div>
              </div>
              <div class="col-xl-6">
                <div class="submit-field">
                  <h5>Phone</h5>
                  <input type="text" class="with-border" value="+91 1234567890">
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      comment: true,
      answer: true,
      follow: false,
      news: false,
      product_update: false,
      blog: true,
    }
  },
  computed: {
    activeUserInfo() {
    },
  }
}
</script>
