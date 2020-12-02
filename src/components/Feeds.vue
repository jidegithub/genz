<template>
  <main class="feed-main">
    <div class="grid-container">
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
              <button class="btn card_btn">Repost</button> .
              <button class="btn card_btn">Share</button>
              <section class="card_comment_box">
                <FirstChar :character="char" :width="1.9" :height="1.9" :fontSize="2"/>
                <input type="text" class="search__input" placeholder="Add a comment">
              </section>
            </div>
          </div>
        </li>
      </div>
      <div class="youtube">
        youtube
      </div>
      <div class="silicon">
        silicon
      </div>
      <div class="search">
        search
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
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 9px;
    grid-template-areas:
      "search late-night"
      "silicon youtube";
}

.late-night { grid-area: late-night; }

.youtube { grid-area: youtube; }

.silicon { grid-area: silicon; }

.search { grid-area: search; }

.feed-main{
  display: flex;
  flex: 0 0 82%;
}
.cards_item {
  display: flex;
  padding: 1rem;
  height: 100%;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 77%;
  }
}

// @media (min-width: 56rem) {
//   .cards_item {
//     width: 33.3333%;
//   }
// }

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem 1.3rem;
  &_profile{
    display: flex;
    align-items: center;
    padding:.9rem 1rem;
    &_name{
      margin-left: 1.4rem;
      font-size: 1.7rem;
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
  &_content {
    padding: 1rem;
    text-align: left;
  }
  &_title {
    // color: #ffffff;
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
    font-size: 1.5rem;
    padding: 1rem 0;
  }
  &_comment_box{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
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
</style>
