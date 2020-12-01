<template>
  <nav class="sidebar">
    <ul class="side-nav">
      <li class="side-nav__item side-nav__item--active">
        <a href="#" class="side-nav__link">
          <span>All</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <span>Images</span>
        </a>
      </li>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <span>Videos</span>
        </a>
      </li>
    </ul>
    <ul class="side-nav">
      <h3>Sources</h3>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg xmlns="http://www.w3.org/2000/svg" class="side-nav__icon icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Tours</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg xmlns="http://www.w3.org/2000/svg" class="side-nav__icon icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Tours</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg xmlns="http://www.w3.org/2000/svg" class="side-nav__icon icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Tours</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg xmlns="http://www.w3.org/2000/svg" class="side-nav__icon icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Tours</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg xmlns="http://www.w3.org/2000/svg" class="side-nav__icon icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Tours</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link">
          <svg xmlns="http://www.w3.org/2000/svg" class="side-nav__icon icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Tours</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .side-nav {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;

    & h3 {
      text-align: left;
      padding: 1rem 3rem;
    }

    @media only screen and (max-width: $bp-medium) {
      display: flex;
      margin: 0;
    }

  &__item {
    position: relative;

    &:not(:last-child) {
      margin-bottom: .5rem;

      @media only screen and (max-width: $bp-medium) {
        margin: 0;
      }
    }

    @media only screen and (max-width: $bp-medium) {
      flex: 1;
    }
  }

  &__item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    border-radius: 4px;
    background-color: var(--color-primary);
    transform: scaleY(0);
    transition: transform .2s,
    width .4s cubic-bezier(1,0,0,1) .2s,
    background-color .1s;
  }

  &__item:hover::before,
  &__item--active::before {
    transform: scaleY(1);
    width: 100%;
  }

  &__item:active::before {
    background-color: var(--color-primary-light);
  }

  &__link:link,
  &__link:visited {
    color: var(--color-grey-dark-1);
    text-decoration: none;
    display: block;
    padding: 1rem 3rem;
    border-radius: 5px;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;

    @media only screen and (max-width: $bp-medium) {
      justify-content: center;
      padding: 2rem;
    }

    @media only screen and (max-width: $bp-small) {
      flex-direction: column;
      padding: 1.5rem .5rem;
    }
  }

  &__icon {
    width: 1.75rem;
    height: 1.75rem;
    margin-right: 2rem;
    fill: currentColor;

    @media only screen and (max-width: $bp-small) {
      margin-right: 0;
      margin-bottom: .7rem;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
}
</style>
