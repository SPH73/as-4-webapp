<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-primary p-6 text-light"
  >
    <!-- Logo -->
    <header class="mb-8">
      <img src="/img/logo.webp" alt="AbsoluteSport Logo" class="h-20 mx-auto" />
    </header>

    <!-- Parking Page Message -->
    <section class="max-w-3xl text-center space-y-4 mb-8">
      <h1 class="text-accent font-play text-3xl">We’re Upgrading 🚀</h1>
      <p>
        We’re fully upgrading our website and will be back soon with complete
        booking and payment functionality.
      </p>
      <p>
        We sincerely apologise for any inconvenience this may cause and truly
        appreciate your patience while we make AbsoluteSport even better for
        you.
      </p>
      <p>
        In the meantime, please get in touch using the form below — our team
        will respond within one business day.
      </p>
    </section>

    <!-- Page content -->
    <main class="w-full max-w-3xl">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="mt-12 text-center text-light text-sm">
      <p>
        © {{ new Date().getFullYear() }} AbsoluteSport. All rights reserved.
      </p>
    </footer>
  </div>
</template>
