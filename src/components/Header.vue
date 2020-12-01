<template>
  <header class="header">
    <div>
      <img src="../assets/logo.png" alt="trillo logo" class="logo">
    </div>
    <form action="#" class="search">
      <input type="text" class="search__input" placeholder="Generate Y">
      <button class="search__button">
        <svg xmlns="http://www.w3.org/2000/svg" class="search__icon icon icon-tabler icon-tabler-search" width="20" height="20" viewBox="0 0 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="10" cy="10" r="7"/>
          <line x1="21" y1="21" x2="15" y2="15"/>
        </svg>
      </button>
    </form>
    <p>Help</p>

    <nav class="user-nav">
      <div class="user-nav__icon-box">
        <svg xmlns="http://www.w3.org/2000/svg" class="user-nav__icon icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </div>
      <div class="user-nav__icon-box">
        <svg xmlns="http://www.w3.org/2000/svg" class="user-nav__icon icon icon-tabler icon-tabler-plus" width="20" height="20" viewBox="0 0 20 20" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
      </div>
      <div class="user-nav__user">
        <div class="circle">
          <p class="text-brand">F</p>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.logo {
  height: 3.25rem;
  margin-left: 2rem;
}

.search {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

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
    padding: .7rem 2rem;
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

.user-nav {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 55%;

  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__user-photo {
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
}
.circle {
  border: 0.1em solid #E2E8F0;
  background-color: #E2E8F0;
  border-radius: 100%;
  height: 1.5em;
  width: 1.5em;
  text-align: center;

  & p {
    margin-top: -1px;
    font-size: 1em;
    font-weight: bold;
    font-family: Poppins, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;;
  }
}
</style>
