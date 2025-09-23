<!-- <script setup lang="ts">
const appConfig = useAppConfig();
console.log(appConfig.site);
</script> -->

<template>
  <UContainer class="bg-dark min-h-screen p-8 space-y-12 text-light">
    <!-- Title -->
    <header class="space-y-2">
      <h1>AbsoluteSport Design System</h1>
      <p>
        <span class="bg-primary">
          All elements render without additional classes required inline except
          for text colour.</span
        >
      </p>
    </header>

    <!-- Typography -->
    <section class="space-y-4">
      <h2 class="">Typography</h2>
      <div class="space-y-2 bg-black/30 p-4 rounded">
        <h1>Heading 1 page title</h1>
        <h2>Heading 2 subtitle</h2>
        <h3>Heading 3 section</h3>
        <h4>Heading 4 subsection</h4>
        <p class="text-primary">Body copy paragraph to test font and size.</p>
      </div>
    </section>

    <!-- Nuxt UI Colour Variants -->
    <section class="space-y-4">
      <h2>Colours</h2>

      <h3>Nuxt UI colour variants</h3>
      <div class="flex flex-wrap gap-2 bg-black/30 p-4 rounded">
        <UButton color="primary">Primary → Orange</UButton>
        <UButton color="secondary">Secondary → Blue</UButton>
        <UButton color="info">Info → Yellow</UButton>
        <UButton color="success">Success → Green</UButton>
        <UButton color="error">Error → Red</UButton>
      </div>
    </section>

    <!-- AbsoluteSport Custom Utilities -->
    <section class="space-y-4">
      <h3>AbsoluteSport Custom Utilities</h3>
      <div class="flex flex-wrap gap-2 bg-black/30 p-4 rounded">
        <UButton class="bg-primary text-light px-4 py-2 rounded">
          bg-primary (Orange)
        </UButton>
        <UButton class="bg-secondary text-light px-4 py-2 rounded">
          bg-secondary (Blue)
        </UButton>
        <UButton class="bg-accent text-dark px-4 py-2 rounded">
          bg-accent (Yellow)
        </UButton>
        <UButton class="bg-dark text-light px-4 py-2 rounded">
          bg-dark (Slate)
        </UButton>
        <UButton class="bg-light text-dark px-4 py-2 rounded">
          bg-light (White)
        </UButton>
      </div>
    </section>

    <!-- Colour Transitions -->
    <section class="space-y-4">
      <h3>Colour Transitions</h3>
      <div class="flex flex-wrap gap-2 bg-black/30 p-4 rounded">
        <UButton
          class="bg-primary text-light hover:bg-secondary px-4 py-2 rounded transition-colors"
        >
          Hover: Orange → Blue
        </UButton>
        <UButton
          class="bg-secondary text-light hover:bg-accent px-4 py-2 rounded transition-colors"
        >
          Hover: Blue → Yellow
        </UButton>
        <UButton
          class="bg-accent text-dark hover:bg-primary hover:text-light px-4 py-2 rounded transition-colors"
        >
          Hover: Yellow → Orange
        </UButton>
      </div>
    </section>

    <!-- Borders & Text -->
    <section class="space-y-4">
      <h2>Border and Text Tests</h2>
      <div class="space-y-2 bg-black/30 p-4 rounded">
        <div class="border border-primary text-primary p-2">
          Border + Text Primary (Orange)
        </div>
        <div class="border border-secondary text-secondary p-2">
          Border + Text Secondary (Blue)
        </div>
        <div class="border border-accent text-accent p-2">
          Border + Text Accent (Yellow)
        </div>
        <div class="border border-light text-light p-2">
          Border + Text Light (White)
        </div>
        <div class="border border-dark text-dark bg-light p-2">
          Border + Text Dark (Slate)
        </div>
      </div>
    </section>

    <!-- Hover Tests -->
    <section class="space-y-4">
      <h2>Hover Tests</h2>
      <div class="flex flex-wrap gap-2 bg-black/30 p-4 rounded">
        <UButton
          class="bg-primary text-light hover:bg-secondary px-4 py-2 rounded transition-colors"
        >
          Hover: Orange → Blue
        </UButton>
        <UButton
          class="bg-secondary text-light hover:bg-error px-4 py-2 rounded transition-colors"
        >
          Hover: Blue → Red
        </UButton>
      </div>
    </section>

    <!-- Disabled States -->
    <section class="space-y-4">
      <h2>Disabled States</h2>
      <div class="flex gap-4 bg-black/30 p-4 rounded">
        <!-- Active -->
        <UButton class="bg-primary text-light rounded">Active Submit</UButton>
        <!-- Disabled -->
        <UButton
          class="bg-primary text-light rounded cursor-not-allowed opacity-50"
          disabled
        >
          Disabled Submit
        </UButton>
      </div>
    </section>
    <section class="space-y-4">
      <h2>Custom Components</h2>
      <h3>Base Components</h3>

      <BaseCard>
        <h4 class="text-light text-xl mb-4">This is inside a BaseCard</h4>
        <p class="text-light">
          BaseCard wraps content with a secondary background, white border,
          padding, and rounded corners.
        </p>
        <div class="mt-4">
          <UButton color="primary">Action inside Card</UButton>
        </div>
      </BaseCard>
    </section>
  </UContainer>
</template>
