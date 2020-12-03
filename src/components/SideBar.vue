<template>
  <nav class="sidebar">
    <ul class="side-nav">
      <li class="side-nav__item side-nav__item--active">
        <a href="#" class="side-nav__link">
          <span>All</span>
          <span class="result_view">34 results</span>
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
    <h3 class="source_listings_out">Sources</h3>
    <ul class="side-nav second">
      <h3 class="source_listings_in">Sources</h3>
      <li class="side-nav__item">
        <a href="#" class="side-nav__link second">
          <img src="../assets/edtwist.png" class="side-nav__icon" alt="edtwist">
          <span>edtwist</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link second">
          <img src="../assets/google.png" class="side-nav__icon" alt="google">
          <span>Google</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link second">
          <img src="../assets/youtubeII.png" class="side-nav__icon" alt="youtube">
          <span>Youtube</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link second">
          <img src="../assets/wikipedia.png" class="side-nav__icon" alt="wikipedia">
          <span>WikiPedia</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link second">
          <img src="../assets/khanII.png" class="side-nav__icon" alt="khan II">
          <span>Khan Academy</span>
        </a>
      </li>

      <li class="side-nav__item">
        <a href="#" class="side-nav__link second">
          <img src="../assets/nypl.png" class="side-nav__icon" alt="new york public library">
          <span>New York Public Library</span>
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
  .source_listings_out{
    display: none;
  }
  .result_view{
    color: var(--color-grey-dark-2);
  }
  .side-nav {
    font-size: 1.4rem;
    list-style: none;
    margin-top: 3.5rem;

    & h3 {
      text-align: left;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      padding: 1rem 3rem;
      color: var(--new-nav-dark-grey);
    }

    &:last-child {
      .side-nav__link{
        padding: .2rem 3rem;
      }
    }

    @media only screen and (max-width: $bp-medium) {
      display: flex;
      margin: 0;
      &:last-child {
        overflow: scroll;
        .side-nav__link{
          // padding: 0;
        };
      }
      & ~ h3.source_listings_out{
        display: block;
        font-size: 1.5rem;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        padding: 1rem 3rem;
        color: var(--new-nav-dark-grey);
      }
      .source_listings_in{
        display: none;
      }
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
    border-radius: 7px;
    background-color: var(--color-grey-light-5);
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
  &__item--active{
    font-weight: 700;
    & a{
      color: #313131!important;
    }
    & .side-nav__link{
      justify-content: space-between;
    }
  }
  &__link:link,
  &__link:visited {
    font-family: 'Lato', sans-serif;
    color: var(--color-grey-dark-2);
    text-decoration: none;
    display: block;
    padding: 1rem 3rem;
    border-radius: 5px;
    position: relative;
    z-index: 10;
    @include flex-horizontal-center;
    font-size: 1.5rem;
    font-weight: 600;

    @media only screen and (max-width: $bp-medium) {
      justify-content: space-around;
      padding: 2rem;
    }

    @media only screen and (max-width: $bp-small) {
      flex-direction: row;
      justify-content: space-around;
      padding: 1.5rem .5rem;
    }
  }

  &__link.second:link,
  &__link.second:visited {
    @media only screen and (max-width: $bp-medium) {
      justify-content: center;
      padding: 2rem;
      width: max-content;
    }

    @media only screen and (max-width: $bp-small) {
      flex-direction: column;
      padding: 1.5rem .5rem;
    }
  }

  &__icon {
    width: 1.75rem;
    height: 1.75rem;
    // margin-right: 2rem;
    margin-right: .9rem;
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
