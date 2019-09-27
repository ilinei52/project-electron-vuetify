<template>

  <div>
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        <span class="text">Keep</span>&nbsp;YourApp
      </span>
      
      <div class="flex-grow-1"></div>
    </v-app-bar>

    <v-navigation-drawer fixed temporary clipped class="grey lighten-4" app v-model="drawer">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-layout row v-if="item.heading" align-center :key="i">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider dark v-else-if="item.divider" class="my-3" :key="i"></v-divider>
          <v-list-item :key="i" v-else :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <!-- <v-progress-linear
        color="success"
        height="4"
        v-if="true"
        class="page-progress"
        :indeterminate="true"
      ></v-progress-linear>-->
      <v-container fluid class="grey lighten-4 fill-height">
        <router-view></router-view>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "home",
        text: "Home",
        to: "/home"
      }
    ]
  }),
  props: {
    source: String
  }
};
</script>

<style scoped>
#keep main .container {
  height: 660px;
}

.navigation-drawer__border {
  display: none;
}

.text {
  font-weight: 400;
}

.page-progress {
  margin: 0px;
  position: absolute;
}
</style>
