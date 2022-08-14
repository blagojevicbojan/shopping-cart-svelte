<script>
    import { createBasket } from '../basket-store.js';

    export let id;
    export let item;
    export let name;
    export let img;
    export let price;

    let deleteItem = () => {
      createBasket.removeItem(id);
    }

    let increment = () => {
      createBasket.increment(id);
    }

    let decrement = () => {
      createBasket.decrement(id);
    }
</script>

<style>
i {
  cursor: pointer;
}

.details {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
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

.bi-x-lg {
  color: red;
  font-weight: bold;
}

.cart-item {
  border: 2px solid #212529;
  border-radius: 5px;
  display: flex;
}

.title-price-x {
  width: 195px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title-price {
  display: flex;
  align-items: center;
  gap: 10px;
}

.cart-item-price {
  background-color: #212529;
  color: white;
  border-radius: 4px;
  padding: 3px 6px;
}
</style>

<div class="cart-item">
    <img width="100" src={img} alt="{name}" />
    <div class="details">
      <div class="title-price-x">
        <h4 class="title-price">
          <p>{name}</p>
          <p class="cart-item-price">$ {price}</p>
        </h4>
        <i on:click={deleteItem} class="bi bi-x-lg"></i>
      </div>
      <div class="cart-buttons">
        <div class="buttons">
          <i on:click={decrement} class="bi bi-dash-lg"></i>
          <div id={id} class="quantity">{item}</div>
          <i on:click={increment} class="bi bi-plus-lg"></i>
        </div>
      </div>
      <h3>$ {item * price}</h3>
    </div>
  </div>