<template>
  <!-- GENERAL -->
  <b-row>
    <user-account/>
    <user-profile/>
    <user-change-password/>
    <div class="col-xl-12">
      <a href="#" class="button ripple-effect big margin-top-30">Save Changes</a>
    </div>
  </b-row>
</template>

<script>
import UserAccount from "./UserAccount.vue"
import UserChangePassword from "./UserChangePassword.vue"
import UserProfile from "./UserProfile.vue"

export default {
  layout: 'dashboard',
  components: {
    UserAccount,
    UserChangePassword,
    UserProfile,
  },
  data() {
    return {}
  },
  computed: {
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768
    }
  }
}
</script>
