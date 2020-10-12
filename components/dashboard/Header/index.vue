<!-- * ========
*
*  Header.vue
*
* ========= *-->
<template xmlns="">
  <!-- Header -->
  <div id="header">
    <div class="container">
      <!-- Left Side Content -->
      <div class="left-side">
        <!-- Logo -->
        <Logo/>
        <!-- Logo -->
        <!-- Main Navigation -->
        <nav id="navigation">
          <ul id="responsive">
            <li><a href="/">Home</a></li>
            <li><a href="#">Find Work</a></li>
            <li><a href="#">For Employers</a></li>
            <li><a href="#" class="current">Dashboard</a></li>
          </ul>
        </nav>
        <div class="clearfix"></div>
        <!-- Main Navigation / End -->
      </div>
      <!-- Left Side Content / End -->
      <!-- Right Side Content / End -->
      <div class="right-side">
        <!--  User Notifications -->
        <div class="header-widget hide-on-mobile" data-chking="yes">
          <!-- Notifications -->
          <div class="header-notifications">
            <dropdown
                :type="notifications.type"
                :icon="notifications.icon"
                :content="notifications.content"
                :count="notifications.count"
                :title="notifications.title"/>
          </div>
          <!-- Notifications -->
          <!-- Messages -->
          <div class="header-notifications">
            <dropdown
                :type="messages.type"
                :icon="messages.icon"
                :content="messages.content"
                :count="messages.count"
                :title="messages.title"/>
          </div>
          <!-- Messages -->
        </div>
        <!--  User Notifications / End -->
        <!-- User Menu -->
        <div class="header-widget">
          <!-- Messages -->
          <div class="header-notifications user-menu">
            <div class="header-notifications-trigger">
              <a href="#">
                <div class="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""></div>
              </a>
            </div>

            <!-- Dropdown -->
            <div class="header-notifications-dropdown">

              <!-- User Status -->
              <div class="user-status">

                <!-- User Name / Avatar -->
                <div class="user-details">
                  <div class="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt=""></div>
                  <div class="user-name">
                    Tom Smith <span>Freelancer</span>
                  </div>
                </div>

                <!-- User Status Switcher -->
                <div class="status-switch" id="snackbar-user-status">
                  <label class="user-online current-status">Online</label>
                  <label class="user-invisible">Invisible</label>
                  <!-- Status Indicator -->
                  <span class="status-indicator" aria-hidden="true"></span>
                </div>
              </div>

              <ul class="user-menu-small-nav">
                <li><a href="dashboard.html"><i class="icon-material-outline-dashboard"></i> Dashboard</a></li>
                <li><a href="dashboard-settings.html"><i class="icon-material-outline-settings"></i> Settings</a></li>
                <li><a href="index-logged-out.html"><i class="icon-material-outline-power-settings-new"></i>
                  Logout</a></li>
              </ul>

            </div>
          </div>
        </div>
        <!-- User Menu / End -->
        <!-- Mobile Navigation Button -->
        <span class="mmenu-trigger">
					<button class="hamburger hamburger--collapse" type="button">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</button>
				</span>
      </div>
      <!-- Right Side Content / End -->
    </div>
  </div>
  <!-- Header / End -->
</template>

<script>

import Logo from '~/components/Logo';
import Messages from '~/components/dashboard/Header/Messages';
import Dropdown from '~/components/dashboard/Header/Dropdown';

export default {
  components: {
    Logo,
    Dropdown,
    Messages
  },
  data() {
    return {
      messages: {
        title: 'Message',
        icon: 'icon-feather-mail',
        type: 'message',
        content: [{
          avatar: 'images/user-avatar-small-03.jpg',
          name: ' Nitish',
          text: 'Thanks for reaching out. Im quite busy right now on many...'
        }]
      },
      notifications: {
        title: 'Notifications',
        icon: 'icon-feather-bell',
        type: 'notifications',
        content: [{
          avatar: 'images/user-avatar-small-03.jpg',
          name: ' Nitish',
          text: 'Thanks for reaching out. Im quite busy right now on many...'
        }, {
          avatar: 'images/user-avatar-small-03.jpg',
          name: ' Nitish',
          text: 'Thanks for reaching out. Im quite busy right now on many...'
        },
          {
            avatar: 'images/user-avatar-small-03.jpg',
            name: ' Nitish',
            text: 'Thanks for reaching out. Im quite busy right now on many...'
          }]
      },
    }
  }
}

</script>