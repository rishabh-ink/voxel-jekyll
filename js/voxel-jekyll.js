define(["jquery", "voxel"],
function($,        Voxel) {
  "use strict";

  var VoxelJekyll = {
    defaults: {
      name: "VoxelJekyll",

      elements: {
      },

      classnames: {}
    },

    elements: {},

    constants: {},

    components: {},

    create: function(options) {
      this.options = $.extend(true, {}, this.defaults, options);

      this.init();

      return this;
    },

    init: function(options) {
      this.fetch();
      this.attach();
      this.setup();

      return this;
    },

    fetch: function() {
      return this;
    },

    attach: function() {
      return this;
    },

    setup: function() {
      this.components.voxel = Voxel.create();

      return this;
    },

    destroy: function() {
    }
  };

  return Object.create(VoxelJekyll);
});
