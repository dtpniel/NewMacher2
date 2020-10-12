<template>
  <div class="col-xl-12">
    <div id="test1" class="dashboard-box">
      <!-- Headline -->
      <div class="headline">
        <h3><i class="icon-material-outline-lock"></i> Password &amp; Security</h3>
      </div>
      <div class="content with-padding">
        <div class="row">
          <div class="col-xl-4">
            <div class="submit-field">
              <h5>Current Password</h5>
              <input type="password" class="with-border" v-model="old_password">
            </div>
          </div>
          <div class="col-xl-4">
            <div class="submit-field">
              <h5>New Password</h5>
              <input type="password" class="with-border" v-model="new_password">
            </div>
          </div>
          <div class="col-xl-4">
            <div class="submit-field">
              <h5>Repeat New Password</h5>
              <input type="password" class="with-border" v-model="confirm_new_password">
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
      old_password: "",
      new_password: "",
      confirm_new_password: "",
    }
  },
  computed: {
    activeUserInfo() {
    },
  }
}
</script>
