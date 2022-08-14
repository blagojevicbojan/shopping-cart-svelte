<script>
    import { basket, createBasket } from '../basket-store.js';
    import BasketItem from '../components/basketItem.svelte'; 
    import EmptyCart from '../components/emptyCart.svelte';
	import shopItemsData from '../data.js';
    
    $: basketCarts = [ ...$basket ].map(x => {
        let shopData = shopItemsData.find(y => y.id === x.id);
        return {
            id: x.id,
            name: shopData.name,
            price: shopData.price,
            img: shopData.img,
            item: x.item
        }
    })

    $: totalBill = [ ...basketCarts ].map(x => x.item * x.price).reduce((x, y) => x + y, 0);

    let clearCart = () => {
        createBasket.clearBasket();
    }
</script>

<style>
.text-center {
  text-align: center;
  margin-bottom: 20px;
}

.shopping-cart {
  display: grid;
  grid-template-columns: repeat(1, 320px);
  justify-content: center;
  gap: 15px;
}

.checkout,
.removeAll {
  background-color: #212529;
  color: white;
  border: none;
  padding: 6px;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
}

.checkout {
  background-color: green;
}

.removeAll {
  background-color: red;
}
</style>

<svelte:head>
    <title>Basket Cart</title>
</svelte:head>

{#if $basket.length !== 0}
    <div id="label" class="text-center">
        <h2>Total Bill : $ {totalBill}</h2>
        <button class="checkout">Checkout</button>
        <button on:click="{clearCart}" class="removeAll">Clear Cart</button>
    </div>
    <div class="shopping-cart">
        {#each basketCarts as b}
            <BasketItem
                id={b.id}
                item={b.item}
                name={b.name}
                img={b.img}
                price={b.price}
            />
        {/each}
    </div>
{:else}
    <div id="label" class="text-center">
        <EmptyCart />
    </div>  
{/if}

