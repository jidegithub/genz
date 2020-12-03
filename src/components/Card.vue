<template>
  <li class="cards_item">
          <div class="card">
            <div class="card_profile">
                <div class="card_profile_image bg-cover bg-center rounded-full" style="background-image: url(https://res.cloudinary.com/jidecloudy/image/upload/v1607007232/genner/nyplII_ca8swo.png)">
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
</template>

<script>
export default {
  name: 'card',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
  }
};
</script>

<style>

</style>