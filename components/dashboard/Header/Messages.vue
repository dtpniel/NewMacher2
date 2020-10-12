<template>
    <div class="header-notifications">
      <div class="header-notifications-trigger">
        <a href="#"><i class="icon-feather-mail"></i><span>3</span></a>
      </div>
      <!-- Dropdown -->
      <div class="header-notifications-dropdown">
        <div class="header-notifications-headline">
          <h4>Messages</h4>
          <button class="mark-as-read ripple-effect-dark" data-tippy-placement="left" data-tippy=""
                  data-original-title="Mark all as read">
            <i class="icon-feather-check-square"></i>
          </button>
        </div>

        <div class="header-notifications-content">
          <div class="header-notifications-scroll" data-simplebar="init" style="height: 288px;">
            <div class="simplebar-track vertical" style="visibility: visible;">
              <div class="simplebar-scrollbar" style="visibility: visible; top: 0px; height: 183px;"></div>
            </div>
            <div class="simplebar-track horizontal" style="visibility: visible;">
              <div class="simplebar-scrollbar" style="visibility: visible; left: 0px; width: 25px;"></div>
            </div>
            <div class="simplebar-scroll-content" style="padding-right: 15px; margin-bottom: -30px;">
              <div class="simplebar-content" style="padding-bottom: 15px; margin-right: -15px;">
                <ul>
                  <!-- Notification -->
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

                  <!-- Notification -->
                  <li class="notifications-not-read">
                    <a href="dashboard-messages.html">
                              <span class="notification-avatar status-offline"><img
                                  src="images/user-avatar-small-02.jpg" alt=""></span>
                      <div class="notification-text">
                        <strong>Sindy Forest</strong>
                        <p class="notification-msg-text">Hi Tom! Hate to break it to you, but I'm actually on
                          vacation until...</p>
                        <span class="color">Yesterday</span>
                      </div>
                    </a>
                  </li>

                  <!-- Notification -->
                  <li class="notifications-not-read">
                    <a href="dashboard-messages.html">
                              <span class="notification-avatar status-online"><img
                                  src="images/user-avatar-placeholder.png" alt=""></span>
                      <div class="notification-text">
                        <strong>Marcin Kowalski</strong>
                        <p class="notification-msg-text">I received payment. Thanks for cooperation!</p>
                        <span class="color">Yesterday</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <a href="dashboard-messages.html" class="header-notifications-button ripple-effect button-sliding-icon">View
          All Messages<i class="icon-material-outline-arrow-right-alt"></i></a>
      </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>