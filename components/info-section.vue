<template>
  <Section id="about">
    <div class="flex flex-col items-center md:flex-row md:justify-between">
      <div
        v-motion-fade-visible-once
        class="flex flex-col gap-8 max-w-[60ch] md:max-w-[46ch] pt-16 text-center md:text-left"
      >
        <div class="flex flex-col gap-3 items-center md:items-start">
          <div class="flex gap-3 items-end">
            <span class="text-lg lg:text-xl font-['Montserrat']">{{ $t("hello") }}</span>
            <h1 class="text-2xl lg:text-3xl text-keyword font-bold">
              Mateus Ryan
            </h1>
          </div>
          <h2 class="text-lg lg:text-xl font-['Montserrat']">
            {{ $t("title") }}
          </h2>
        </div>

        <p class="text-muted text-sm text-pretty">{{ $t("aboutMe") }}</p>
      </div>

      <div class="flex items-end justify-between">
        <div />
        <div class="aspect-[1.066532] h-[250px] lg:h-[350px] relative">
          <img
              alt="avatar"
              src="../assets/images/avatar-grayscale.png"
              class="absolute -bottom-16 md:bottom-[-4.5rem] lg:bottom-[-4rem] lg:right-16 h-[250px] lg:h-[350px] z-20"
          />
        </div>

        <div
          v-motion-slide-visible-once-right
          class="flex flex-col items-center gap-3"
        >
          <div class="w-px h-10 bg-keyword"></div>
          <a href="https://github.com/Mth-Ryan" target="_blank">
            <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="size-5"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/mth-ryan" target="_blank">
            <LucideLinkedin class="size-5" />
          </a>

          <a href="https://wa.me/5583998003176" target="_blank">
            <svg
                width="24"
                height="24"
                viewBox="0 0 0.92 0.92"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="currentColor"
                class="size-5"
            >
              <title>Whatsapp</title>
              <path
                  d="M.875.448A.404.404 0 0 1 .273.8L.05.871.122.655A.404.404 0 0 1 .47.045c.224 0 .405.18.405.403zM.47.109a.34.34 0 0 0-.34.339c0 .074.023.142.064.198L.151.772.28.73a.341.341 0 0 0 .53-.282.34.34 0 0 0-.342-.339zM.674.54C.672.536.665.534.655.53A1.497 1.497 0 0 0 .587.497C.578.494.571.492.565.502A.546.546 0 0 1 .533.54C.528.547.522.548.512.543.502.538.47.528.432.494A.297.297 0 0 1 .377.426C.37.416.376.41.38.406L.396.388C.4.382.402.378.406.372.409.365.407.359.405.354L.375.281C.365.261.357.265.351.265L.332.264a.036.036 0 0 0-.026.012C.297.286.272.31.272.36c0 .048.035.095.04.102.005.006.069.11.17.149.101.04.101.026.12.024C.62.633.66.61.667.587.677.564.678.547.676.542z"
                  style=";stroke-width:.0131468"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </Section>
</template>
<script setup lang="ts">
</script>