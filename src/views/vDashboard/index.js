import { gsap } from 'gsap';

export default {
  name: 'vDashboard',
  props: {},
  components: {},
  data: function() {
    return {
      anim: {
        sideBarClose: null,
        viewPort: null,
      },
      sideBarToggle: false,
    };
  },
  methods: {
    onAwake: function() {
      console.log('** onAwake **');
      const vm = this;

      // create anim - side bar close
      vm.anim.sideBarClose = gsap
        .timeline()
        .to('#side-bar', {
          x: -300,
          duration: 0.5,
          ease: 'sine.out',
        })
        .paused(true);

      // create anim - view port close
      vm.anim.viewPort = gsap
        .timeline()
        .to('#view-port', {
          marginLeft: 0,
          width: '100%',
          duration: 0.5,
          ease: 'sine.out',
        })
        .paused(true);
    },
    onCloseSideBar: function() {
      console.log('** onCloseSideBar **');
      const vm = this;
      vm.anim.sideBarClose.play();
      vm.anim.viewPort.play();
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
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {},
};
