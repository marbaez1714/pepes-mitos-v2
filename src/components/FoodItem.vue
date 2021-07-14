<template>
  <div class="food-wrapper">
    <div class="guy-approved" v-if="item.ddd">
      <img src="../assets/guyhead.png" />
    </div>
    <div class="food-container">
      <div class="food-name">
        <span>
          <span>{{ item.name }} </span>
          <!-- <span class="price">{{ item.price ? `- $${item.price}` : null }}</span> -->
        </span>
        <span class="featured" v-if="item.ddd"> Featured on Diners, Drive-Ins and Dives !</span>
      </div>
      <div class="food-desc" v-if="item.desc">{{ item.desc }}</div>
      <div class="food-options" v-if="item.options">
        {{ item.options.join("  &bull;  ") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.food-wrapper {
  display: flex;
  text-align: left;
  flex-direction: row;
  align-items: center;
  .guy-approved {
    img {
      height: 5rem;
      margin: 0 1rem;
    }
  }
  .food-container {
    width: 100%;
  }

  .food-name {
    display: flex;
    font-size: 1.25rem;
    padding: 0.25rem 0;
    flex-direction: column;
    font-family: "Recoleta-Bold";
    .featured {
      color: $orange;
      text-decoration: underline;
    }
    .price {
      font-size: 0.75rem;
      opacity: 0.8;
      font-family: "Recoleta";
    }
  }
  .food-desc {
    opacity: 0.8;
    font-size: 1rem;
    padding: 0 2rem 1.5rem;
  }
  .food-options {
    opacity: 0.8;
    font-size: 1rem;
    padding: 0 2rem 1.5rem;
  }
  .food-desc + .food-options {
    margin-top: -1.25rem;
    padding: 0 2rem 1.5rem;
  }
  @media screen and (max-width: 850px) {
    text-align: center;
    .food-desc {
      text-align: justify;
      padding: 0.25rem 0.5rem 1.5rem;
    }
  }
}
</style>
