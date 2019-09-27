<template>
  <v-app>
    <DefaultLayout />
  </v-app>
</template>

<script>
import DefaultLayout from './layouts/DefaultLayout'

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
  data: () => ({
    //
  }),
};
</script>