<script setup lang="ts">
</script>

<template>
  <header class="w-full px-8 py-4 fixed bg-background/80 border-b border-background backdrop-blur z-50">
    <Container>
      <div class="flex justify-between items-center text-sm lg:text-base">
        <svg
          viewBox="0 0 19.297 6.35"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke-width="1"
          class="h-5"
        >
          <path d="M.53 3.175V.529H7.454v5.292H.529zm6.536.02V.917H.918v4.553h6.148zm-4.262.64-.66-.66.66-.66.66-.66.09.084.09.085-.574.575-.575.576.575.576.574.575-.09.085-.09.085zm1.703.577-.088-.088.574-.574.574-.575-.575-.576-.574-.575.09-.085.09-.085.66.66.66.661-.662.662-.662.662zm4.816-1.2V.917l.606.011.607.01.648 1.546c.357.85.657 1.546.668 1.547.01 0 .315-.7.677-1.556l.658-1.556h1.194V5.51H13.214V4.453c0-.582-.014-1.045-.03-1.029-.016.016-.231.487-.479 1.047l-.45 1.02h-.798l-.454-1.036-.455-1.035-.01 1.045-.01 1.045H9.323zm5.525.002V.918h1.16c.673 0 1.257.018 1.39.043.667.123 1.145.593 1.263 1.24.105.582-.147 1.207-.611 1.512l-.163.107.43.792c.235.436.438.817.45.846.016.044-.076.052-.535.043l-.555-.01-.393-.73-.393-.728-.438-.001-.438-.001V5.51H14.848zm2.373-.215c.17-.1.272-.296.273-.525 0-.246-.107-.429-.313-.534-.15-.078-.229-.088-.668-.088h-.498v.597c0 .328.013.61.03.626.015.016.256.023.534.016.423-.011.529-.026.642-.092z"/>
        </svg>

        <nav class="hidden md:block">
          <ul class="flex gap-6 text-muted">
            <li>
              <a href="#about">{{ $t("about") }}</a>
            </li>
            <li>
              <a href="#skills">{{ $t("skills") }}</a>
            </li>
            <li>
              <a href="#projects">{{ $t("projects") }}</a>
            </li>
            <li>
              <a href="#recommendations">{{ $t("recommendations") }}</a>
            </li>
            <li>
              <a href="#contact">{{ $t("contact") }}</a>
            </li>
          </ul>
        </nav>

        <LocaleSelect />
      </div>
    </Container>
  </header>
</template>