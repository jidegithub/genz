<template>
  <header class="header">
    <div>
      <img src="../assets/logoII.png" alt="edtwist logo" class="logo">
    </div>
    <form action="#" class="search">
      <input type="text" class="search__input" v-model="input" placeholder="Generate Y">
      <button class="search__button">
        <svg xmlns="http://www.w3.org/2000/svg" class="search__icon icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="10" cy="10" r="7"/>
          <line x1="21" y1="21" x2="15" y2="15"/>
        </svg>
      </button>
    </form>
    <p class="help">Help</p>

    <nav class="user-nav">
      <div class="user-nav__icon-box">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bolt" width="18" height="18" viewBox="0 0 20 20" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"/>
        </svg>
      </div>
      <div class="user-nav__icon-box">
        <svg xmlns="http://www.w3.org/2000/svg" class=" icon icon-tabler icon-tabler-circle-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.3" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle fill="#7A65FF" cx="12" cy="12" r="9"/>
          <line x1="9" y1="12" fill="#fff" x2="15" y2="12"/>
          <line x1="12" y1="9" x2="12" y2="15"/>
        </svg>
      </div>
      <div class="user-nav__user">
        <FirstChar :character="char" :width="35" :height="35" :fontSize="1.8" />
      </div>
    </nav>
  </header>
</template>

<script>
import FirstChar from './FirstChar.vue';

export default {
  name: 'headers',
  components: {
    FirstChar,
  },
  data() {
    return {
      char: 'F',
      input: 'Generation Y',
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 3.25rem;
  margin-left: 2rem;
}

.search {
  flex: 0 0 40%;
  @include flex-center;

  @media only screen and (max-width: $bp-smallest) {
    order: 1;
    flex: 0 0 100%;
    background-color: var(--color-grey-light-2);
  }

  &__input {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: var(--color-grey-light-2);
    border: none;
    padding: 1.1rem 2rem;
    border-radius: 7px;
    width: 87%;
    transition: all .2s;
    margin-right: -3.25rem;

    &:focus {
      outline: none;
      width: 93%;
      background-color: var(--color-grey-light-3);
    }

    &::-webkit-input-placeholder {
      font-weight: 100;
      color: var(--color-grey-light-4);
    }
  }

  &__input:focus + &__button {
    background-color: var(--color-grey-light-3);
  }

  &__button {
    border: none;
    background-color: var(--color-grey-light-2);

    &:focus {
      outline: none;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  &__icon {
    height: 2rem;
    width: 2rem;
    // fill: var(--color-grey-dark-3);
  }
}
.help{
  color: var(--help-grey);
  font-weight: 300;
  @media only screen and (max-width: $bp-smallest) {
    margin-left: 2rem;
  }
}
.icon-tabler-circle-plus{
  & circle{
    color: #7A65FF;
  }
  & line{
    color: #fff;
  }
}
.icon-tabler-bolt{
  color:#A2A2A2;
  & polyline{
    fill: var(--color-grey-light-4);
    color: var(--color-grey-light-4);
  }
}

.user-nav {
  align-self: stretch;
  @include flex-vertical-center;
  justify-content: flex-end;
  flex: 0 0 52%;

  @media only screen and (max-width: $bp-smallest) {
    flex: auto;
  }

  & > * {
    padding: 0 .4rem;
    cursor: pointer;
    height: 100%;
    @include flex-horizontal-center;
  }

  & > *:hover {
    background-color: var(--color-grey-light-2);
  }

  &__icon-box {
    position: relative;
  }

  &__icon {
    height: 2.25rem;
    width: 2.25rem;
    // fill: var(--color-grey-dark-2);
  }

  &__notification {
    font-size: .8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: #fff;
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;
    @include flex-center;
  }

  &__user-photo {
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
}
</style>
