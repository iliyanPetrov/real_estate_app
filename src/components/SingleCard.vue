<script setup>
defineProps( {
    house: Object,
} )
</script>

<template>
    <article>
        <header> {{ house.cityName }} </header>
        <div class="wrapper">
            <section>
                some house picture
            </section>
            <p> rooms: {{ house.roomsCount }} </p>
            <p> price: {{ house.price }} </p>
        </div>
    </article>
</template>

<style scoped>
article {
    min-height: 300px;
    padding: 1rem;
    border: 2px solid var(--secondary);
    border-radius: 5px;
}

.wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 5fr 1fr; /* fix that */    
    gap: 1rem;

    section {
        min-height: 240px;
        border: 2px solid var(--secondary);
    }
}
</style>