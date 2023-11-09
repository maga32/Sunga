<template>
  <div :class="classProps">
    <i class="fa fa-angle-double-down fa-4x upNDown" aria-hidden="true"></i>
  </div>
</template>

<script>
export default {
	name: 'DownArrow',
	props: {
		classProps: String,
	},
};
</script>
