<template>
  <div class="wrapper">
    <svg
      class="gooey-filter"
      width="0"
      height="0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1  0  0  0  0
							0  1  0  0  0
							0  0  1  0  0
							0  0  0  25  -12"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>

    <div class="loader">
      <div class="static">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="dots">
        <div class="dot animated"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$size: 5rem;

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--base));
  font-size: 10px;
  margin: 0;
  padding: 0;
  color: rgb(var(--secondary));
}

// Tutorial Start
.gooey-filter {
  visibility: hidden;
  position: absolute;
  top: -100%;
  left: -100%;
}

.loader {
  position: relative;
  .static,
  .dots {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: $size * 0.5;
    padding: 0 $size * 1.5;
  }
  .static {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    .dot {
      animation: color 5000ms ease-in-out infinite alternate;
    }
  }
  .dots {
    filter: url('#goo');
    .dot {
      background-color: rgb(var(--secondary));
      &.animated {
        position: absolute;
        top: 0;
        left: 0;
        animation: move 1500ms ease-in-out infinite alternate;
      }
    }
  }
  .dot {
    width: $size;
    height: $size;
    border-radius: $size;
  }
}

@keyframes move {
  0% {
    transform: translate(-10%, 0);
  }
  100% {
    transform: translate(810%, 0);
  }
}

@keyframes color {
  0% {
    background-color: rgb(var(--secondary));
  }
  50% {
    background-color: rgb(var(--tertiary));
  }
  100% {
    background-color: rgb(var(--primary));
  }
}
</style>
