<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="grid-wrapper">
        <header>
            <h1>Orange County Real Estate</h1>
            <div>
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/sell-form">SellFormPage</RouterLink>
                    <RouterLink to="/details">Details</RouterLink>
                </nav>
            </div>
        </header>
        <div class="content-wrapper">
            <RouterView />
        </div>
        <footer>
            <h3>
                <p>&copy; 2024 - Orange County Real Estate</p>
            </h3>
        </footer>
    </div>
</template>

<style scoped>
*,/* can be removed if not needed */
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: normal;
}

.grid-wrapper {
    font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        sans-serif;
    font-size: 16px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* only use for grid */
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 1rem;
    min-height: 100dvh;

    /* experimental */
    /* background-color: #f37608; */
}

.content-wrapper {
    /* border: 1px solid #f37608; */
    padding: 1rem;
}

header {
    border-radius: 8px;
    padding: 1rem;
    display: grid;
    gap: 1rem;
    background-color: #f37608;
    color: #32012f;
}

footer {
    border-radius: 8px;
    background-color: #f37608;
    color: #32012f;
    text-align: center;
    line-height: 3rem;
}

nav {
    display: flex;
    gap: 20px;
}
</style>
