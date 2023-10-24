<script lang="ts">
    import { onMount, afterUpdate } from "svelte";
    import { goto } from '$app/navigation'

    export let appPages: any;
    export let badges: any;
    import * as allIonicIcons from 'ionicons/icons'
    import { menuController } from "@ionic/core";

    let selectedAccordionItem = localStorage.getItem("selectedAccordionItem") || "";
    let selectedAccordion = localStorage.getItem("selectedAccordion") || "";
    let menuContent: any = [];
  
    function clickHandler(e: any, url: string) {
        // console.log('url', url)
        localStorage.setItem("selectedPage", url);
        document.getElementById(selectedAccordionItem)?.classList.remove("selected");
        if (e.target.id) {
          e.target.classList.add("selected");
        } else {
          e.target.parentElement.classList.add("selected");
        }
        localStorage.setItem(
          "selectedAccordionItem",
          e.target.id || e.target.parentElement.id
        );
        localStorage.setItem(
          "selectedAccordion",
          e.target.parentElement.parentElement.parentElement.value
        );
        selectedAccordionItem = e.target.id || e.target.parentElement.id;
        if ((url+'//').split('/')[1] === (window.location.pathname+'//').split('/')[1]) 
          window.location.href = url;
        else 
          goto(url);
         // window.location.href = url;
    }
  
    function renderMenuChildren(list: any) {
      return list.map((appChild: any, index: number) => {
        return {
          ...appChild,
          index,
        };
      });
    }
  
    function renderMenuItems(list: any) {
      return list.map((appPage: any, index: number) => {
        return {
          ...appPage,
          index,
          children: renderMenuChildren(appPage.children),
        };
      });
    }
  
    afterUpdate(() => {
      menuContent = renderMenuItems(appPages);
    });
  
    onMount(() => {
      menuContent = renderMenuItems(appPages);
      setTimeout(() => {
        let targetItem = '/'; // need to get startup route here
        appPages.map((appPage: any, index: number) => {
          if (appPage.children) {
            appPage.children.map((appChild: any, index: number) => {
              document
                .getElementById(appChild.url)
                ?.parentElement?.parentElement?.classList.add(
                  "accordion-collapsed"
                );
              document
                .getElementById(appChild.url)
                ?.parentElement?.parentElement?.classList.remove(
                  "accordion-expanded"
                );
              if (appChild.url === targetItem) {
                const acc = document.getElementById(appChild.url)?.parentElement
                  ?.parentElement;
                if (acc) {
                  setTimeout(() => {
                    acc.classList.remove("accordion-collapsed");
                    acc.classList.add("accordion-expanded");
                    document.getElementById(appChild.url)?.click();
                  }, 0);
                  return;
                }
              }
            });
          }
        });
      }, 0);
    });
  </script>
    
  <ion-accordion-group id="page-list" value={selectedAccordion}>
    {#each menuContent as menu (menu.index)}
    <ion-accordion value={menu.title}>
        <ion-item slot="header" id={menu.url}>
          <ion-label><strong>{menu.title}</strong></ion-label>
          <ion-icon slot="start" icon={allIonicIcons[menu.icon]}></ion-icon>
        </ion-item>
      <ion-list
        slot="content"
        class="appPageChildList">
        {#each menu.children as child (child.index)}
          <ion-menu-toggle>
            <ion-item
              id={child.url}
              on:click={(e) => {clickHandler(e, "/" + child.url)}}
              lines="none"
              detail={false}
              class="appPageChildItem"
              disabled={child.disabled}
            >
              <ion-icon slot="start" ios="" md=""></ion-icon>
              <ion-badge color="danger">
                {badges[child.url] && badges[child.url] > 0
                  ? badges[child.url]
                  : ""}
              </ion-badge>
              &nbsp;&nbsp;
              <ion-label><strong>{child.title}</strong></ion-label>
            </ion-item>
          </ion-menu-toggle>
        {/each}
      </ion-list>
    </ion-accordion>
  {/each}
</ion-accordion-group>

<style>
.main-menu .menu-logo {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 24px auto 44px auto;
}

.appPageChildItem {
  padding: 0 !important;
  cursor: pointer;
}
.appPageChildList {
  padding: 0 !important;
}
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header, ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;
  margin-bottom: 18px;
  color: #757575;
  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-item .selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;
  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

</style>