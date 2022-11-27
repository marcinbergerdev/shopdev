<template>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #fff;
  --black: #000;

  --primary-greyLight: #F1F1F1;
  --primary-grey: #f5f5f5;
  --primary-greyDark: #999;
  --primary-greyDarker: #7e7e7e;

  --primary-claretDark: #800f2f;
  --primary-claret: #a4133c;

  --primary-blue: #2697ff;

  --secondary-superLightGreen: #54ce60;
  --secondary-lightGreen: #03ad00;
  --secondary-normalGreen: #009317;
  --secondary-darkGreen: #07581e;

  --secondary-lightRed: #e40101;
  --secondary-darkRed: #ca0000;
}

html {
  font-size: 10px;
  font-family: "Inter", sans-serif;
}

ul {
  li {
    list-style: none;
  }
}

a {
  text-decoration: none;
}

</style>
