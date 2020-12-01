<template>
  <div class="">
      <Header/>
    <div class="content">
      <SideBar/>
      <Feeds/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import SideBar from '../components/SideBar.vue';
import Feeds from '../components/Feeds.vue';

export default {
  name: 'dashboard',
  components: {
    Header,
    SideBar,
    Feeds,
  },
};
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    height: 90vh;
    background-color: var(--color-grey-light-2);

    @media only screen and (max-width: $bp-medium) {
      flex-direction: column;
    }
  }

  .sidebar {
    flex: 0 0 18%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
