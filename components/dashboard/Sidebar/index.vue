<!-- * ========
*
*  Sidebar.vue
*
* ========= *-->
<template>
  <div class="dashboard-sidebar">
    <div class="dashboard-sidebar-inner" data-simplebar="init">
      <div class="simplebar-scroll-content">
        <div class="simplebar-content" style="padding-bottom: 15px; margin-right: -15px;">
          <div class="dashboard-nav-container">
            <!-- Responsive Navigation Trigger -->
            <a href="#" class="dashboard-responsive-nav-trigger">
					<span class="hamburger hamburger--collapse">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</span>
              <span class="trigger-title">Dashboard Navigation</span>
            </a>
            <!-- Navigation -->
            <div class="dashboard-nav">
              <div class="dashboard-nav-inner">
                <ul data-submenu-title="Start">
                  <li class="active">
                    <n-link to="/dashboard"><i class="icon-material-outline-dashboard"></i> Dashboard</n-link>
                  </li>
                  <li>
                    <n-link to="/dashboard/bookmarks"><i class="icon-material-outline-star-border"></i> Bookmarks</n-link>
                  </li>
                  <li>
                    <n-link to="/dashboard/invoices"><i class="icon-feather-file"></i> Invoices</n-link>
                  </li>
                </ul>
                <ul data-submenu-title="My Jobs">
                  <li>
                    <n-link to="/dashboard/jobs"><i class="icon-line-awesome-list-ul"></i> Jobs</n-link>
                  </li>
                </ul>
                <ul data-submenu-title="Account">
                  <li>
                    <n-link to="/dashboard/account"><i class="icon-material-outline-settings"></i> Settings</n-link>
                  </li>
                  <li>
                    <n-link to="/about"><i class="icon-material-outline-power-settings-new"></i> Logout</n-link>
                  </li>
                </ul>

              </div>
            </div>
            <!-- Navigation / End -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>
