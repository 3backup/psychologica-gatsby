const SITE_URL = "https://www.psychologica.pl";

const pages = [
  {
    title: "Strona glowna",
    url: `${SITE_URL}/`,
  },
  {
    title: "Oferta terapeutyczna",
    url: `${SITE_URL}/oferta-terapeutyczna/`,
  },
  {
    title: "Oferta edukacyjna",
    url: `${SITE_URL}/oferta-edukacyjna/`,
  },
  {
    title: "Superwizja",
    url: `${SITE_URL}/superwizja/`,
  },
  {
    title: "O mnie",
    url: `${SITE_URL}/o-mnie/`,
  },
  {
    title: "Lokalizacja",
    url: `${SITE_URL}/lokalizacja/`,
  },
  {
    title: "Kontakt",
    url: `${SITE_URL}/skontaktuj-sie/`,
  },
];

const services = [
  {
    type: "psychotherapy",
    name: "Psychoterapia i pomoc psychologiczna",
    description:
      "Public information about therapeutic support and psychological help in Rzeszow.",
    url: `${SITE_URL}/oferta-terapeutyczna/`,
  },
  {
    type: "education",
    name: "Oferta edukacyjna i psychoedukacyjna",
    description: "Public information about educational and psychoeducational services.",
    url: `${SITE_URL}/oferta-edukacyjna/`,
  },
  {
    type: "supervision",
    name: "Superwizja",
    description: "Public information about supervision services for professionals.",
    url: `${SITE_URL}/superwizja/`,
  },
];

const contactOptions = {
  contactPage: `${SITE_URL}/skontaktuj-sie/`,
  locationPage: `${SITE_URL}/lokalizacja/`,
  address: {
    streetAddress: "Mikolaja Reja 12/320",
    postalCode: "35-211",
    addressLocality: "Rzeszow",
    addressCountry: "PL",
  },
  guidance:
    "Use the public contact page and visible form. Do not call internal notification endpoints directly.",
};

let webMcpAbortController = null;

const emptyInputSchema = {
  type: "object",
  properties: {},
  additionalProperties: false,
};

const createTools = () => [
  {
    name: "get_site_overview",
    title: "Get Site Overview",
    description:
      "Return a concise overview of Psychologica's public website, services, location, and key URLs.",
    inputSchema: emptyInputSchema,
    annotations: {
      readOnlyHint: true,
    },
    execute: async () => ({
      name: "Psychologica - Renata Zuba",
      url: SITE_URL,
      language: "pl",
      description:
        "Public website for psychological support, psychotherapy, psychoeducation, and supervision in Rzeszow.",
      pages,
      agentDiscovery: {
        apiCatalog: `${SITE_URL}/.well-known/api-catalog`,
        agentSkillsIndex: `${SITE_URL}/.well-known/agent-skills/index.json`,
        mcpServerCard: `${SITE_URL}/.well-known/mcp/server-card.json`,
      },
    }),
  },
  {
    name: "get_services",
    title: "Get Services",
    description:
      "Return public Psychologica service categories and their website URLs. Optionally filter by service type.",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["all", "psychotherapy", "education", "supervision"],
          default: "all",
        },
      },
      additionalProperties: false,
    },
    annotations: {
      readOnlyHint: true,
    },
    execute: async ({ type = "all" } = {}) => ({
      services:
        type === "all"
          ? services
          : services.filter((service) => service.type === type),
    }),
  },
  {
    name: "get_contact_options",
    title: "Get Contact Options",
    description:
      "Return the public contact page and location details without submitting or transmitting any personal data.",
    inputSchema: emptyInputSchema,
    annotations: {
      readOnlyHint: true,
    },
    execute: async () => contactOptions,
  },
  {
    name: "open_contact_page",
    title: "Open Contact Page",
    description:
      "Navigate the current browser tab to Psychologica's public contact page. This does not submit the contact form.",
    inputSchema: emptyInputSchema,
    execute: async () => {
      if (typeof window !== "undefined") {
        window.location.assign("/skontaktuj-sie/");
      }

      return {
        opened: true,
        url: contactOptions.contactPage,
      };
    },
  },
];

export const registerWebMcpTools = () => {
  if (typeof navigator === "undefined") {
    return;
  }

  const modelContext = navigator.modelContext;
  if (!modelContext) {
    return;
  }

  if (webMcpAbortController) {
    webMcpAbortController.abort();
  }

  webMcpAbortController =
    typeof AbortController !== "undefined" ? new AbortController() : null;

  const tools = createTools();
  const options = webMcpAbortController
    ? { signal: webMcpAbortController.signal }
    : undefined;

  if (typeof modelContext.registerTool === "function") {
    tools.forEach((tool) => {
      try {
        modelContext.registerTool(tool, options);
      } catch (error) {
        if (error?.name !== "InvalidStateError") {
          console.warn("Unable to register WebMCP tool", tool.name, error);
        }
      }
    });

    return;
  }

  if (typeof modelContext.provideContext === "function") {
    modelContext.provideContext({ tools });
  }
};
