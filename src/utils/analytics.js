export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...parameters });
};

export const trackContactClick = (method, placement) => {
  const eventName = method === "phone" ? "click_to_call" : "click_email";
  trackEvent(eventName, {
    contact_method: method,
    link_placement: placement,
  });
};
