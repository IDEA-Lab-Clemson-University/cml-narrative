<!--
 /src/lib/components/bot-buddy/BotBuddyBase.svelte
 BotBuddyBase.svelte
 cml-narrative
 
 Created by Ian Thompson on January 14th 2023
 icthomp@g.clemson.edu
 
 https://idealab.sites.clemson.edu
 
--->
<script lang="ts">
	export let faceColor: string = '#fff';
</script>

<div class="h-full w-full">
	<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 429.72 512">
		<defs>
			<style>
				.cls-1 {
					fill: #ddd;
				}

				.cls-2 {
					fill: #bfc0c1;
				}

				.cls-3 {
					fill: #989da0;
				}

				.cls-4 {
					fill: #585a60;
				}

				.cls-5 {
					fill: #414356;
				}

				.cls-6 {
					fill: #6edcf9;
				}

				.cls-7 {
					fill: #52c7e2;
				}

				.cls-8 {
					fill: #f7ac16;
				}
			</style>
		</defs>
		<path
			id="body_top"
			class="cls-1"
			d="M256,259.43c-54.24,0-98.22,6.77-98.22,15.11s44,17.18,98.22,17.18,98.22-8.83,98.22-17.18S310.24,259.43,256,259.43Z"
			transform="translate(-41.14)" />
		<path
			id="body_top_shadow"
			class="cls-2"
			d="M204.14,261.71c-67.13,6.44-57.34,21.21,4.79,27.68C180.54,281.51,174.7,269.87,204.14,261.71Z"
			transform="translate(-41.14)" />
		<path
			id="left_ear_shadow"
			class="cls-2"
			d="M86.5,77.77h-33A12.39,12.39,0,0,0,41.14,90.13v48.76A12.4,12.4,0,0,0,53.5,151.26H85.42A115.47,115.47,0,0,1,86.5,77.77Z"
			transform="translate(-41.14)" />
		<path
			id="left_ear"
			class="cls-3"
			d="M62.38,138.9V90.13A12.39,12.39,0,0,1,74.74,77.77H53.5A12.39,12.39,0,0,0,41.14,90.13v48.76A12.4,12.4,0,0,0,53.5,151.26H74.74A12.39,12.39,0,0,1,62.38,138.9Z"
			transform="translate(-41.14)" />
		<path
			id="right_ear"
			class="cls-2"
			d="M458.5,77.77h-33a115.53,115.53,0,0,1,1.08,73.49H458.5a12.4,12.4,0,0,0,12.36-12.37V90.13A12.39,12.39,0,0,0,458.5,77.77Z"
			transform="translate(-41.14)" />
		<path
			id="right_ear_shadow"
			class="cls-3"
			d="M450.24,77.77H425.5a115.53,115.53,0,0,1,1.08,73.49h24.74A115.47,115.47,0,0,0,450.24,77.77Z"
			transform="translate(-41.14)" />
		<path
			id="head_outline"
			class="cls-1"
			d="M434.12,116.11C434.12,52.25,381.87,0,318,0H194C130.18,0,77.89,52.2,77.89,116.11s52.24,116.1,116.1,116.1H318C381.82,232.21,434.12,180,434.12,116.11Z"
			transform="translate(-41.14)" />
		<path
			id="head_shadow"
			class="cls-2"
			d="M99.12,116.11h0C99.12,52.25,151.37,0,215.23,0H194C130.24,0,77.89,52.14,77.89,116.11s52.24,116.1,116.1,116.1h21.24C151.37,232.21,99.12,180,99.12,116.11Z"
			transform="translate(-41.14)" />
		<path
			id="face"
			class="cls-4"
			d="M312.86,34.71H199.14a81.64,81.64,0,0,0-81.4,81.39h0a81.64,81.64,0,0,0,81.4,81.4H312.86a81.64,81.64,0,0,0,81.4-81.4h0A81.64,81.64,0,0,0,312.86,34.71Z"
			transform="translate(-41.14)"
			style={`fill: ${faceColor};`} />
		<path
			id="face_shadow"
			class="cls-5"
			d="M139.29,116.11h0a81.63,81.63,0,0,1,81.39-81.4H198.83a81.63,81.63,0,0,0-81.39,81.4h0a81.63,81.63,0,0,0,81.39,81.39h21.85A81.63,81.63,0,0,1,139.29,116.11Z"
			transform="translate(-41.14)" />
		<g id="eyes">
			<circle class="cls-6" cx="159.16" cy="114.51" r="28.85" />
			<circle class="cls-6" cx="270.56" cy="114.51" r="28.85" />
		</g>
		<g id="eye_shadow">
			<path
				id="eye_shadow_left"
				class="cls-7"
				d="M192.69,114.51a28.84,28.84,0,0,1,18.23-26.82,28.85,28.85,0,1,0,0,53.64A28.84,28.84,0,0,1,192.69,114.51Z"
				transform="translate(-41.14)" />
			<path
				id="eye_shadow_right"
				class="cls-7"
				d="M322.32,87.69a28.85,28.85,0,1,0,0,53.64C298.06,131.72,298.07,97.3,322.32,87.69Z"
				transform="translate(-41.14)" />
		</g>
		<path
			id="body"
			class="cls-1"
			d="M353.36,272.55a3.09,3.09,0,0,1,.86,2c0,8.34-44,15.1-98.22,15.1-59.21,0-105.18-8-97.36-17.11a139.54,139.54,0,1,0,194.72,0Z"
			transform="translate(-41.14)" />
		<path
			id="torso_shadow"
			class="cls-2"
			d="M171,282.11c-5.85-1.56-16.25-5-12.31-9.57A139.52,139.52,0,0,0,256,512c3.57,0,7.11-.14,10.62-.4C153,503.05,97.38,368.53,171,282.11Z"
			transform="translate(-41.14)" />
		<path
			id="tie"
			class="cls-8"
			d="M212.63,323.21c.53,5.57.7,4.52,34.63,40.7a12.39,12.39,0,0,0,17.48,0c33.94-36.19,34.1-35.12,34.63-40.7A494.62,494.62,0,0,1,212.63,323.21Z"
			transform="translate(-41.14)" />
		<path
			id="top_tie"
			class="cls-3"
			d="M380.15,308.76a140.25,140.25,0,0,0-26.79-36.22,3.13,3.13,0,0,1,.86,2c0,8.35-44,15.11-98.22,15.11-59.21,0-105.18-8-97.36-17.11a140,140,0,0,0-26.78,36.22C198.86,333.19,313.11,333.2,380.15,308.76Z"
			transform="translate(-41.14)" />
	</svg>
</div>

<style>
	/* #face {
        fill: orange;
    } */
</style>
