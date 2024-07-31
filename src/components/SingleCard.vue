<script setup>
defineProps( {
    house: Object,
} )
</script>

<template>
    <article>
        <header> {{ house.cityName }} </header>
        <!-- make header clickable to open other houses in the same city -->
        <div class="wrapper">
            <section>
                some house picture
            </section>
            <aside>
                <span class="title"> neighborhood:</span>
                <span> {{ house.neighborhood }} </span>
                <span class="title"> owner:</span>
                <span>{{ house.ownerName }} </span>
                <span class="title"> phone:</span>
                <span> {{ house.ownerPhone }} </span>
                <span class="title"> email: </span>
                <span>{{ house.ownerEmail }} </span>
                <!-- make this  <p> clickable -->
                <span class="bottom"> more details...</span>
            </aside>
            <footer>
                <span> $ {{ house.price }} </span>
                <span> rooms: {{ house.roomsCount }} </span>
            </footer>
            <button> Compare </button>
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

header {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3rem;
    color: var(--secondary);
}

.wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 6fr 1fr;
    /* fix that */
    gap: 0.5rem;

    section {
        min-height: 240px;
    }

    section {
        background-image: url(../assets/house-1.png);
    }

    section,
    aside,
    footer {
        border: 2px solid var(--secondary);
    }
}

aside {
    min-height: 300px;
    max-width: 150px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem;

    .title {
        font-weight: 700;
        margin-top: 8px;
    }

    .bottom {
        text-align: center;
        margin-top: auto;
        margin-bottom: 8px;
        border: 3px double var(--secondary);
        border-radius: 5rem;
        cursor: pointer;
        /* flex: 1; */
        /* justify-self: flex-end; */
        /* why isn't this working? */
    }
    .bottom:hover {
        transition: 0.35s;
        background-color: rgb(237, 217, 247);
        border-color: var(--gray-soft);
    }
}

footer {
    padding: 0 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>