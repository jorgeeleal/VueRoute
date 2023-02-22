<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <!-- NAV ---------------------------------------------- -->
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <router-link class="navbar-brand" to="/">
          PokeAPI
        </router-link>
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active">
              <router-link class="nav-link" to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link class="nav-link" to="/about">About</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link class="nav-link" to="/other">Other</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link class="nav-link" to="/pokemons">Pokemons</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link class="nav-link" to="/favoritos">Favoritos</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container mt-5">
    <RouterView />
  </div>
</template>
