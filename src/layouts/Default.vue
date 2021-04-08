<template>
  <div class="layout">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <a class="home-link active--exact active"
            ><img
              src="@/assets/images/logo.svg"
              alt="Nichlas W. Andersen"
              class="logo"
              data-v-7e33895e
          /></a>
        </div>
        <nav class="nav right">
          <a href="/journal" class="nav__link">Journal</a
          ><a href="/contact" class="nav__link">Say Hi!</a>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="footer">
      <div class="container"><span>Copyright © 2021</span></div>
    </footer>
  </div>
</template>

<style></style>
