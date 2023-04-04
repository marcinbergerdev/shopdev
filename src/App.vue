<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { User, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useUserData } from "./stores/auth/userData";

const auth = getAuth();
const userData = useUserData();

function setUserLoginTime() {
  const currentTime: string = String(Date.now());
  localStorage.setItem("currentTime", currentTime);
}

function checkUserLoginStatus() {
  const expirationTime: number = 3600; // 1h in seconds
  const currentTime: number = Date.now();
  const lastLogin: number | null = Number(localStorage.getItem("currentTime"));
  const residenceTime = (currentTime - lastLogin) / 1000;

  if (residenceTime >= expirationTime) {
    autoLogout();
    return;
  }
}

function autoLogout() {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("currentTime");
    })
    .catch((error) => {
      console.log(error);
    });
}

function autoLogoutCountdown() {
  const expirationTime: number = 3600 * 1000; // 1h in millisecond
  setTimeout(() => {
    autoLogout();
  }, expirationTime);
}

onAuthStateChanged(auth, (user: User | null) => {
  if (user) {
    autoLogoutCountdown();
    setUserLoginTime();
    checkUserLoginStatus();
    userData.getUserSettingsData(user.uid);
  }
});
</script>

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

  --primary-greyLight: #f1f1f1;
  --primary-grey: #f5f5f5;
  --primary-greyForm: #b1b1bb;
  --primary-greyDark: #555;
  --primary-greyDarker: #7e7e7e;

  --primary-claretDark: #800f2f;
  --primary-claret: #a4133c;

  --primary-blue: #2697ff;

  --secondary-superLightGreen: #54ce60;
  --secondary-lightGreen: #03ad00;
  --secondary-normalGreen: #27981d;
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

.scrollHidden {
  overflow: hidden;
}

.addToCart {
  &:hover {
    .cartIcon {
      color: var(--white);
    }
  }
}

//Styles for Login/Signup (FormKit Library)
.formContainer {
  width: 100%;
  min-height: 100vh;

  @media (min-width: 768px) {
    display: grid;
    place-items: center;
  }
}

.formBox {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: min(76.8rem, 100%);
  min-height: 100vh;

  @media (min-width: 768px) {
    margin: 5rem 0;
    min-height: 70vh;
    border: 1px solid var(--primary-greyForm);
  }
}

.formTitle {
  margin-bottom: 5rem;
  font-size: 2rem;
}

.formkit-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 1.5rem 0;
  width: min(40rem, 100%);
  margin: 0 auto;
}

.formkit-outer {
  width: 100%;
}

.formkit-input {
  width: 100%;
  padding: 1rem;
  border-radius: 50px;
  border: 1px solid var(--primary-greyForm);
}

.formkit-input:focus-within {
  outline: 2px solid var(--primary-claret);
}

.formkit-actions {
  width: 100%;
  margin-top: 2rem;

  .formkit-input {
    color: var(--white);
    background-color: var(--primary-claret);
    &:focus {
      outline: none;
    }

    @media (min-width: 768px) {
      cursor: pointer;
      opacity: 0.8;
      transition: 0.15s ease-in-out;

      &:hover {
        opacity: 1;
        transition: 0.15s ease-in-out;
      }
    }
  }
}

.formkit-messages {
  .formkit-message {
    color: var(--secondary-lightRed);
  }
}

[data-invalid] .formkit-inner {
  box-shadow: 0 0 0 2px var(--secondary-lightRed);
  border-radius: 50px;
}

[data-invalid] .formkit-messages {
  .formkit-message {
    padding: 0.3rem 0 0 1rem;
    color: var(--secondary-lightRed);
  }
}

[data-complete] .formkit-input:focus-within {
  outline: 2px solid var(--secondary-normalGreen);
}
</style>
