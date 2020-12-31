<template>
  <div>
    <!-- Page Content
    ==================================================-->
    <div class="container">
      <div class="row">
        <div class="col-xl-5 offset-xl-3">
          <div class="login-register-page">
            <Notification :message="error" v-if="error" />

            <!-- Welcome Text -->
            <div class="welcome-text">
              <h3 style="font-size: 26px">Let's create your account!</h3>
              <span>
                Already have an account?
                <a href="login">Log In!</a>
              </span>
            </div>
            <!-- Account Type
            <div class="account-type">
              <div>
                <input
                  type="radio"
                  name="account-type-radio"
                  id="freelancer-radio"
                  @change="type=0"
                  class="account-type-radio"
                  checked
                />
                <label for="freelancer-radio" class="ripple-effect-dark">
                  <i class="icon-material-outline-account-circle"></i> Candidate
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="account-type-radio"
                  id="employer-radio"
                  @change="type=1"
                  class="account-type-radio"
                />
                <label for="employer-radio" class="ripple-effect-dark">
                  <i class="icon-material-outline-business-center"></i> Employer
                </label>
              </div>
            </div> -->

            <!-- Form -->
            <form
              method="post"
              @submit.prevent="register"
              id="register-account-form"
            >
              <div class="input-with-icon-left">
                <i class="icon-material-baseline-mail-outline"></i>
                <input
                  type="text"
                  class="input-text with-border"
                  name="name"
                  id="name"
                  v-model="$v.name.$model"
                  placeholder="Your name"
                />
              </div>
              <p class="text-danger" v-if="$v.name.$dirty && !$v.name.required">
                Name is required.
              </p>

              <div class="input-with-icon-left">
                <i class="icon-material-baseline-mail-outline"></i>
                <input
                  type="text"
                  class="input-text with-border"
                  name="email"
                  id="email"
                  v-model.trim="$v.email.$model"
                  placeholder="Email Address"
                />
              </div>
              <p
                class="text-danger"
                v-if="$v.email.$dirty && !$v.email.required"
              >
                Email is required.
              </p>
              <p class="text-danger" v-if="$v.email.$dirty && !$v.email.email">
                Please enter a valid email.
              </p>
              <div
                class="input-with-icon-left"
                title="Should be at least 8 characters long"
                data-tippy-placement="bottom"
              >
                <i class="icon-material-outline-lock"></i>

                <!-- <input
                  type="password"
                  class="input-text with-border"
                  name="password"
                  id="password"
                  v-model="password"
                  placeholder="Password"
                /> -->

                <password
                  v-model.trim="$v.password.$model"
                  type="password"
                  name="password"
                  id="password"
                  :secureLength="8"
                  placeholder="Password"
                />
              </div>
              <p
                class="text-danger"
                v-if="$v.password.$dirty && !$v.password.required"
              >
                Password is required.
              </p>
              <p
                class="text-danger"
                v-if="$v.password.$dirty && !$v.password.strongPassword"
              >
                Password must contain at least 7 digits and 1 character.
              </p>

              <div class="input-with-icon-left">
                <i class="icon-material-outline-lock"></i>
                <input
                  type="password"
                  class="input-text with-border"
                  name="confirmPassword"
                  id="confirmPassword"
                  v-model.trim="$v.confirmPassword.$model"
                  placeholder="Repeat Password"
                />
              </div>
              <p
                class="text-danger"
                v-if="$v.confirmPassword.$dirty && !$v.password.required"
              >
                Password is required.
              </p>
              <p
                class="text-danger"
                v-if="$v.confirmPassword.$dirty && !$v.confirmPassword.sameAs"
              >
                Passwords must be identical
              </p>
            </form>

            <!-- Button -->
            <button
              class="button full-width button-sliding-icon ripple-effect margin-top-10"
              type="submit"
              form="register-account-form"
            >
              Register
              <i class="icon-material-outline-arrow-right-alt"></i>
            </button>

            <!-- Social Login -->
            <!-- <div class="social-login-separator">
              <span>or</span>
            </div>
            <div class="social-login-buttons">
              <button class="facebook-login ripple-effect">
                <i class="icon-brand-facebook-f"></i> Register via Facebook
              </button>
              <button class="google-login ripple-effect">
                <i class="icon-brand-google-plus-g"></i> Register via Google+
              </button>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Spacer -->
    <div class="margin-top-70"></div>
    <!-- Spacer / End-->
  </div>
</template>
<style>
.Password__group {
  position: inherit !important;
}
.Password {
  max-width: 480px !important;
  margin: 0 auto;
}

.Password__field {
  padding-left: 65px !important;
  border: 1px solid #e0e0e0 !important;
}
</style>

<script>
import Password from "vue-password-strength-meter";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  components: { Password },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",

      socialLogin: false,
      //  type: 0,
      error: null,
    };
  },
  validations: {
    name: { required },
    email: { required, email },
    password: {
      required,
      strongPassword(password) {
        return (
          /[a-z]/.test(password) && // checks for a-z
          /[0-9]/.test(password) && // checks for 0-9
          password.length >= 8
        );
      },
    },
    confirmPassword: {
      required,
      sameAs: sameAs("password"),
    },
  },

  methods: {
    register: function () {
      this.$v.$touch();
      if (this.$v.$error) {
        console.log($v);
        return;
      }

      this.doRegister();
      console.log({ name: this.name, email: this.email });
    },

    async doRegister() {
      var self = this;
      
        try {
          this.$axios
            .post("/auth/user/register", {
              user: {
                email: this.email,
                password: this.password,
                name: this.name,
                // type: this.type,
              },
            })
            .then((response) => {
              if (response.data.userId) {
                self.$toasted.global.userexist();
                console.log("User is already registred");
              } else {
                self.$toasted.global.registersuccessful();
              }

              //this.$router.push("/");
            });
        } catch (e) {
          this.error = e.response
            ? e.response.data.message
            : "Error while register";
        }
    },
  },
};
</script>