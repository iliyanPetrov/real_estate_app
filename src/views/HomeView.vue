<script setup>
import { ref, onBeforeMount } from "vue";
import SingleCard from '../components/SingleCard.vue';

const houses = ref([]);

onBeforeMount(async () => {
  try {
    const response = await fetch('/src/database/db.json');
    const data = await response.json();
    houses.value = data;
  } catch (error) {
    console.error('Fetch failed:', error);
  }
});
</script>

<template>
    <h1>This is the Home Page</h1>
    <div class="content-wrapper">
        <aside>
            <h3>filters</h3>
            <ul>
                <li>price</li>
                <li>location</li>
                <!-- <li>compare</li> --> 
                <!-- add this on hover? -->
            </ul>
        </aside>
        <main>
            <div> Our Top Offers </div>
            <section>
                <SingleCard v-for="house in houses" 
                :key="house.id" 
                :house="house"/>
            </section>
        </main>
    </div>
</template>

<style scoped>
.content-wrapper {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 1rem;
}

aside {
    padding: 1rem;
}

main {
    border-left: 6px solid var(--secondary);
    padding: 1rem;
}

section {
    /* border: 2px solid #f37608; */
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
}
</style>