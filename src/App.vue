<template>
  <header>
    Header
    <nav>
      <router-link :to="{name: 'home'}">Home</router-link>
      <router-link :to="{name: 'second'}">Second</router-link>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>Footer</footer>
</template>

<style lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 70px;

  background: midnightblue;
  color: whitesmoke;

  padding: 1rem;

  nav {
    margin-left: 2rem;

    a {
      color: whitesmoke;
      text-decoration: none;
      transition: color 200ms ease-in-out, border 200ms ease-in-out;

      &:not(:first-child) {
        margin-left: 1rem;
      }

      &.router-link-active {
        font-weight: 700;
        color: darkorange;
        border-bottom: currentColor 1px solid;
      }
    }

  }
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;

  background: #f5f5f5;
  min-height: 70px;
}
</style>
