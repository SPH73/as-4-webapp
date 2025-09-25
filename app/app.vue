<script setup>
const appConfig = useAppConfig();
const title = computed(() => {
  return appConfig.site.maintenance
    ? "Site Under Maintenance"
    : appConfig.site.title;
});

useHead({
  title: title,
  meta: [
    { name: "description", content: appConfig.site.description },
    { name: "keywords", content: appConfig.site.keywords.join(", ") },
    { name: "author", content: "AbsoluteSport" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#ffffff" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
});
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
