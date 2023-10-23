<script lang="ts">
    import { IonPage } from "ionic-svelte"
	import { goto } from '$app/navigation';
	import { currentUser } from '$services/supabase.auth.service';
	import * as allIonicIcons from 'ionicons/icons';
    import { pushPathStack, popPathStack } from '$services/navigation.service';
    pushPathStack();
	// goto('/components/Splash');
</script>
<IonPage>
<ion-header>
	<ion-toolbar color="primary">
		<ion-buttons slot="start">
            {#if $currentUser}
                <ion-menu-button />
                <ion-button on:click={()=>{goto(popPathStack())}}>
                    <ion-icon slot="icon-only" icon={allIonicIcons.arrowBackOutline} />
                </ion-button>	
            {:else}
                <ion-button on:click={()=>{goto(popPathStack())}}>
                    <ion-icon slot="icon-only" icon={allIonicIcons.arrowBackOutline} />
                </ion-button>	
            {/if}
		</ion-buttons>
		<ion-title>Missing Page</ion-title>
	</ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
    <div class="inner-div">
    <h1>Error</h1>

    <p>Missing Page: {window.location.pathname}</p>

 
</div>
</ion-content>
</IonPage>
<style>
    .inner-div {
        margin:40px;
    }

    p {
        font-size: 1.2em;
        /* margin-bottom: 1em; */
    }
    li {
        font-size: 1.2em;
        margin-bottom: 1em;
    }
</style>






