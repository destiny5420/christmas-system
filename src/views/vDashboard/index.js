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
      url: {
        signinCheck: `${process.env.VUE_APP_HOST}/api/user/check`,
        signout: `${process.env.VUE_APP_HOST}/api/user/logout`,
      },
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
      optionData: [
        {
          title: 'General',
          Datas: [
            {
              text: 'Gift',
              icon: 'gift',
              info: [
                {
                  title: 'Create',
                  path: '',
                  icon: 'plus',
                  pushName: 'vDashboardCreateRoomGift',
                },
                {
                  title: '75B5D',
                  path: '',
                  icon: 'hashtag',
                  pushName: '',
                },
                {
                  title: 'A64F3',
                  path: '',
                  icon: 'hashtag',
                  pushName: '',
                },
                {
                  title: 'J73FG',
                  path: '',
                  icon: 'hashtag',
                  pushName: '',
                },
              ],
            },
            {
              text: 'Setting',
              icon: 'cog',
              info: [],
            },
          ],
        },
      ],
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
    onLogoutHandler: function() {
      const vm = this;

      vm.axios({
        url: vm.url.signout,
        method: 'post',
      })
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            vm.$router.push({
              name: 'vLogin',
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onCheckSignInHandler: function() {
      const vm = this;

      vm.axios({
        url: vm.url.signinCheck,
        method: 'post',
      })
        .then((response) => {
          console.log(response);

          if (response.data.success === false) {
            vm.$router.push({
              name: 'vLogin',
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onTitleHandler: function() {
      const vm = this;
      const curRouteName = vm.$route.name;

      if (curRouteName !== 'vDashboardHome') {
        vm.$router.push({
          name: 'vDashboardHome',
        });
      }
    },
  },
  computed: {},
  // life cycle
  beforeCreate: function() {},
  created: function() {
    // const vm = this;
    // vm.onCheckSignInHandler();
  },
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
