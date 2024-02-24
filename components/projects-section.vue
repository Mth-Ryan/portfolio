<script setup lang="ts">
  const projects = [
    {
      id: "saionara",
      title: "Saionara Cosméticos",
      emoji: "💅🏼",
      href: "/",
      imgUrl: "/images/projects/1.png",
      description: "commonEcommerceServiceProjectDescription",
      tags: ["Next.js", "Golang"],
    },
    {
      id: "common-ecommerce-service-3",
      title: "Common E-commerce Service",
      emoji: "🛒",
      href: "/",
      imgUrl: "/images/projects/1.png",
      description: "commonEcommerceServiceProjectDescription",
      tags: ["ASP.NET Core", "Blazor"],
    },
    {
      id: "common-ecommerce-service-2",
      title: "Common E-commerce Service",
      emoji: "🛍️",
      href: "/",
      imgUrl: "/images/projects/1.png",
      description: "commonEcommerceServiceProjectDescription",
      tags: ["ASP.NET", "Blazor"],
    },
  ]
</script>

<template>
  <Section id="projects">
    <div class="flex flex-col gap-4 justify-center items-center">
      <div class="flex gap-3 items-center">
        <LucideBookMarked class="size-6 lg:size-8 text-constant" />
        <h2 class="text-2xl lg:text-3xl">{{ $t("projects") }}</h2>
      </div>
      <p class="text-sm lg:text-base text-muted max-w-[60ch] text-center">
        {{ $t("projectsDescription") }}
        <a class="text-constant" href="https://github.com/Mth-Ryan">Github</a>.
      </p>
    </div>

    <div class="mt-16 flex flex-col gap-24">
      <div class="group flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-16" v-for="project in projects" :key="project.id">
        <img alt="" class="lg:group-even:order-last rounded-md shadow-lg" :src="project.imgUrl">
        <div class="flex flex-col items-start gap-4">
          <h3 class="text-lg lg:text-xl flex items-center gap-4">
            {{ project.emoji }}
            {{ project.title }}
          </h3>
          <p class="text-sm lg:text-base text-muted">
            {{ $t(project.description) }}
          </p>
          <div class="flex gap-4 text-sm lg:text-base">
            <span v-for="tag in project.tags" class="text-normal/90">
              {{ tag }}
            </span>
          </div>
          <div class="flex gap-4">
            <button class="transition flex gap-2 items-center py-2 px-4 rounded-md bg-background-alt/30 hover:bg-background-alt/20 hover:shadow-lg">
              <LucideGithub class="size-5" />
              Source Code
            </button>
            <button class="transition flex gap-2 items-center py-2 px-4 rounded-md bg-background-alt/30 hover:bg-background-alt/20 hover:shadow-lg">
              <LucideExternalLink class="size-5" />
              Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<style scoped>
  .carousel__item:active:hover {
    cursor: grabbing;
  }

  .carousel__slide {
    transition: all;
    padding: .5rem;
    opacity: 0.3;
  }

  @media (max-width: 668px) {
    .carousel__slide {
      padding: .3rem;
    }
  }

  .carousel__slide--active {
    opacity: 1;
  }

  .carousel__slide--active .carousel__item {
    box-shadow: 0 0 20px rgb(0 0 0 / 0.2);
  }

  .carousel__slide--active .slide__caption {
    opacity: 1;
  }
</style>