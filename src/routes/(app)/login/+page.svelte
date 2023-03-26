<svelte:head>
	<title>Login With Google</title>
</svelte:head>

<section class="py-32 flex flex-col gap-12 justify-center items-center">
	<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">Login With Google</h1>
	<form action="/login" method="post">
		<button class="btn btn-primary btn-wide" type="submit">Login</button>
	</form>
</section>
