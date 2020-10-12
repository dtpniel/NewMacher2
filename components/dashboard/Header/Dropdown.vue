<template>
  <div class="header-notifications"
       :class="{active: isActive}"
  >
    <!-- Trigger -->
    <div class="header-notifications-trigger">
      <a href="#" @click.prevent="toggleDropdown">
        <i :class="icon"></i><span>{{ content.length }}</span>
      </a>
    </div>
    <!-- Dropdown -->
    <div class="header-notifications-dropdown">
      <div class="header-notifications-headline">
        <h4>{{ title }}</h4>
        <button class="mark-as-read ripple-effect-dark" title="Mark all as read" data-tippy-placement="left">
          <i class="icon-feather-check-square"></i>
        </button>
      </div>
      <div class="header-notifications-content">
        <div class="header-notifications-scroll" data-simplebar>
          <ul>
            <!-- Notification -->
            <template v-if="type === 'notifications'">
              <li v-for="(notification, index) in content" :key="index" class="notifications-not-read">
                <a href="">
                  <span class="notification-icon"><i class="icon-material-outline-group"></i></span>
                  <span class="notification-text">
				           <strong>{{ notification.name }}</strong> applied for a job <span
                      class="color">Full Stack Software Engineer</span></span>
                </a>
              </li>
            </template>
            <template v-else>
              <li v-for="(message, messageIndex) in content" :key="messageIndex" class="notifications-not-read">
                <a href="#">
                <span class="notification-avatar status-online">
                  <img :src="message.avatar"/>
                </span>
                  <div class="notification-text">
                    <strong>{{ message.name }}</strong>
                    <p class="notification-msg-text">{{ message.text }}</p>
                    <span class="color">4 hours ago</span>
                  </div>
                </a>
              </li>
            </template>
          </ul>


        </div>
      </div>

    </div>
    <!-- Dropdown -->
  </div>
</template>

<script>
import Notifications from '~/components/dashboard/Header/Notifications';

export default {
  name: 'dropdown',
  components: {
    Notifications
  },
  props: ['type', 'icon', 'title', 'content'],
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleDropdown(e) {
      this.isActive = !this.isActive
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isActive = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.close);
    console.log(this.content);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close)
  }
}
</script>

<style scoped>

</style>