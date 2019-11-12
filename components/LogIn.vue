<template>
  <div>
    <!-- Titlebar
    ==================================================-->
    <div id="titlebar" class="gradient" v-if="false">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2>Log In</h2>

            <!-- Breadcrumbs -->
            <nav id="breadcrumbs" class="dark">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>Log In</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-5 offset-xl-3">
          <div class="login-register-page">
            <!-- Welcome Text -->
            <div class="welcome-text">
              <h3>We're glad to see you again!</h3>
              <span>
                Don't have an account?
                <a href="register">Sign Up!</a>
              </span>
            </div>

            <!-- Form -->
            <form method="post" id="login-form" @submit.prevent="logIn">
              <div class="input-with-icon-left">
                <i class="icon-material-baseline-mail-outline"></i>
                <input
                  type="text"
                  class="input-text with-border"
                  name="email"
                  id="email"
                  v-model="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div class="input-with-icon-left">
                <i class="icon-material-outline-lock"></i>
                <input
                  type="password"
                  class="input-text with-border"
                  name="password"
                  id="password"
                  v-model="password"
                  placeholder="Password"
                  required
                />
              </div>
              <a href="#" class="forgot-password">Forgot Password?</a>
            </form>

            <!-- Button -->
            <button
              class="button full-width button-sliding-icon ripple-effect margin-top-10"
              type="submit"
              form="login-form"
            >
              Log In
              <i class="icon-material-outline-arrow-right-alt"></i>
            </button>

            <!-- Social Login -->
            <div class="social-login-separator">
              <span>or</span>
            </div>
            <div class="social-login-buttons">
              <button
                class="facebook-login ripple-effect"
                target="_blank"
                @click.prevent="facebookLogIn"
              >
                <i class="icon-brand-facebook-f"></i> Log In via Facebook
              </button>
              <button
                class="google-login ripple-effect"
                target="_blank"
                @click.prevent="googleLogIn"
              >
                <i class="icon-brand-google-plus-g"></i> Log In via Google+
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spacer -->
    <div class="margin-top-70"></div>
    <!-- Spacer / End-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      socialLogin: false,
      name: ""
    };
  },
  methods: {
    logIn(evt) {
      const credentials = {
        email: this.email,
        password: this.password,
        socialLogin: this.socialLogin,
        name: this.name
      };
      try {
        this.$auth
          .loginWith("local", {
            data: { user: credentials }
          })
          .then(() => {
            this.$toast.success("Logged In!");
          })
          .catch(e => {
            this.$toast.error(e);
          });
      } catch (e) {
        this.$router.push("/login");
      }
    },

    googleLogIn() {
      try {
        this.$auth
          .loginWith("google")
          .then(() => {
            this.$toast.success("Logged In!");
          })
          .catch(e => {
            this.$toast.error(e);
          });
      } catch (e) {
        this.$router.push("/login");
      }
    },
    facebookLogIn() {
      // try {
      //   this.$auth
      //     .loginWith("facebook")
      //     .then(() => {
      //       this.$toast.success("Logged In!");
      //     })
      //     .catch(e => {
      //       this.$toast.error(e);
      //     });
      // } catch (e) {
      //   this.$router.push("/login");
      // }
      FB.login(
        function(response) {
          if (response.status === "connected") {
            getFacebookUser();
          } else if (response.status === "not_authorized") {
            {
              alert("Failed to log in user with facebook!");
              $("#uploadGif").css("display", "none");
            }
          } else {
            {
              alert("Failed to log in user with facebook!");
              $("#uploadGif").css("display", "none");
            }
          }
        },
        { scope: "public_profile,email" }
      );
    },
    getFacebookUser() {
      FB.api(
        "/me",
        "GET",
        { fields: "id,name,birthday,email,about,cover" },
        function(response) {
          this.email = response.email;
          this.name = response.name;
          this.socialLogin = true;
          this.logIn();
        }
      );
    }
  }
};

window.fbAsyncInit = function() {
  FB.init({
    appId: "836797929683024",
    xfbml: true, // parse social plugins on this page
    version: "v3.3" // use version 2.0
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
</script>