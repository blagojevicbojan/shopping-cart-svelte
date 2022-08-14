<script>
  import { basket } from '../basket-store.js';

  $: totalAmount = () => {
    return [ ...$basket ].map(x => x.item).reduce((x, y) => x + y, 0);
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
</svelte:head>

<div class="navbar">
  <a href="/">
    <h2>Clothing Store</h2>
  </a>

  <a href="/basket">
    <div class="cart">
      <i class="bi bi-cart2"></i>
      <div id="cartAmount" class="cartAmount">{totalAmount()}</div>
    </div>
  </a>
</div>

<style>
i {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: white;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #212529;
  color: white;
  padding: 25px 60px;
  margin-bottom: 30px;
}

.cart {
  position: relative;
  background-color: #fff;
  color: #212529;
  font-size: 30px;
  padding: 5px;
  border-radius: 4px;
}

.cartAmount {
  position: absolute;
  top: -15px;
  right: -10px;
  font-size: 16px;
  background-color: red;
  color: white;
  padding: 3px;
  border-radius: 3px;
}
</style>