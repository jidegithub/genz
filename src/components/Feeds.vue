<template>
  <main class="feed-main">
    <div class="grid-container">
      <div class="search flex-container">
        <div class="tour_description">
          <h2>Search</h2>
          <p>Your home base for all your resources</p>
          <span>
            <button><span>Tour</span></button>
            <p>Got it</p>
          </span>
        </div>
        <div class="flex-item tour_image"><img src="../assets/search.png"></div>
      </div>
      <div class="late-night">
        <li class="cards_item">
          <div class="card">
            <div class="card_profile">
                <div class="card_profile_image bg-cover bg-center rounded-full" style="background-image: url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)">
                </div>
                <div>
                  <p class="card_profile_name">Khan Academy</p>
                </div>
            </div>
            <div class="card_content">
              <h2 class="card_title">Late night Ideas</h2>
              <p class="card_text">The other possibilty is that tilt doesn't give a shit
              about me, since i'm a man over the age of 37. it's those those darn
              millenials, raised on shrieking commercials and brain-rotting soda pop, that they
              wish to woo.
              </p>
              <section class="card_interact">
                <button class="btn card_btn">Repost</button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle" width="6" height="6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                  <button class="btn card_btn">Share</button>
              </section>
              <section class="card_comment_box">
                <FirstChar :character="char" :width="1.9" :height="1.9" :fontSize="2"/>
                <input type="text" class="search__input" placeholder="Add a comment">
              </section>
            </div>
          </div>
        </li>
      </div>
      <div class="silicon">
        <li class="cards_item">
          <div class="card">
            <div class="card_profile">
                <div class="card_profile_image bg-cover bg-center rounded-full" style="background-image: url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)">
                </div>
                <div>
                  <p class="card_profile_name">New York Public Library</p>
                </div>
            </div>
            <div class="card_content">
              <h2 class="card_title">A Silicon Valley adventure</h2>
              <p class="card_text">The other possibilty is that tilt doesn't give a shit
              about me, since i'm a man over the age of 37. it's those those darn
              millenials, raised on shrieking commercials and brain-rotting soda pop, that they
              wish to woo.
              about me, since i'm a man over the age of 37. it's those those darn
              millenials, raised on shrieking commercials and brain-rotting soda pop, that they
              wish to woo.
              wish to woo.
              about me, since i'm a man over the age of 37. it's those those darn
              millenials, raised on shrieking commercials and brain-rotting soda pop, that they
              wish to woo.
              wish to woo.
              about me, since i'm a man over the age of 37. it's those those darn
              millenials, raised on shrieking commercials and brain-rotting soda pop, that they
              wish to woo.
              wish to woo.
              about me, since i'm a man over the age of 37. it's those those darn
              millenials, raised on shrieking commercials and brain-rotting soda pop, that they
              wish to woo.
              wish to woo.
              about me, since i'm a man over the age of 37. it's those those darn
              </p>
              <section class="card_interact">
                <button class="btn card_btn">Repost</button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle" width="6" height="6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <circle cx="12" cy="12" r="9"/>
                  </svg>
                  <button class="btn card_btn">Share</button>
              </section>
              <section class="card_comment_box">
                <FirstChar :character="char" :width="1.9" :height="1.9" :fontSize="2"/>
                <input type="text" class="search__input" placeholder="Add a comment">
              </section>
            </div>
          </div>
        </li>
      </div>
      <div class="youtube">
        <li class="cards_item">
          <div class="card">
            <div class="card_profile">
                <div class="card_profile_image bg-cover bg-center rounded-full" style="background-image: url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80)">
                </div>
                <div>
                  <p class="card_profile_name">Youtube</p>
                </div>
            </div>
            <div class="card_image"><img src="../assets//youtube.png"></div>
          </div>
        </li>
      </div>
    </div>
  </main>
</template>

<script>
import FirstChar from './FirstChar.vue';

export default {
  name: 'feeds',
  components: {
    FirstChar,
  },
  data() {
    return {
      char: 'F',
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  // grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 9px;
  grid-row-gap: 9px;
  @media only screen and (max-width: $bp-between) {
    display: flex;
    flex-direction: column;
  }
}

.late-night { grid-area: 1 / 2 / 4 / 3; }
.silicon { grid-area: 2 / 1 / 6 / 2; }
.youtube { grid-area: 4 / 2 / 6 / 3; }

.search {
  grid-area: 1 / 1 / 2 / 2;
}

.feed-main{
  display: flex;
  flex: 0 0 82%;
  padding: 1.7rem;
}
.cards_item {
  display: flex;
  height: 100%;
}

.card {
  background-color: white;
  border-radius: 7px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  // padding: 1rem 1.3rem;
  &_profile{
    display: flex;
    align-items: center;
    padding: 1.2rem 1rem;
    &_name{
      margin-left: 1.4rem;
      font-size: 1.6rem;
      color: var(--help-grey);
    }
    &_image{
      width: 3.7rem;
      height:3.7rem;
      margin-right: .8rem;
      border-radius: 9999px;
      background-position: center;
      background-size: cover;
    }
  }
  &_image{
    & img {
      width: 100%;
    }
  }
  &_content {
    padding: 1.2rem 2rem;
    text-align: left;
  }
  &_title {
    color: var(--new-nav-dark-grey);
    font-size: 2rem;
    font-weight: 600;
    // letter-spacing: 1px;
    margin: 0px;
  }
  &_text {
    // color: #ffffff;
    font-size: 1.7rem;
    line-height: 1.5;
    margin: 1.25rem 0 1.25rem 0;
    font-weight: 400;
  }
  &_btn{
    font-size: 1.6rem;
    padding: 1rem 0;
    font-family: 'Lato', sans-serif;
    color: var(--primary-color);
  }
  &_comment_box{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }
  &_interact{
    display: flex;
    align-items: center;
    & svg{
      margin: 0 1rem;
      & circle{
        fill: var(--primary-color);
      }
    }
  }
}
.search__input{
  font-family: inherit;
  font-size: 1.3rem;
  color: inherit;
  background-color: var(--color-grey-light-2);
  border: none;
  padding: 1rem 2rem;
  margin-left: 1.4rem;
  border-radius: 18px;
  width: 87%;
  &::placeholder{
    font-size: 1.6rem;
  }
}

  .flex-container {
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    // -webkit-align-items: center;
    // align-items: center;
    border: 3px solid var(--primary-color);;
    padding: 1.4rem;
    border-radius: 7px;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    flex-wrap: wrap;
    // min-width: 320px;
    max-width: 1220px;
  }
  .flex-item {
    @include flex-horizontal-center;
    // height: 120px;
    width: 235px;
    // background-color: #e46119;
    // border: 1px solid #626262;
    // margin: 3px;
  }
  .flex-item img{
    flex-grow:0;
    flex-shrink:0;
    // width: 95%;
  }
  span {
  }
  .tour_description{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: left;
    & h2{
      font-size: 2.1rem;
      font-family: 'Lato', sans-serif;
    }
    & p{
      font-size: 1.54rem;
      width: 55%;
    }
    & span{
      @include flex-horizontal-center;
      justify-content: flex-start;

      & button{
        background-color: var(--primary-color);
        color: var(--color-grey-light-1);
        border: 1px solid;
        border-radius: 20px;
        margin: 5px;
        padding: 0 2.5rem;
        text-decoration: none;
        display: block;
        outline: none;
        line-height: 100%;
        overflow: hidden;
        height: 30px;
        font-size: 1.5rem;
        & span{
          @include flex-center;
        }
      }
      & p{
        margin-left: 2rem;
      }
    }
  }
</style>
