export default {
  name: 'cSelect',
  props: {
    prop_content: {
      type: String,
      required: true,
    },
    prop_options: {
      type: Array,
      required: true,
    },
    prop_icon: {
      type: String,
      default: 'exclamation',
    },
  },
  components: {},
  data: function() {
    return {
      isOpen: false,
    };
  },
  methods: {
    onToggleSelectHandler: function() {
      const vm = this;
      vm.isOpen = !vm.isOpen;
    },
  },
  computed: {
    classOptionBlock: {
      get: function() {
        const vm = this;
        return {
          'block-open': vm.isOpen,
          'option-count-1': vm.prop_options.length === 1,
          'option-count-2': vm.prop_options.length === 2,
          'option-count-3': vm.prop_options.length === 3,
          'option-count-4': vm.prop_options.length === 4,
          'option-count-5': vm.prop_options.length === 5,
          'option-count-6': vm.prop_options.length === 6,
          'option-count-7': vm.prop_options.length === 7,
          'option-count-8': vm.prop_options.length === 8,
          'option-count-9': vm.prop_options.length === 9,
          'option-count-10': vm.prop_options.length === 10,
        };
      },
    },
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {},
};
