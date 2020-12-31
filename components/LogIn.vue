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
                <a href="/user/register">Sign Up!</a>
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
var auth2;
export default {
  data() {
    return {
      email: "",
      password: "",
      socialLogin: false,
      name: "",
    };
  },
  methods: {
    logIn(evt) {
      const credentials = {
        email: this.email,
        password: this.password,
        socialLogin: this.socialLogin,
        name: this.name,
      };
      try {
        var self = this;
        this.$auth
          .loginWith("local", {
            data: { user: credentials },
          })
          .then((data) => {
            if (this.$auth.loggedIn) {
              self.$toasted.global.loginsuccessful();
              console.log(this.$auth);
            } else {
              self.$toasted.global.incorrectpassword();
            }
          })
          .catch((e) => {
            if (e.response.data.indexOf("password") >= 0)
              self.$toasted.global.incorrectpassword();
          });
      } catch (e) {
        self.$router.push("/login");
      }
    },

    googleLogIn() {
      var self = this;
      // auth2.signIn().then(function(googleUser) {
      //   console.log(googleUser);
      // });
      auth2
        .signIn({
          scope: "profile email",
        })
        .then(
          function (googleUser) {
            var profile = googleUser.getBasicProfile();
            if (!profile) {
              alert("Failed to log in user with google!");
              return;
            }
            self.email = profile.getEmail();
            self.name = profile.getName();
            self.socialLogin = true;
            self.logIn();
          },
          function (error) {
            console.log("user failed to sign in");
          }
        );
    },
    facebookLogIn() {
      var self = this;
      FB.login(
        function (response) {
          if (response.status === "connected") {
            self.loginLocalFacebookUser();
          } else if (response.status === "not_authorized") {
            {
              alert("Failed to log in user with facebook!");
            }
          } else {
            {
              alert("Failed to log in user with facebook!");
            }
          }
        },
        { scope: "public_profile,email" }
      );
    },
    loginLocalFacebookUser() {
      var self = this;
      FB.api(
        "/me",
        "GET",
        { fields: "id,name,birthday,email,about,cover" },
        function (response) {
          self.email = response.email;
          self.name = response.name;
          self.socialLogin = true;
          self.logIn();
        }
      );
    },
  },
  head() {
    return {
      script: [
        {
          //src: "https://apis.google.com/js/platform.js"
          src: "https://apis.google.com/js/api:client.js",
        },
      ],
    };
  },
  mounted() {
    // Load the SDK asynchronously
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    window.fbAsyncInit = function () {
      FB.init({
        appId: "836797929683024",
        xfbml: true, // parse social plugins on this page
        version: "v3.3", // use version 2.0
      });
    };

    var clientId = "194392922882-jkdlkc4n44036jh97j2foatcaidh68of.apps.googleusercontent.com";

    gapi.load("auth2", function () {
      // Retriee the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: clientId,
      });
    });
  },
};
</script>
