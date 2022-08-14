<script>
    import { basket, createBasket } from '../basket-store.js';

    export let id;
    export let name;
    export let price;
    export let desc;
    export let img;

    $: amount = () => {
        const index = [ ...$basket ].findIndex(x => x.id === id);
        return index === -1 ? 0 : [ ...$basket ][index].item;
    }

   let plus = (id) => {
    createBasket.increment(id);
   }

   let minus = (id) => {
    createBasket.decrement(id);
   }

</script>

<style>
    .item {
        border: 2px solid #212529;
        border-radius: 4px;
    }
    .item img {
        width: 100%;
        border-radius: 2px 2px 0 0;
    }

    .details {
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 10px;
    }

    .price-quantity {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 8px;
        font-size: 16px;
    }

    .bi-dash-lg {
        color: red;
    }

    .bi-plus-lg {
        color: green;
    }
</style>

<div class="item">
    <img width="220" src="{img}" alt="{name}">
    <div class="details">
        <h3>{name}</h3>
        <p>{desc}</p>
        <div class="price-quantity">
        <h2>$ {price} </h2>
        <div class="buttons">
            <i on:click={() => minus(id)} class="bi bi-dash-lg"></i>
            <div id='{id}' class="quantity">{amount()}</div>
            <i on:click={() => plus(id)} class="bi bi-plus-lg"></i>
        </div>
        </div>
    </div>
</div>
