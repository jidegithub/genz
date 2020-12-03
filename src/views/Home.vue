<template>
  <div class='login-cont'>
    <div class='login'>
      <h4 class='text-green'>{{ notificationMsg }}</h4>
      <form
        @submit.prevent='handleFormSubmit'
        action=''
        method='post'
        class='form'
      >
      <div class="brand"></div>
      <h2 class="">Sign into your account</h2>
        <label class="" for="email">Email Address</label>
        <div class='form__field'>
          <input
            type='email'
            placeholder='info@mailaddress.com'
            name='email'
            v-model='credential.email'
          />
        </div>

        <label class="" for="password">Password</label>
        <div class='form__field'>
          <input
            type='password'
            name='password'
            placeholder='password'
            v-model='credential.password'
          />
        </div>

        <div class='form__field'>
          <button class="primary" type="submit">
            <span>Login</span>
          </button>
        </div>

        <div class="social-container">
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
          <button v-google-signin-button="clientId" class="google-signin-button social">
            <img src="../assets/search.svg" alt="google logo">
          </button>
          <button class="social"><img src="../assets/linkedin.svg" alt="linkedin"></button>
        </div>
        <div class="form_signup">
          <p>
            Don't have an account? <a to='/signup'>Signup here</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import GoogleSignInButton from 'vue-google-signin-button-directive';

export default {
  name: 'login',
  directives: {
    GoogleSignInButton,
  },
  data() {
    return {
      clientId: process.env.CLIENT_ID,
      credential: {
        email: '',
        password: '',
      },
      disable: false,
      notificationMsg: '',
    };
  },
  methods: {
    OnGoogleAuthSuccess(idToken) {
      console.log(idToken);
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail(error) {
      console.log(error);
    },
    handleFormSubmit() {
    },
    resetForm() {
      this.email = '';
      this.password = '';
      this.disable = false;
      this.notificationMsg = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.login-cont{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  font-family: 'Lato', sans-serif;
  transition: ease-in 2s;
  &__field {
    margin-bottom: 1rem;
  }

  input {
    outline: 0;
    padding: 0.5rem 1rem;
    color: #c0ccc6;
    width: 300px;
    height: 30px;
  }
  label{
    color: var(--new-nav-dark-grey);
    font-size: 1.5rem;
    font-weight: 700;
    display: block;
    text-align: left;
  }
  h2 {
    color: var(--primary-color);
    font-size: 1.7rem;
    margin: 1.5rem 0;
    font-weight: 700;
  }
  &_signup{
    margin: 1rem;
    font-size: 1.4rem;
  }
  &_brand{
    color: #021F35;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 700;
    align-items: center;
    display: flex;
  }
}

.social-container{
  margin: 20px 0;
}

.social-container button{
border: 1px solid #DDDDDD;
border-radius: 50%;
display: inline-flex;
justify-content: center;
align-items: center;
margin: 0 5px;
height: 35px;
width: 35px;
cursor: pointer;
}

.disable {
  background-image: linear-gradient(
    160deg,
    #607269 0%,
    #3e5751 100%
  ) !important;
  cursor: not-allowed;
}

.login {
  padding: 2rem 1.7rem;
  background-color: #e2e8f0;
  box-shadow: 0 0 1px #000;
  text-align: center;

  .text-green {
    color: #3b8070;
  }
}
button.primary {
  background-color: var(--primary-color);
  color: #ffffff;
  width: 300px;
  padding: .25rem 1rem;
  margin-top: 0.5rem;
  font-weight: 700;
  height: 30px;
}
button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
}
button {
  padding: 0.2rem 1rem;
  font-size: 12px;
  font-weight: bold;
}
</style>
