<script lang="ts">
	import { BuildingLibrary, Icon } from 'svelte-hero-icons';

	function handleMouseMove(event: any) {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		event.currentTarget.style.setProperty('--mouse-x', `${x}px`);
		event.currentTarget.style.setProperty('--mouse-y', `${y}px`);
	}
</script>

<section class="max-w-7xl mx-auto p-2 flex flex-col gap-4">
	<h1
		class="font-semibold text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center py-12"
	>
		Services
	</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-fit mx-auto">
		<div class="cardd" on:mousemove={handleMouseMove}>
			<div class="card-content">
				<div class="card-image">
					<Icon src={BuildingLibrary} size="64" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<div class="card-info-title">
							<h3>Customizable event pages</h3>
							<h4>
								Allow users to customize their event pages with photos, descriptions, and branding
								to make their event unique
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cardd" on:mousemove={handleMouseMove}>
			<div class="card-content">
				<div class="card-image">
					<Icon src={BuildingLibrary} size="64" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<div class="card-info-title">
							<h3>RSVP tracking</h3>
							<h4>
								Make it easy for users to keep track of their guest list and RSVPs in real-time, so
								they can adjust their planning accordingly.
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cardd" on:mousemove={handleMouseMove}>
			<div class="card-content">
				<div class="card-image">
					<Icon src={BuildingLibrary} size="64" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<div class="card-info-title">
							<h3>Calendar integration</h3>
							<h4>
								Integrate with popular calendar apps to make it easy for users to keep track of
								their event date and schedule.
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cardd" on:mousemove={handleMouseMove}>
			<div class="card-content">
				<div class="card-image">
					<Icon src={BuildingLibrary} size="64" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<div class="card-info-title">
							<h3>Vendor management</h3>
							<h4>
								Allow users to manage their vendors and suppliers in one place, making it easy to
								keep track of contracts, payments, and communications.
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cardd" on:mousemove={handleMouseMove}>
			<div class="card-content">
				<div class="card-image">
					<Icon src={BuildingLibrary} size="64" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<div class="card-info-title">
							<h3>Budget tracking</h3>
							<h4>
								Help users stay on top of their event budget by providing a tool to track expenses
								and estimated costs.
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cardd" on:mousemove={handleMouseMove}>
			<div class="card-content">
				<div class="card-image">
					<Icon src={BuildingLibrary} size="64" />
				</div>
				<div class="card-info-wrapper">
					<div class="card-info">
						<div class="card-info-title">
							<h3>Collaborative planning</h3>
							<h4>
								Allow multiple users to collaborate on event planning, so they can work together to
								create a seamless event.
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.cardd {
		--mouse-x: 0px;
		--mouse-y: 0px;

		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 10px;
		cursor: pointer;
		display: flex;
		height: 260px;
		flex-direction: column;
		position: relative;
		width: 300px;
	}

	.cardd:hover::before {
		opacity: 1;
	}

	.cardd::before,
	.cardd::after {
		border-radius: inherit;
		content: '';
		height: 100%;
		left: 0px;
		opacity: 0;
		position: absolute;
		top: 0px;
		transition: opacity 500ms;
		width: 100%;
	}

	.cardd::before {
		background: radial-gradient(
			800px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.06),
			transparent 40%
		);
		z-index: 3;
	}

	.cardd::after {
		background: radial-gradient(
			600px circle at var(--mouse-x) var(--mouse-y),
			rgba(255, 255, 255, 0.4),
			transparent 40%
		);
		z-index: 1;
	}

	.cardd > .card-content {
		background-color: var(--card-color);
		border-radius: inherit;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		inset: 1px;
		padding: 10px;
		position: absolute;
		z-index: 2;
	}

	.card-image {
		align-items: center;
		display: flex;
		height: 140px;
		justify-content: center;
		overflow: hidden;
	}
	.card-info-wrapper {
		align-items: center;
		display: flex;
		flex-grow: 1;
		justify-content: flex-start;
		padding: 0px 20px;
	}

	.card-info {
		align-items: flex-start;
		display: flex;
		gap: 10px;
	}
	.card-info-title > h3 {
		font-size: 1.1em;
		line-height: 20px;
	}

	.card-info-title > h4 {
		color: rgba(255, 255, 255, 0.5);
		font-size: 0.85em;
		margin-top: 8px;
	}
</style>
