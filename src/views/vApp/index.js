import cLoading from '@/components/cLoading/index.vue';

export default {
  name: 'vApp',
  props: {},
  components: {
    cLoading,
  },
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    isLoading: {
      get: function() {
        return this.$store.state.isLoading.global;
      },
    },
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    console.log(this.$store.state.isLoading.global);
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {},
};
