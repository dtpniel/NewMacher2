export default {
  toastConfig: {
    action: {
      text: 'Dismiss',
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      }
    },

    position: 'top-center',
    iconPack: 'material',
    closeOnSwipe: true,
    register: [ // Register custom toasts
      {
        name: "userexist",
        message: "It seems like you have an account.",
        options: {
          type: 'info',
          action: [
            {
              text: "Dismiss",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
            {
              text: "Login",
              href: "/login",
            },
          ],
        }
      }
      ,
      {
        name: "incorrectpassword",
        message: "User or passwrods are incorrect.",
        options: {
          type: 'error',
          action: [
            {
              text: "Dismiss",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
            {
              text: "Forgot your password?",
              href: "/password",
            },
          ],
        }
      },
      {
        name: "loginsuccessful",
        message: "Successfully Logged In",
        options: {
          type: 'success',
          action: [
            {
              text: "Dismiss",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            }
          ],
        }
      }
      ,
      {
        name: "registersuccessful",
        message: "Your account was successfully created!",
        options: {
          type: 'success',
          action: [
            {
              text: "Dismiss",
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
            {
              text: "Login",
              href: "/login",
            }
          ],
        }
      }
      ,

    ]
  }
}
