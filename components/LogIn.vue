<template>
    <div class="login-container">
        <a-row>
            <a-col :offset="8" :span="8">
                <div class="title">
                    We're glad to see you again!
                </div>
                <div class="sub-title">
                    Don't have an account? <a href="/user/register">Sign Up!</a>
                </div>
                <a-form>
                    <a-form-item>
                        <a-input placeholder="Email address">
                            <a-icon slot="prefix" style="color: rgba(0,0,0,.25)" type="user"/>
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input placeholder="Password" type="password">
                            <a-icon slot="prefix" style="color: rgba(0,0,0,.25)" type="lock"/>
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a class="login-form-forgot" href="#">Forgot Password?</a>
                    </a-form-item>
                    <a-form-item>
                        <a-row class="login">
                            <a-button class="login-form-button" html-type="submit" size="large" type="primary">
                                Log in
                            </a-button>
                        </a-row>
                    </a-form-item>
                    <a-form-item class="social-login">
                        <a-row :gutter="8">
                            <a-col :span="12">
                                <a-button class="login-form-button" ghost html-type="submit" size="large"
                                          type="primary">
                                    Log in via facebook
                                </a-button>
                            </a-col>
                            <a-col :span="12">
                                <a-button class="login-form-button" ghost html-type="submit" size="large"
                                          type="danger">
                                    Log in via google+
                                </a-button>
                            </a-col>
                        </a-row>
                    </a-form-item>
                </a-form>
            </a-col>
        </a-row>
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
                            data: {user: credentials},
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
                    {scope: "public_profile,email"}
                );
            },
            loginLocalFacebookUser() {
                var self = this;
                FB.api(
                    "/me",
                    "GET",
                    {fields: "id,name,birthday,email,about,cover"},
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

<style scoped>
    .title {
        display: flex;
        justify-content: center;
        font-size: 1.7rem;
        font-weight: 700;
        letter-spacing: 1px;
        color: #0d0d0d;
    }

    .sub-title {
        display: flex;
        justify-content: center;
        margin: 1rem 0;
    }

    .sub-title a {
        margin-left: 5px;
    }

    .login .login-form-button {
        width: 100%;
    }

    .social-login .login-form-button {
        width: 100%;
    }
</style>
<style>
    .login-container .ant-input {
        margin: 0;
    }
</style>
