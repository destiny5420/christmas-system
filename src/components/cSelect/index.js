// import { gsap } from 'gsap';
import { String } from 'core-js';

export default {
  name: 'cSelect',
  props: {
    prop_content: {
      type: String,
      required: true,
    },
    prop_optionLenght: {
      type: Number,
      required: true,
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
      // if (vm.isOpen) {
      //   gsap.timeline().to('#select-icon-arrow', {
      //     rotateZ: 0,
      //     duration: 0.25,
      //     ease: 'linear',
      //   });
      //   gsap.timeline().to('.select-options-block', {
      //     height: 0,
      //     duration: 0.25,
      //     ease: 'linear',
      //   });
      // } else {
      //   gsap.timeline().to('#select-icon-arrow', {
      //     rotateZ: 90,
      //     duration: 0.25,
      //     ease: 'linear',
      //   });
      //   gsap.timeline().to('.select-options-block', {
      //     height: 'auto',
      //     duration: 0.25,
      //     ease: 'linear',
      //   });
      // }
      vm.isOpen = !vm.isOpen;
    },
  },
  computed: {
    classOptionBlock: {
      get: function() {
        const vm = this;
        return {
          'block-open': vm.isOpen,
          'option-count-1': vm.prop_optionLenght === 1,
          'option-count-2': vm.prop_optionLenght === 2,
          'option-count-3': vm.prop_optionLenght === 3,
          'option-count-4': vm.prop_optionLenght === 4,
          'option-count-5': vm.prop_optionLenght === 5,
          'option-count-6': vm.prop_optionLenght === 6,
          'option-count-7': vm.prop_optionLenght === 7,
          'option-count-8': vm.prop_optionLenght === 8,
          'option-count-9': vm.prop_optionLenght === 9,
          'option-count-10': vm.prop_optionLenght === 10,
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
