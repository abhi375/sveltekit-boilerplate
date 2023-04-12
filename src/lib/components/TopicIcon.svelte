<script>
  export let name;

  import AnalyticsIcon from "$lib/icons/AnalyticsIcon.svelte";
  import PlaybooksIcon from "$lib/icons/PlaybookIcon.svelte";
  import PulseIcon from "$lib/icons/PulseIcon.svelte";
  import StudioIcon from "$lib/icons/StudioIcon.svelte";
  import ContactsIcon from "$lib/icons/ContactsIcon.svelte";
  import TeamsIcon from "$lib/icons/TeamsIcon.svelte";
  import AppsIcon from "$lib/icons/AppsIcon.svelte";
  import FAQIcon from "$lib/icons/FAQIcon.svelte";
  import SettingsIcon from "$lib/icons/SettingsIcon.svelte";
  import IntegrationIcon from "$lib/icons/IntegrationIcon.svelte";
  import DeveloperIcon from "$lib/icons/DeveloperIcon.svelte";

  import BasicIntegrationIcon from "$lib/icons/BasicIntegrationIcon.svelte";
  import HubspotIcon from "$lib/icons/HubspotIcon.svelte";
  import SalesforceIcon from "$lib/icons/SalesforceIcon.svelte";
  import ServiceNowIcon from "$lib/icons/ServiceNowIcon.svelte";
  import ZendeskIcon from "$lib/icons/ZendeskIcon.svelte";
  import PipedriveIcon from "$lib/icons/PipedriveIcon.svelte";
  import SugarIcon from "$lib/icons/SugarIcon.svelte";
  import ZohoIcon from "$lib/icons/ZohoIcon.svelte";
</script>

{#if name === "Analytics"}
  <AnalyticsIcon />
{:else if name === "Pulse"}
  <PulseIcon />
{:else if name === "Settings"}
  <SettingsIcon />
{:else if name === "Studio"}
  <StudioIcon />
{:else if name === "Playbooks"}
  <PlaybooksIcon />
{:else if name === "Teams"}
  <TeamsIcon />
{:else if name === "Contacts"}
  <ContactsIcon />
{:else if name === "Agent App"}
  <AppsIcon />
{:else if name === "FAQs"}
  <FAQIcon />
{:else if name === "Integrations"}
  <IntegrationIcon />
{:else if name === "Developers"}
  <DeveloperIcon />
{:else if name === "Salesforce"}
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
  <FAQIcon />
{/if}
