<template>
  <div class="food-wrapper">
    <div class="guy-approved" v-if="item.ddd">
      <img src="../assets/guyhead.png" />
    </div>
    <div>
      <div class="food-name">
        {{ item.name }}
        <span class="featured" v-if="item.ddd">
          - featured on Diners, Drive-Ins and Dives !</span
        >
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
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  .guy-approved {
    img {
      height: 5rem;
      margin: 0 1rem;
    }
  }

  .food-name {
    font-size: 1.25rem;
    font-family: "Recoleta-Bold";
    padding: 0.25rem 0;
    display: flex;
    flex-direction: column;
    .featured {
      color: $orange;
      text-decoration: underline;
    }
  }
  .food-desc {
    font-size: 1rem;
    padding: 0 2rem 1.5rem;
    opacity: 0.8;
  }
  .food-options {
    font-size: 1rem;
    opacity: 0.8;
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
