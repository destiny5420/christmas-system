import { gsap } from 'gsap';
import cSelect from '@/components/cSelect/index.vue';

export default {
  name: 'vDashboard',
  props: {},
  components: {
    cSelect,
  },
  data: function() {
    return {
      title: '聖誕節抽抽樂系統',
      anim: {
        sideBarClose: null,
        viewPort: null,
        toggle_btn: null,
      },
      user: {
        name: 'Raymen',
        character: 'Administrator',
        status: 0,
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
        .to('#toggle-btn', {
          left: 0,
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
      vm.anim.sideBarClose.restart();
      vm.anim.viewPort.restart();
    },
    onToggleHandler: function() {
      console.log('** onTestHandler **');

      gsap
        .timeline()
        .to('#toggle-btn', {
          left: -30,
          duration: 0.5,
          ease: 'sine.out',
        })
        .eventCallback('onComplete', () => {
          gsap.timeline().to('#side-bar', { x: 0, duration: 0.5, ease: 'sine.out' });
          gsap.timeline().to('#view-port', {
            marginLeft: 300,
            width: 'calc(100% - 300px)',
            duration: 0.5,
            ease: 'sine.out',
          });
        });
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
