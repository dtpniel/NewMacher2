<template>
    <!-- Wrapper -->
    <div id="wrapper">
        <!-- Header Container
        ==================================================-->
        <header class="fullwidth" id="header-container">
            <!-- Header -->
            <div id="header">
                <div class="container">
                    <!-- Left Side Content -->
                    <div class="left-side">
                        <!-- Logo -->
                        <div id="logo">
                            <a href="/">
                                <img alt src="images/newlogo.png"/>
                            </a>
                        </div>

                        <!-- Main Navigation -->
                        <nav id="navigation">
                            <ul id="responsive">
                                <li v-for="navItem in navigationMenu">
                                    <a :href="navItem.route">{{navItem.label}}</a>
                                    <ul class="dropdown-nav" v-if="navItem.children">
                                        <li v-for="child in navItem.children">
                                            <a :href="child.route">{{child.label}}</a>
                                            <ul class="dropdown-nav" v-if="child.children">
                                                <li v-for="ch in child.children">
                                                    <a :href="ch.route">{{ch.label}}</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <!-- Main Navigation / End -->
                    </div>
                    <!-- Left Side Content / End -->

                    <!-- Right Side Content / Start / Authenticated -->
                    <div class="right-side" v-if="isAuthenticated">
                        <!--  User Notifications -->
                        <div class="header-widget hide-on-mobile">
                            <!-- Notifications -->
                            <div class="header-notifications">
                                <!-- Trigger -->
                                <div class="header-notifications-trigger">
                                    <a href="#">
                                        <i class="icon-feather-bell"></i>
                                        <span>4</span>
                                    </a>
                                </div>

                                <!-- Dropdown -->
                                <div class="header-notifications-dropdown">
                                    <div class="header-notifications-headline">
                                        <h4>Notifications</h4>
                                        <button class="mark-as-read ripple-effect-dark"
                                                data-tippy-placement="left"
                                                title="Mark all as read">
                                            <i class="icon-feather-check-square"></i>
                                        </button>
                                    </div>

                                    <div class="header-notifications-content">
                                        <div class="header-notifications-scroll" data-simplebar>
                                            <ul>
                                                <!-- Notification -->
                                                <li :class="{'notifications-not-read': !notification.read}"
                                                    v-for="notification in notificationMenu">
                                                    <a :href="notification.route">
                                                        <span class="notification-icon">
                                                          <i :class="notification.icon"></i>
                                                        </span>
                                                        <span class="notification-text">
                                                          <strong>{{notification.name}}</strong>
                                                            {{notification.beforeMsg}}
                                                          <span class="color">{{notification.colorText}}</span>
                                                            {{notification.afterMsg}}
                                                        </span>
                                                    </a>
                                                </li>
                                                <!-- Notification End -->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Messages -->
                            <div class="header-notifications">
                                <div class="header-notifications-trigger">
                                    <a href="#">
                                        <i class="icon-feather-mail"></i>
                                        <span>3</span>
                                    </a>
                                </div>

                                <!-- Dropdown -->
                                <div class="header-notifications-dropdown">
                                    <div class="header-notifications-headline">
                                        <h4>Messages</h4>
                                        <button class="mark-as-read ripple-effect-dark"
                                                data-tippy-placement="left"
                                                title="Mark all as read">
                                            <i class="icon-feather-check-square"></i>
                                        </button>
                                    </div>

                                    <div class="header-notifications-content">
                                        <div class="header-notifications-scroll" data-simplebar>
                                            <ul>
                                                <!-- Notification -->
                                                <li :class="{'notifications-not-read': message.read}"
                                                    v-for="message in notificationMessages">
                                                    <a :href="message.route">
                                                        <span :class="{'status-online': message.online}"
                                                              class="notification-avatar">
                                                          <img :src="message.avatarUrl" alt/>
                                                        </span>
                                                        <div class="notification-text">
                                                            <strong>{{message.author}}</strong>
                                                            <p class="notification-msg-text">
                                                                {{message.msgText}}
                                                            </p>
                                                            <span class="color">{{message.time}}</span>
                                                        </div>
                                                    </a>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>

                                    <a class="header-notifications-button ripple-effect button-sliding-icon"
                                       href="dashboard-messages.html">
                                        View All Messages
                                        <i class="icon-material-outline-arrow-right-alt"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <!--  User Notifications / End -->

                        <!-- User Menu -->
                        <div class="header-widget">
                            <!-- Messages -->
                            <div class="header-notifications user-menu">
                                <div class="header-notifications-trigger">
                                    <a href="#">
                                        <div class="user-avatar status-online">
                                            <img alt src="images/user-avatar-small-01.jpg"/>
                                        </div>
                                    </a>
                                </div>

                                <!-- Dropdown -->
                                <div class="header-notifications-dropdown">
                                    <!-- User Status -->
                                    <div class="user-status">
                                        <!-- User Name / Avatar -->
                                        <div class="user-details">
                                            <div class="user-avatar status-online">
                                                <img alt src="images/user-avatar-small-01.jpg"/>
                                            </div>
                                            <div class="user-name">
                                                Tom Smith
                                                <span>Freelancer</span>
                                            </div>
                                        </div>

                                        <!-- User Status Switcher -->
                                        <div class="status-switch" id="snackbar-user-status">
                                            <label class="user-online current-status">Online</label>
                                            <label class="user-invisible">Invisible</label>
                                            <!-- Status Indicator -->
                                            <span aria-hidden="true" class="status-indicator"></span>
                                        </div>
                                    </div>

                                    <ul class="user-menu-small-nav">
                                        <li>
                                            <a href="dashboard.html">
                                                <i class="icon-material-outline-dashboard"></i> Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-settings.html">
                                                <i class="icon-material-outline-settings"></i> Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a href="index-logged-out.html">
                                                <i class="icon-material-outline-power-settings-new"></i> Logout
                                            </a>
                                        </li>
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

                    <!-- Right Side Content / Start / Not Authenticated-->
                    <div class="right-side" v-if="!isAuthenticated">
                        <div class="header-widget">
                            <a class="popup-with-zoom-anim log-in-button" href="login">
                                <i class="icon-feather-log-in"></i>
                                <span>Log In / Register</span>
                            </a>
                        </div>

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
        </header>
        <!-- Header Container / End -->

        <!-- Page Content
        ==================================================-->
        <search v-if="!isHomePage()"/>
        <top-banners v-if="!isHomePage() && !$store.getters.isMobile"/>
        <nuxt/>

        <!-- Footer
        ==================================================-->
        <div id="footer">
            <!-- Footer Top Section -->
            <div class="footer-top-section">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <!-- Footer Rows Container -->
                            <div class="footer-rows-container">
                                <!-- Left Side -->
                                <div class="footer-rows-left">
                                    <div class="footer-row">
                                        <div class="footer-row-inner footer-logo">
                                            <img alt src="images/logo2.png"/>
                                        </div>
                                    </div>
                                </div>

                                <!-- Right Side -->
                                <div class="footer-rows-right">
                                    <!-- Social Icons -->
                                    <div class="footer-row">
                                        <div class="footer-row-inner">
                                            <ul class="footer-social-links">
                                                <li>
                                                    <a
                                                            data-tippy-placement="bottom"
                                                            data-tippy-theme="light"
                                                            href="#"
                                                            title="Facebook"
                                                    >
                                                        <i class="icon-brand-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                            data-tippy-placement="bottom"
                                                            data-tippy-theme="light"
                                                            href="#"
                                                            title="Twitter"
                                                    >
                                                        <i class="icon-brand-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                            data-tippy-placement="bottom"
                                                            data-tippy-theme="light"
                                                            href="#"
                                                            title="Google Plus"
                                                    >
                                                        <i class="icon-brand-google-plus-g"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                            data-tippy-placement="bottom"
                                                            data-tippy-theme="light"
                                                            href="#"
                                                            title="LinkedIn"
                                                    >
                                                        <i class="icon-brand-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>

                                    <!-- Language Switcher -->
                                    <div class="footer-row">
                                        <div class="footer-row-inner">
                                            <select
                                                    class="selectpicker language-switcher"
                                                    data-selected-text-format="count"
                                                    data-size="5"
                                            >
                                                <option selected>English</option>
                                                <option>Français</option>
                                                <option>Español</option>
                                                <option>Deutsch</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Footer Rows Container / End -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Top Section / End -->

            <!-- Footer Middle Section -->
            <div class="footer-middle-section">
                <div class="container">
                    <div class="row">
                        <!-- Links -->
                        <div class="col-xl-2 col-lg-2 col-md-3">
                            <div class="footer-links">
                                <h3>For Candidates</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span>Browse Jobs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Add Resume</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Job Alerts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>My Bookmarks</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Links -->
                        <div class="col-xl-2 col-lg-2 col-md-3">
                            <div class="footer-links">
                                <h3>For Employers</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span>Browse Candidates</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Post a Job</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Post a Task</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Plans & Pricing</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Links -->
                        <div class="col-xl-2 col-lg-2 col-md-3">
                            <div class="footer-links">
                                <h3>Helpful Links</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span>Contact</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Privacy Policy</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>Terms of Use</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Links -->
                        <div class="col-xl-2 col-lg-2 col-md-3">
                            <div class="footer-links">
                                <h3>Account</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <span>Log In</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>My Account</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Newsletter -->
                        <div class="col-xl-4 col-lg-4 col-md-12">
                            <h3>
                                <i class="icon-feather-mail"></i> Sign Up For a Newsletter
                            </h3>
                            <p>Weekly breaking news, analysis and cutting edge advices on job searching.</p>
                            <form action="#" class="newsletter" method="get">
                                <input name="fname" placeholder="Enter your email address" type="text"/>
                                <button type="submit">
                                    <i class="icon-feather-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Middle Section / End -->

            <!-- Footer Copyrights -->
            <div class="footer-bottom-section">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            © 2019
                            <strong>Macher USA</strong>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Copyrights / End -->
        </div>
        <!-- Footer / End -->
    </div>
    <!-- Wrapper / End -->
