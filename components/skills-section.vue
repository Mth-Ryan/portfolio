<script setup lang="ts">

  const skills = [
    {
      id: "dotnet",
      exampleName: "C#",
      fullName: ".Net Core",
      icon: "devicon-dotnetcore-plain",
      description: "dotnetSkillDescription",
      code: `
          <em>namespace</em> Project; <br />
          <br />
          <em>var</em> builder <em>=</em> WebApplication <br />
          &emsp;&emsp;.<i>CreateBuilder</i>(args); <br />
          <br />
          <em>var</em> app = builder.<i>Build</i>();<br />
          <br />
          app.<i>MapGet</i>(<br />
          &emsp;&emsp;<s>"/"</s>, <br />
          &emsp;&emsp;() <em>=></em> <s>"Hello World!"</s>, <br />
          ); <br />
          <br />
          app.<i>Run</i>(); <br />
        `,
    },
    {
      id: "go",
      exampleName: "Go",
      fullName: "Golang",
      icon: "devicon-go-original-wordmark",
      description: "goSkillDescription",
      code: `
          <em>package</em> main <br />
          <br />
          <em>import</em> (<br />
          &emsp;&emsp;<s>"os"</s> <br />
          &emsp;&emsp;<s>"fmt"</s> <br />
          ) <br />
          <br />
          <em>func</em> <i>main</i>() { <br />
          &emsp;&emsp;<em>if</em> <em>len</em>(os.Args) < <b>2</b> { <em>return</em> } <br />
          &emsp;&emsp;name <em>:=</em> os.Args[<b>1</b>] <br />
          &emsp;&emsp;fmt.<i>Printf</i>(<s>"Hello %s"</s>, name) <br />
          }
        `,
    },
    {
      id: "ts",
      exampleName: "TS",
      fullName: "Typescript / Javascript",
      icon: "devicon-typescript-plain",
      description: "typescriptSkillDescription",
      code: `
          <em>type</em> Vec <em>=</em> { <br />
          &emsp;&emsp;x: <em>number</em>; <br />
          &emsp;&emsp;y: <em>number</em>; <br />
          } <br />
          <br />
          <em>const</em> <i>dot</i>(v: <em>Vec</em>, w: <em>Vec</em>) <em>=></em> <br />
          &emsp;&emsp;(v.x <em>*</em> w.x) <em>+</em> (v.y <em>*</em> w.y); <br />
          <br />
          <em>const</em> vec: <em>Vec</em> <em>=</em> { x: <b>1</b>, y: <b>2</b> }; <br />
          <em>const</em> dot <em>=</em> <i>dot</i>(vec, vec); <br />
          <br />
          console.<i>table</i>({ v: vec, w: vec, dot });
        `,
    },
    {
      id: "rust",
      exampleName: "Rust",
      fullName: "Rust",
      icon: "devicon-rust-original",
      description: "rustSkillDescription",
      code: `
          <em>use</em> serde<em>::</em>{<i>Serialize</i>, <i>Deserialize</i>}; <br />
          <br />
          #[<em>derive</em>(<i>Serialize</i>, <i>Deserialize</i>, <i>Debug</i>)] <br />
          <em>struct</em> Vec {
              x: <em>i32</em>,
              y: <em>i32</em>,
          }<br />
          <br />
          <em>fn</em> <i>main</i>() { <br />
          &emsp;&emsp;<em>let</em> vec <em>= Vec</em> { x: <b>1</b>, y: <b>2</b> }; <br />
          &emsp;&emsp;<em>let</em> json <em>=</em> <br />
          &emsp;&emsp;&emsp;&emsp;serde_json<em>::</em><i>to_string</i>(&vec) <br />
          &emsp;&emsp;&emsp;&emsp;.<i>unwrap</i>(); <br />
          <br />
          &emsp;&emsp;<i>println!</i>(<s>"{}"</s>, json); <br />
          }
        `,
    },
    {
      id: "next",
      exampleName: "Tsx",
      fullName: "Next.js",
      icon: "devicon-nextjs-original-wordmark",
      description: "nextjsSkillDescription",
      code: `
          <em>function</em> <i>Page</i>() { <br />
          &emsp;&emsp;<em>const</em> [count, setCount] <em>=</em> <i>useState</i>(<b>1</b>); <br />
          &emsp;&emsp;<em>const</em> <i>inc</i> <em>=</em> () <em>=></em> <i>setCount</i>(count <em>+</em> <b>1</b>); <br />
          &emsp;&emsp;<em>const</em> <i>dec</i> <em>=</em> () <em>=></em> <i>setCount</i>(count <em>-</em> <b>1</b>); <br />
          <br />
          &emsp;&emsp;<em>return</em> &lt;&gt; <br />
          &emsp;&emsp;&emsp;&emsp;&lt;<em>button</em> onClick={<i>inc</i>}&gt; + &lt;/<em>button</em>&gt; <br />
          &emsp;&emsp;&emsp;&emsp;&lt;<em>span</em>&gt;{ count }&lt;/<em>span</em>&gt; <br />
          &emsp;&emsp;&emsp;&emsp;&lt;<em>button</em> onClick={<i>dec</i>}&gt; - &lt;/<em>button</em>&gt; <br />
          &emsp;&emsp;&lt;/&gt; <br />
          }
        `,
    },
    {
      id: "nuxt",
      exampleName: "Vue",
      fullName: "Nuxt.js",
      icon: "devicon-nuxtjs-plain",
      description: "nuxtjsSkillDescription",
      code: `
          &lt;<em>script</em> setup lang=<s>"ts"</s>&gt; <br />
           &emsp;&emsp;<em>const</em> count <em>=</em> <i>ref</i>(<b>1</b>); <br />
           &emsp;&emsp;<em>const</em> inc <em>=</em> () <em>=></em> count.value<em>++</em>; <br />
           &emsp;&emsp;<em>const</em> dec <em>=</em> () <em>=></em> count.value<em>--</em>; <br />
          &lt;/<em>script</em>&gt; <br />
          <br />
          &lt;<em>template</em>&gt; <br />
           &emsp;&emsp;&lt;<em>button</em> @click=<s>"</s><i>inc</i><s>"</s>&gt; + &lt;/<em>button</em>&gt; <br />
           &emsp;&emsp;&lt;<em>span</em>&gt;{{ count }}&lt;/<em>span</em>&gt; <br />
           &emsp;&emsp;&lt;<em>button</em> @click=<s>"</s><i>dec</i><s>"</s>&gt; - &lt;/<em>button</em>&gt; <br />
          &lt;/<em>template</em>&gt;
        `,
    },
    {
      id: "node",
      exampleName: "JS",
      fullName: "Node.js",
      icon: "devicon-nodejs-plain-wordmark",
      description: "nodejsSkillDescription",
      code: `
          <em>const</em> express = <em>require</em>(<s>'express'</s>); <br />
          <em>const</em> app = express(); <br />
          <br />
          app.<i>get</i>(<s>'/'</s>, (req, res) <em>=></em> { <br />
          &emsp;&emsp;res.<i>send</i>(<s>'Hello World!'</s>); <br />
          }); <br />
          <br />
          app.<i>get</i>(<s>'/:name'</s>, (req, res) <em>=></em> { <br />
          &emsp;&emsp;res.<i>send</i>(<s>"Hello "</s> + req.params.name); <br />
          }); <br />
          <br />
          app.<i>listen</i>(<b>3000</b>);
        `,
    },
    {
      id: "tailwind",
      exampleName: "HTML",
      fullName: "Tailwind Css",
      icon: "devicon-tailwindcss-original",
      description: "tailwindSkillDescription",
      code: `
          &lt;<em>div</em> <br />
          &emsp;&emsp;class=<s>"flex justify-center items-center <br />
          &emsp;&emsp;&emsp;&emsp;fixed w-screen h-screen <br />
          &emsp;&emsp;&emsp;&emsp;bg-zinc-100/60 backdrop-blur"</s> <br />
          &gt; <br />
          &emsp;&emsp;&lt;<em>div</em> <br />
          &emsp;&emsp;&emsp;&emsp;class=<s>"bg-zinc-50 text-zinc-800 shadow <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;p-12 rounded border border-zinc-400"</s> <br />
          &emsp;&emsp;&gt; <br />
           &emsp;&emsp; &emsp;&emsp;&lt;<em>span</em>&gt;Hello!&lt;/<em>span</em>&gt; <br />
          &emsp;&emsp;&lt;/<em>div</em>&gt; <br />
          &lt;/<em>div</em>&gt;
        `,
    },
    {
      id: "linux",
      exampleName: "Bash",
      fullName: "Linux",
      icon: "devicon-linux-plain",
      description: "linuxSkillDescription",
      code: `
        <u>$</u> <i>export</i> <em>$</em>(<i>cat</i> <s>"/etc/os-release"</s> | <i>xargs</i>) <br />
        <br />
        <u>$</u> <i>echo</i> <s>"Installing pkg for Ubuntu"</s> <br />
        <br />
        <u>$</u> <i>wget</i> <u>\\</u> <br />
        &emsp;&emsp;<s>"https://pkg.com/</s><em>$</em>{VERSION_CODENAME}<s>.deb"</s> <br />
        <br />
        <u>$</u> <i>sudo</i> dpkg -i <s>"</s><em>$</em>{VERSION_CODENAME}<s>.deb"</s> <br />
        `,
    },
    {
      id: "nginx",
      exampleName: "Conf",
      fullName: "Nginx",
      icon: "devicon-nginx-original",
      description: "nginxSkillDescription",
      code: `
        <em>upstream</em> <s>app_upstream</s> { <br />
        &emsp;&emsp;<em>server</em> <s>localhost:3000</s>; <br />
        } <br />
        <br />
        <em>server</em> { <br />
        &emsp;&emsp;<i>listen</i> <b>80</b> default_server; <br />
        &emsp;&emsp;<i>server_name</i> <s>www.example.com</s>; <br />
        <br />
        &emsp;&emsp;<i>location</i> <s>/</s> { <br />
        &emsp;&emsp;&emsp;&emsp;<i>proxy_pass</i> <s>http://app_upstream</s>; <br />
        &emsp;&emsp;} <br />
        }
        `,
    },
    {
      id: "redis",
      exampleName: "Bash",
      fullName: "Redis",
      icon: "devicon-redis-plain",
      description: "redisSkillDescription",
      code: `
          <u>$</u> <i>redis-cli</i> -h <s>"localhost"</s> -p <b>6379</b> <br />
          <br />
          <u>$</u> <i>redis-cli</i> <br />
          <br />
          <u>127.0.0.1:6379></u> <i>SET</i> count <b>0</b> <br />
          OK <br />
          <br />
          <u>127.0.0.1:6379></u> <i>INCR</i> count <br />
          (integer) 1 <br />
          <br />
          <u>127.0.0.1:6379></u> <i>INCR</i> count <br />
          (integer) 2 <br />
        `,
    },
    {
      id: "sql",
      exampleName: "SQL",
      fullName: "SQL",
      icon: "devicon-azuresqldatabase-plain",
      description: "sqlSkillDescription",
      code: `
          <em>CREATE</em> <em>TABLE</em> users ( <br />
          &emsp;&emsp;<b>id</b> <em>INT PRIMARY KEY</em>, <br />
          &emsp;&emsp;<b>email</b> <em>VCHAR</em>(<b>100</b>), <br />
          &emsp;&emsp;<b>profile_id</b> <em>INT</em>, <br />
          <br />
          &emsp;&emsp;<em>FOREIGN KEY</em>(<b>profile_id</b>) <br />
          &emsp;&emsp;<em>REFERENCES</em> profiles(<b>id</b>) <br />
          ); <br />
          <br />
          <em>SELECT</em> p.<b>name</b>, u.<b>emal</b> <br />
          <em>FROM</em> users as u <br />
          <em>INNER JOIN</em> profiles as p <br />
          <em>ON</em> p.<b>id</b> = u.<b>profile_id</b>; <br />
        `,
    },
    {
      id: "docker",
      exampleName: "Dockerfile",
      fullName: "Docker",
      icon: "devicon-docker-plain",
      description: "dockerSkillDescription",
      code: `
          <em>FROM</em> golang:1.22.0-alpine <em>AS</em> builder <br />
          <br />
          <em>WORKDIR</em> /app <br />
          <em>COPY</em> go.mod go.sum ./ <br />
          <em>RUN</em> go mod download <br />
          <em>COPY</em> . ./ <br />
          <em>RUN</em> go build -o /server <br />
          <br />
          <em>FROM</em> alpine:latest <br />
          <br />
          <em>COPY</em> --from=builder /app/server /server <br />
          <em>EXPOSE</em> 8000 <br />
          <em>ENTRYPOINT</em> [<s>"/server"</s>]
        `,
    },
    {
      id: "aws",
      exampleName: "Bash",
      fullName: "Amazon Web Services",
      icon: "devicon-amazonwebservices-plain-wordmark",
      description: "awsSkillDescription",
      code: `
          <u>$</u> <i>aws</i> ec2 describe-instances <br />
          <br />
          <u>$</u> <i>aws</i> ec2 start-instances <u>\\</u><br />
          &emsp;&emsp;--instance-ids <em>$</em>{INSTACE_ID} <br />
          <br />
          <u>$</u> <i>aws</i> s3 sync images <u>\\</u> <br />
          &emsp;&emsp;<s>"</s><em>$</em>{S3_BUCKET_URL}<s>/images"</s> <u>\\</u> <br />
          &emsp;&emsp;--exclude *.tmp
        `,
    },
    {
      id: "ansible",
      exampleName: "Yaml",
      fullName: "Ansible",
      icon: "devicon-ansible-plain",
      description: "ansibleSkillDescription",
      code: `
          <em>tasks</em>: <br />
          &emsp;&emsp;- <em>name</em>: Install Docker Dependencies <br />
          &emsp;&emsp;&emsp;&emsp;<em>apt</em>: <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<em>pkgs</em>: <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- apt-transport-https <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- ca-certificates <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- curl <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- software-properties-common <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- python3-pip <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- virtualenv <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- python3-setuptools <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<em>state</em>: latest <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<em>update_cache</em>: <b>true</b> <br />
        `,
    },
    {
      id: "nixos",
      exampleName: "Nix",
      fullName: "NixOS",
      icon: "devicon-nixos-plain",
      description: "nixSkillDescription",
      code: `
          { pkgs ? <em>import</em> &lt;nixpkgs&gt; {} }: <br />
          pkgs.mkShell { <br />
          &emsp;&emsp;buildInputs = <em>with</em> pkgs; [<br />
          &emsp;&emsp;&emsp;&emsp;go <br />
          &emsp;&emsp;&emsp;&emsp;gnumake <br />
          &emsp;&emsp;]; <br />
          <br />
          &emsp;&emsp;shellHook = <s>'' <br />
          &emsp;&emsp;&emsp;&emsp;export GOHOME=$HOME/.go <br />
          &emsp;&emsp;&emsp;&emsp;export CGO_ENABLED=0 <br />
          &emsp;&emsp;'';</s> <br />
          }
        `,
    },
  ]

  const selected = ref(skills[0].id);
  const skill = computed(() => skills.find(x => x.id === selected.value));

</script>

<template>
  <AltSection id="skills">
    <div class="flex gap-3 items-center">
      <LucideCode2 class="size-6 lg:size-8 text-function" />
      <h2 class="text-2xl lg:text-3xl">{{ $t("skills") }}</h2>
    </div>

    <div
      v-motion-fade-visible-once
      class="flex flex-col-reverse md:grid grid-cols-2 gap-12 mt-8"
    >
      <Terminal :skill="skill" />

      <div class="flex flex-col gap-4">
        <Transition name="fade" mode="out-in">
          <div :key="skill.id"  class="flex flex-col gap-4">
              <h3 class="text-lg lg:text-xl">{{ skill.fullName }}</h3>
              <p class="text-sm lg:text-base text-muted">
                {{ $t(skill.description) }}
              </p>
          </div>
        </Transition>

        <div class="flex overflow-scroll max-h-72 lg:overflow-auto md:grid grid-cols-4 lg:grid-cols-6 gap-4 p-4 md:mx-[-1rem]">
          <SkillButton
            v-for="sel in skills"
            :dev-icon="sel.icon"
            :selected="sel.id === selected"
            @click="() => { selected = sel.id }"
          />
        </div>
      </div>
    </div>
  </AltSection>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
