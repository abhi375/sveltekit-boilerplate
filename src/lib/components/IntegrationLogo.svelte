<script>
  import BasicIntegrationIcon from "$lib/icons/BasicIntegrationIcon.svelte";
  import HubspotIcon from "$lib/icons/HubspotIcon.svelte";
  import SalesforceIcon from "$lib/icons/SalesforceIcon.svelte";
  import ServiceNowIcon from "$lib/icons/ServiceNowIcon.svelte";
  import ZendeskIcon from "$lib/icons/ZendeskIcon.svelte";
  import PipedriveIcon from "$lib/icons/PipedriveIcon.svelte";
  import SugarIcon from "$lib/icons/SugarIcon.svelte";
  import ZohoIcon from "$lib/icons/ZohoIcon.svelte";

  export let name;
</script>

{#if name === "Salesforce"}
  <SalesforceIcon />
{:else if name === "Hubspot"}
  <HubspotIcon />
{:else if name === "Zendesk"}
  <ZendeskIcon />
{:else if name === "Service Now"}
  <ServiceNowIcon />
{:else if name === "Pipedrive"}
  <PipedriveIcon />
{:else if name === "Sugar CRM"}
  <SugarIcon />
{:else if name === "Zoho"}
  <ZohoIcon />
{:else}
  <BasicIntegrationIcon />
{/if}
