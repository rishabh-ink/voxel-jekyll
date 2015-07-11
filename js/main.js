require.config({
  paths: {
    // Libraries
    "jquery": "../../libraries/jquery/jquery",
    "voxel": "../../libraries/voxel/dist/scripts/voxel"
    // /Libraries
  },

  shim: {
  }
});

require(["jquery", "voxel-jekyll"],
function( $,        VoxelJekyll) {
  var voxelJekyll = VoxelJekyll.create();
});
