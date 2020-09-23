import { gsap } from 'gsap';

export default {
  name: 'vLogin',
  props: {},
  components: {},
  data: function() {
    return {
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
      document.querySelector('.login-area').classList.remove('register-status');
      vm.anim.loginPanelFadeIn.play();
      vm.registerPanelFadeIn.reverse();
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
