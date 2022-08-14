<script>
	import Item from '../components/Item.svelte';
	import shopItemsData from '../data.js';
</script>

<style>
	.shop {
		display: grid;
		grid-template-columns: repeat(4, 223px);
		gap: 30px;
		justify-content: center;
		margin-bottom: 50px;
	}

	@media (max-width: 1000px) {
		.shop {
			grid-template-columns: repeat(2, 223px);
		}
	}

	@media (max-width: 500px) {
		.shop {
			grid-template-columns: repeat(1, 223px);
		}
	}
</style>

<svelte:head>
	<title>Shopping Cart Home</title>
</svelte:head>

<div class="shop">
	{#each shopItemsData as item}
		<Item
			id={item.id}
			name={item.name}
			price={item.price}
			desc={item.desc}
			img={item.img}
		/>
	{/each}
</div>

