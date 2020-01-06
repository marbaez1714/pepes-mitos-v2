<template>
  <div class="about">
    <div class="about-section">
      <span class="title">About Us</span>
      <span class="content"
        >Located in the heart of Deep Ellum, the Rojas Family has been serving
        Mex-Tex dishes to the Dallas area since 1994. Starting with recipes that
        date back generations, Chef Pedro Rojas has added his unique style to
        some family classics. Come in and enjoy some of our unique dishes or get
        your Tex-Mex fill any day of the week!
      </span>
    </div>
    <div class="video-wrapper">
      <youtube video-id="V6pxSUK1lSY" />
    </div>
  </div>
</template>
<style lang="scss">
.about {
  display: flex;
  height: 100%;
  flex-direction: row;
  .video-wrapper {
    padding: 2rem;
    background-color: $dark;
    background-image: $gradient, url("../assets/concrete-wall.png");
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    iframe {
      width: 50vw;
      height: 30vw;
    }
  }
  .about-section {
    flex: 1 0 0;
    background-color: $blue-light;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: max-content;
    padding: 2rem;
    width: calc(100% - 4rem);
    .title {
      font-size: 2rem;
      font-family: "Recoleta-Bold";
      margin-bottom: 0.5rem;
    }
    .content {
      font-family: "Recoleta";
      max-width: 30rem;
      font-size: 1.25rem;
      margin: 0 2rem;
    }
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    .about-section {
      flex: unset;
      height: fit-content;
      .title {
        font-size: 32px;
      }
      .content {
        font-size: 20px;
      }
    }
    .video-wrapper {
      width: calc(100% - 4rem);
      iframe {
        width: 100%;
        height: 200px;
      }
    }
  }
}
</style>
