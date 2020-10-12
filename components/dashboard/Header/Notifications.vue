<template>
  <ul>
    <!-- Notification -->
    <template v-if="type == 'notifications'">
      <li v-for="(notification, index) in notifications" :key="index" class="notifications-not-read">
        <a href="">
          <span class="notification-icon"><i class="icon-material-outline-group"></i></span>
          <span class="notification-text">
				<strong>{{ notification.name }}</strong> applied for a job <span
              class="color">Full Stack Software Engineer</span></span>
        </a>
      </li>
    </template>
    <template v-else>
      <li class="notifications-not-read">
        <a href="dashboard-messages.html">
                              <span class="notification-avatar status-online"><img src="images/user-avatar-small-03.jpg"
                                                                                   alt=""></span>
          <div class="notification-text">
            <strong>David Peterson</strong>
            <p class="notification-msg-text">Thanks for reaching out. I'm quite busy right now on
              many...</p>
            <span class="color">4 hours ago</span>
          </div>
        </a>
      </li>
    </template>

  </ul>
</template>

<script>
export default {
  name: 'notifications',
  data() {
    return {}
  },
  props: ['notifications', 'type'],
  mounted() {
    console.log(this.notifications);
    console.log(this.type);
  }
}
</script>

<style scoped>

</style>