<template lang="pug">
#product
  Details
  Related
</template>

<script>
import Details from '../blocks/details.vue'
import Related from '../blocks/related.vue'

export default {
  name: 'ProductPage',
  components: {
    Details,
    Related
  }
}
</script>