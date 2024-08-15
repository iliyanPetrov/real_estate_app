<script setup>

</script>

<template>
    <h2>Details Page</h2>
    <div class="wrapper">
        <section>
            <article>
                <img class="main-image" src="../assets/house-6.png" alt="same house picture">
            </article>
            <div class="interior-images">
                <img src="" alt="kitchen">
                <img src="" alt="bedroom">
                <img src="" alt="bathroom">
                <img src="" alt="living-room">
            </div>
        </section>
        <aside>
            <h3 style="text-align: center;">More details ...</h3>
            <!-- "roomsCount": 4,
        "price": 300000,
        "ownerName": "Alex Anderson",
        "ownerEmail": "Alex_Anderson@example.com",
        "ownerPhone": "111-222-3344",
        "nearHospital": true,
        "nearStation": true,
        "nearGasStation": true,
        "nearSchool": false,
        "nearShop": true,
        "nearPark": true,
        "nearMall": false,
        "nearBeach": false, -->
        </aside>
    </div>
    <footer>
        <button>Buy it</button>
    </footer>
</template>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: 4fr 2fr;
    border: 2px solid var(--secondary);
    padding: 4px;
    border-radius: 8px;
    gap: 8px;
}

section{
    display: grid;
    gap: 8px;
}

aside,
article {
    border: 2px solid var(--secondary);
    border-radius: 8px;
}

/* .main-image {
    height: 100%; 
    object-fit: cover;
} */

.interior-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    img{
        min-height: 300px;
        min-width: 240px;
        border: 2px solid var(--secondary);
        border-radius: 4px;
    }
}
</style>