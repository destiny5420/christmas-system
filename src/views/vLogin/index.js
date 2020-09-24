import { gsap } from 'gsap';
import firebase from 'firebase/app';
import db from '@/common/js/firebase';

export default {
  name: 'vLogin',
  props: {},
  components: {},
  data: function() {
    return {
      url: {
        signup: `${process.env.VUE_APP_HOST}/api/login/sign-up`,
        signin: `${process.env.VUE_APP_HOST}/api/login/sign-in`,
      },
      signupData: {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      },
      signinData: {
        email: '',
        password: '',
      },
      isAnimating: false,
      anim: {
        loginPanelFadeIn: null,
        registerPanelFadeIn: null,
      },
    };
  },
  methods: {
    onAwake: function() {
      const vm = this;

      // create anim - login panel fade in
      vm.anim.loginPanelFadeIn = gsap
        .timeline()
        .from('.login-panel', {
          x: 50,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          '.register',
          {
            y: 50,
            opacity: 0,
          },
          '-=1',
        )
        .eventCallback('onStart', () => {
          vm.isAnimating = true;
        })
        .eventCallback('onComplete', () => {
          vm.isAnimating = false;
        })
        .paused(true);

      // create anim - register panel fade in
      vm.registerPanelFadeIn = gsap
        .timeline()
        .from('.register-panel', {
          opacity: 0,
          x: -500,
          duration: 0.75,
        })
        .from('.register-close', {
          opacity: 0,
          x: -50,
        })
        .eventCallback('onStart', () => {
          vm.isAnimating = true;
        })
        .eventCallback('onComplete', () => {
          vm.isAnimating = false;
        })
        .paused(true);
    },
    onRegisterHandler: function() {
      const vm = this;
      document.querySelector('.login-area').classList.add('register-status');
      vm.anim.loginPanelFadeIn.reverse();
      vm.registerPanelFadeIn.play();
    },
    onRegisterCloseHandler: function() {
      const vm = this;

      if (vm.isAnimating) {
        return;
      }

      document.querySelector('.login-area').classList.remove('register-status');
      vm.anim.loginPanelFadeIn.play();
      vm.registerPanelFadeIn.reverse();
      vm.onCleanSignUpDate();
    },
    onSignUpHandler: function() {
      console.log('***** onSignUpHandler *****');
      const vm = this;

      if (vm.isAnimating) {
        return;
      }

      vm.axios({
        url: vm.url.signup,
        method: 'post',
        data: {
          userName: vm.signupData.name,
          userEmail: vm.signupData.email,
          userPassword: vm.signupData.password,
        },
      })
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            vm.onRegisterCloseHandler();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onSignInHandler: function() {
      console.log('***** onSignInHandler *****');
      const vm = this;

      if (vm.isAnimating) {
        return;
      }

      vm.axios({
        url: vm.url.signin,
        method: 'post',
        data: {
          userEmail: vm.signinData.email,
          userPassword: vm.signinData.password,
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onSignUpGoogleHandler: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      db.auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('result: ', result);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onCleanSignUpDate: function() {
      const vm = this;

      vm.signupData = {
        name: '',
        email: '',
        password: '',
        confirm_password: '',
      };
    },
  },
  computed: {},
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    const vm = this;
    vm.onAwake();
    vm.anim.loginPanelFadeIn.play();
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {},
};