</template>
<script>
    import TopBanners   from "~/components/TopBanners";
    import Search       from "~/components/Search";
    import {mapGetters} from "vuex";

    export default {
        components: {
            TopBanners,
            Search
        },
        computed: {
            ...mapGetters(["isAuthenticated", "loggedInUser"]),
            navigationMenu() {
                return [
                    {
                        label: 'Home',
                        route: '',
                        children: [
                            {
                                label: 'Home 1',
                                route: ''
                            },
                            {
                                label: 'Home 2',
                                route: ''
                            },
                            {
                                label: 'Home 3',
                                route: ''
                            }
                        ]
                    },
                    {
                        label: 'Find Work',
                        route: '',
                        children: [
                            {
                                label: 'Browse Jobs',
                                route: '',
                                children: [
                                    {
                                        label: 'Full page list + Map',
                                        route: ''
                                    },
                                    {
                                        label: 'Full page grid + Map',
                                        route: ''
                                    },
                                    {
                                        label: 'Full page grid',
                                        route: ''
                                    },
                                    {
                                        label: 'List layout 1',
                                        route: ''
                                    },
                                    {
                                        label: 'List layout 2',
                                        route: ''
                                    },
                                    {
                                        label: 'Grid',
                                        route: ''
                                    }
                                ]
                            },
                            {
                                label: 'Browse Task',
                                route: '',
                                children: [
                                    {
                                        label: 'List layout 1',
                                        route: ''
                                    },
                                    {
                                        label: 'List layout 2',
                                        route: ''
                                    },
                                    {
                                        label: 'Full page grid',
                                        route: ''
                                    },
                                    {
                                        label: 'Grid',
                                        route: ''
                                    }
                                ]
                            },
                            {
                                label: 'Browse company',
                                route: ''
                            },
                            {
                                label: 'Job page',
                                route: ''
                            },
                            {
                                label: 'Tasks page',
                                route: ''
                            },
                            {
                                label: 'Company profile',
                                route: ''
                            }
                        ]
                    },
                    {
                        label: 'For Employers',
                        route: '',
                        children: [
                            {
                                label: 'Find a freelancer',
                                route: '',
                                children: [
                                    {
                                        label: 'Full page grid',
                                        route: ''
                                    },
                                    {
                                        label: 'Grid layout',
                                        route: ''
                                    },
                                    {
                                        label: 'List layout 1',
                                        route: ''
                                    },
                                    {
                                        label: 'List layout 2',
                                        route: ''
                                    }
                                ]
                            },
                            {
                                label: 'Freelancer profile',
                                route: ''
                            },
                            {
                                label: 'Post a job',
                                route: ''
                            },
                            {
                                label: 'Post a task',
                                route: ''
                            }
                        ]
                    },
                    {
                        label: 'Dashboard',
                        route: '',
                        children: [
                            {
                                label: 'Dashboard',
                                route: ''
                            },
                            {
                                label: 'Messages',
                                route: ''
                            },
                            {
                                label: 'Bookmarks',
                                route: ''
                            },
                            {
                                label: 'Reviews',
                                route: ''
                            },
                            {
                                label: 'Jobs',
                                route: '',
                                children: [
                                    {
                                        label: 'Mange Jobs',
                                        route: '',
                                    },
                                    {
                                        label: 'Mange candidates',
                                        route: '',
                                    },
                                    {
                                        label: 'Post a job',
                                        route: '',
                                    }
                                ]
                            },
                            {
                                label: 'Tasks',
                                route: '',
                                children: [
                                    {
                                        label: 'Mange Tasks',
                                        route: '',
                                    },
                                    {
                                        label: 'Mange Bidders',
                                        route: '',
                                    },
                                    {
                                        label: 'My active bid',
                                        route: '',
                                    },
                                    {
                                        label: 'Post a task',
                                        route: '',
                                    }
                                ]
                            },
                            {
                                label: 'Settings',
                                route: ''
                            }
                        ]
                    },
                    {
                        label: 'Pages',
                        route: '',
                        children: [
                            {
                                label: 'Blog',
                                route: ''
                            },
                            {
                                label: 'Pricing plan',
                                route: ''
                            },
                            {
                                label: 'Checkout page',
                                route: ''
                            },
                            {
                                label: 'Invoice template',
                                route: ''
                            },
                            {
                                label: 'User interface elements',
                                route: ''
                            },
                            {
                                label: 'Icons cheatsheet',
                                route: ''
                            },
                            {
                                label: 'Login and Register',
                                route: ''
                            },
                            {
                                label: '404 Page',
                                route: ''
                            },
                            {
                                label: 'Contact',
                                route: ''
                            }
                        ]
                    }
                ]
            },
            notificationMenu() {
                return [
                    {
                        read: true,
                        icon: 'icon-material-outline-group',
                        name: 'Michael Shannah',
                        colorText: 'Full Stack Software Engineer',
                        beforeMsg: 'applied for a job',
                        afterMsg: '',
                        route: ''
                    },
                    {
                        read: true,
                        icon: 'icon-material-outline-gavel',
                        name: 'Gilbert Allanis',
                        colorText: 'iOS App Development',
                        beforeMsg: 'placed a bid on your',
                        afterMsg: 'project.',
                        route: ''
                    },
                    {
                        read: true,
                        icon: 'icon-material-outline-autorenew',
                        name: '',
                        colorText: 'Full Stack PHP Developer',
                        beforeMsg: 'Your job listing',
                        afterMsg: 'is expiring.',
                        route: ''
                    },
                    {
                        read: true,
                        icon: 'icon-material-outline-group',
                        name: 'Sindy Forrest',
                        colorText: 'Full Stack Software Engineer',
                        beforeMsg: 'applied for a job',
                        afterMsg: '',
                        route: ''
                    }
                ]
            },
            notificationMessages() {
                return [
                    {
                        read: false,
                        route: '',
                        online: true,
                        avatarUrl: 'images/user-avatar-small-03.jpg',
                        author: 'David Peterson',
                        msgText: 'Thanks for reaching out. I am quite busy right now on many...',
                        time: '4 hours ago'
                    },
                    {
                        read: false,
                        route: '',
                        online: true,
                        avatarUrl: 'images/user-avatar-small-02.jpg',
                        author: 'Sindy Forest',
                        msgText: 'Hi Tom! Hate to break it to you, but I am actually on vacation until...',
                        time: 'Yesterday'
                    },
                    {
                        read: false,
                        route: '',
                        online: false,
                        avatarUrl: 'images/user-avatar-placeholder.png',
                        author: 'Marcin Kowalski',
                        msgText: 'I received payment. Thanks for cooperation!',
                        time: 'Yesterday'
                    }
                ]
            }
        },
        mounted() {
            if (process.browser) {
                initialCustom();
            }
        }
    };
</script>
