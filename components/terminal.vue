<script setup lang="ts">

</script>

<template>
  <div class="w-full h-96 rounded-md bg-background flex flex-col shadow-xl">
    <div class="flex items-center py-2 ps-4 pe-2 gap-4 justify-between">
      <div class="flex gap-2">
        <button class="size-3 bg-keyword rounded-full"></button>
        <button class="size-3 bg-string rounded-full"></button>
        <button class="size-3 bg-function rounded-full"></button>
      </div>

      <span class="py-1 px-3 rounded-md bg-background-alt/30">
            Go
          </span>
    </div>

    <div class="flex-1 p-6 code">
      <em>package</em> main <br />
      <br />
      <em>import</em> (<br />
      &emsp;&emsp;<s>"os"</s> <br />
      &emsp;&emsp;<s>"fmt"</s> <br />
      ) <br />
      <br />
      <em>func</em> <i>main</i>() { <br />
      &emsp;&emsp;name <em>:=</em> os.Args[<b>1</b>] <br />
      &emsp;&emsp;fmt.<i>Printf</i>(<s>"Hello %s"</s>, name) <br />
      }
    </div>
  </div>
</template>