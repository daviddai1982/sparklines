<template>
  <div id="news">
    <Header title="Crypto News" />
    <Selectors
      :searchValue="searchText"
      @update:searchValue="(newValue) => (searchText = newValue)"
    />
    <div class="container">
      <Card
        :title="Un.title"
        :description="Un.description"
        :url="Un.url"
        :src="Un.src"
        class="Une"
      />
      <Card
        :title="Deux.title"
        :description="Deux.description"
        :url="Deux.url"
        :src="Deux.src"
        class="Deux"
      />
      <Card
        :title="Trois.title"
        :description="Trois.description"
        :url="Trois.url"
        :src="Trois.src"
        class="Trois"
      />
      <Card
        :title="Quatre.title"
        :description="Quatre.description"
        :url="Quatre.url"
        :src="Quatre.src"
        class="Quatre"
      />
      <Card
        :title="Cinq.title"
        :description="Cinq.description"
        :url="Cinq.url"
        :src="Cinq.src"
        class="Cinq"
      />
      <Card
        :title="Six.title"
        :description="Six.description"
        :url="Six.url"
        :src="Six.src"
        class="Six"
      />
      <Card
        :title="Sept.title"
        :description="Sept.description"
        :url="Sept.url"
        :src="Sept.src"
        class="Sept"
      />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Selectors from "./Selectors";
import Card from "./Card.vue";

export default {
  name: "News",
  components: { Header, Selectors, Card },
  data() {
    return {
      Un: {
        title:
          "Délit d’initié : Un ancien chef de produit d’OpenSea est entendu par la justice américaine",
        url:
          "https://cryptoast.fr/delit-initie-ancien-chef-produit-opensea-entendu-justice-americaine/",
        src:
          "https://cryptoast.fr/wp-content/uploads/2022/06/delit-initie-ancien-chef-produit-opensea-entendu-justice-americaine-.jpg",
      },
      Deux: {
        title:
          "L'ADA de Cardano dépasse le XRP au classement des cryptomonnaies les plus capitalisées",
        url:
          "https://cryptoast.fr/ada-cardano-depasse-xrp-classement-cryptomonnaies-les-plus-capitalisees/",
        src: "https://cryptoast.fr/wp-content/uploads/2022/06/ada-vs-xrp-1.png",
      },
      Trois: {
        title:
          "La fréquentation de secteur GameFi chute de 96 % depuis ses plus hauts",
        url:
          "https://cryptoast.fr/frequentation-secteur-gamefi-chute-96-pourcents-depuis-plus-hauts/",
        src:
          "https://cryptoast.fr/wp-content/uploads/2022/06/frequentation-secteur-gamefi-chute-96-pourcents-depuis-plus-hauts.jpg",
      },
      Quatre: {
        title:
          "PSAN : l’AMF publie de nouvelles conditions à respecter plus strictes",
        url:
          "https://cryptoast.fr/psan-amf-publie-nouvelles-conditions-respecter-plus-strictes/",
        src:
          "https://cryptoast.fr/wp-content/uploads/2022/06/psan-amf-publie-nouvelles-conditions-respecter-plus-strictes-1.jpg",
      },
      Cinq: {
        title:
          "Le layer 2 d'Ethereum (ETH) Immutable (IMX) propose d'accueillir le metaverse des BAYC",
        url:
          "https://cryptoast.fr/layer-2-ethereum-immutable-propose-accueillir-metaverse-bayc/",
        src:
          "https://cryptoast.fr/wp-content/uploads/2022/06/layer-2-ethereum-immutable-propose-accueillir-metaverse-bayc.jpg",
      },
      Six: {
        title: "Kanye West dépose des marques liées aux NFT et au metaverse",
        url:
          "https://cryptoast.fr/kanye-west-depose-marques-liees-nft-metaverse/",
        src:
          "https://cryptoast.fr/wp-content/uploads/2022/06/kanye-west-nfts.jpg",
      },
      Sept: {
        title:
          "Binance Labs lance un nouveau fonds d’investissement de 500 millions de dollars",
        url:
          "https://cryptoast.fr/binance-labs-nouveau-fonds-investissement-500-millions-dollars/",
        src:
          "https://cryptoast.fr/wp-content/uploads/2022/06/binance-labs-nouveau-fonds-investissement-500-millions-dollars-.jpg",
      },
    };
  },
};
</script>

<style lang="scss">
#news {
  height: 97%;
  width: 96%;
  padding: 1% 2%;
  display: flex;
  flex-direction: column;
  gap: 2.5%;
  background: #FBFDFF;
}

.container {
  height: 75%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px 20px;
  grid-auto-flow: row;
  grid-template-areas:
    "Une Une Deux Trois"
    "Une Une Deux Trois"
    "Quatre Cinq Six Sept";
}

.Une {
  grid-area: Une;
  font-size: 1.3vw;
  img {
    width: 100%;
  }
  .card_title {
    margin: 18px auto 4px;
  }
}

.Deux {
  grid-area: Deux;
  font-size: 1vw;
  img {
    height: 64%;
    width: 200%;
  }
  .card_title {
    margin: 18px auto 4px;
  }
}

.Trois {
  grid-area: Trois;
  font-size: 1vw;
  img {
    height: 64%;
    width: 200%;
  }
  .card_title {
    margin: 18px auto 4px;
  }
}

.Quatre {
  grid-area: Quatre;
  font-size: 0.8vw;
  img {
    width: 100%;
  }
  .card_title {
    margin: 8px auto 4px;
  }
}

.Cinq {
  font-size: 0.8vw;
  grid-area: Cinq;
  img {
    width: 100%;
  }
  .card_title {
    margin: 8px auto 4px;
  }
}

.Six {
  grid-area: Six;
  font-size: 0.8vw;
  img {
    width: 100%;
  }
  .card_title {
    margin: 8px auto 4px;
  }
}

.Sept {
  font-size: 0.8vw;
  grid-area: Sept;
  img {
    width: 100%;
  }
  .card_title {
    margin: 8px auto 4px;
  }
}
</style>
