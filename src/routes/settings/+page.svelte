<script lang="ts">
	import { IonPage } from 'ionic-svelte'
	import { dropdownmenu } from '$components/DropdownMenu'
	import * as allIonicIcons from 'ionicons/icons'
    
	const actionMenu = async (e: any) => {
		const items = [
			{
				text: 'Item 1',
				icon: allIonicIcons.documentTextOutline,
				color: 'primary',
				textcolor: 'dark',
				handler: async () => {
					console.log('Item 1 clicked')
				},
			},
			{
				text: 'Item 2',
				icon: allIonicIcons.airplaneOutline,
				color: 'danger',
				textcolor: 'dark',
				handler: async () => {
					console.log('Item 2 clicked')
				},
			},
			{
				text: 'Cancel',
				icon: allIonicIcons.closeOutline
			}
        ]
		await dropdownmenu(e, items)
	}
</script>

<IonPage>
	<ion-header>
		<ion-toolbar>
			<ion-buttons slot="start">
				<ion-menu-button />
			</ion-buttons>
			<ion-title>Settings</ion-title>
			<ion-buttons slot="end">
				<ion-button on:click={actionMenu}>
					<ion-icon slot="icon-only" icon={allIonicIcons.ellipsisVerticalOutline} />
				</ion-button>
			</ion-buttons>
		</ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
		<h1>Settings</h1>
	</ion-content>
</IonPage>
