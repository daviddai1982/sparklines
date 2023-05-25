<template>
  <a class="card" :href="url">
    <img alt="article-image" :src="src" />
    <p class="card_title">
      {{ title }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default:
        "Délit d’initié : Un ancien chef de produit d’OpenSea est entendu par la justice américaine",

      required: true,
    },
    url: {
      type: String,
      default:
        "https://cryptoast.fr/delit-initie-ancien-chef-produit-opensea-entendu-justice-americaine/",
    },
    src: {
      type: String,
      default:
        "https://cryptoast.fr/wp-content/uploads/2022/06/delit-initie-ancien-chef-produit-opensea-entendu-justice-americaine-.jpg",
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: #15263F;
  color: #FFFFFF;
  border-radius: 16px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  box-shadow: 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  text-decoration: none;
  overflow: hidden;

  @mixin hoverOpacity {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.25s ease-out;
  }
  &::before {
    @include hoverOpacity;
    background-color: #4062ff;
  }
  &::after {
    @include hoverOpacity;
    background: no-repeat url(../assets/img/logo.png) center;
  }
  &:hover {
    &::before {
      opacity: 0.5;
    }
    &::after {
      opacity: 1;
    }
  }

  .card_title {
    color: white;
    font-weight: bold;
    width: 96%;
    cursor: pointer;
    &:hover {
      color: #00FFF8;
    }
  }
}

//Transition
.fade-enter-active,
.fade-leave-active {
  transition: 0.25s ease-out;
}
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
</style>