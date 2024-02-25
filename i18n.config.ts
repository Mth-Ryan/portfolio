export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            showMore: "Show More",
            showLess: "Show Less",
            visit: "Visit",
            sourceCode: "Source Code",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            recommendations: "Recommendations",
            contact: "Contact",
            contactCompose: "Contact and Social Media",
            hello: "Hi there, I'm",
            title: "Web Fullstack Developer and Physicist",
            aboutMe: `
                I have been working as a software developer for 4 years,
                in the last two years I have progressed on my journey as
                a fullstack developer, specializing in, among other things,
                .Net, Golang, Typescript. I built my career developing
                high-performance applications focused on cloud technologies.
            `,
            skillsDescription: ``,
            projectsDescription: `
                Some of my commercial and open source projects.
                You can check the full list of contributions
                on my
            `,
            recommendationsDescription: `
                See the testimonials of professionals
                who recommend my work.
            `,
            recommendationRodrigoTitle: `
                Senior QA Automation Engineer at Blackpoint Cyber
            `,
            contactDescription: `
                Feel free to get in touch anytime.
                I will respond to you as soon as possible,
                probably during business hours in my country:
                08:00 - 18:00 (UTC -3).
            `,

            // Projects section
            saionaraProjectDescription: `
                A catalog and management system created
                during my time at the company Saionara Cosméticos.
                With this project I was able to dramatically reduce
                the company's previous hosting costs.
            `,

            commonEcommerceServiceProjectDescription: `
                A high performance E-commerce system made to be sold under license.
                It has integration with multiple payment and delivery platforms
                 and a user-friendly management system for catalog and other resources.
                 Uses the best of the .Net platform to avoid code duplication.
            `,

            rinhaCompilerProjectDescription: `
                A compiler capable of generating a program in .Net IL
                executable for the functional language "rinha".
                Was created in 5 days during the "Rinha de compiler" event on Brazil.
                It was made from scratch using only Mono.Cecil to emmit
                IL and Mono.Options for parsing the cli arguments.
            `,

            goTemplatesProjectDescription: `
                A collection of framework-agnostic templates for Golang web projects.
                Its focus is to bring standardization to web projects following
                Domain Driven Design concepts. Possibility of modularity
                and ease of exchanging components at the infrastructure layer.
            `,

            // Skills section
            goSkillDescription: `
                I've been developing in Golang since the beginning of
                my career, and I've built CLI's, Cloud Tools and
                Web Applications. Due to its simplicity and portability, I use it
                regularly to create simple automation tools.
            `,

            dotnetSkillDescription: `
                I have extensive knowledge of several areas of the .NET platform,
                including C#, F#, MSBuild, MS IL, ASP.NET Core and Ef Core, with 4 years
                of solid experience. I developed a compiler for this framework, generating
                executable IL assemblies and applying my advanced knowledge of the Common Language Runtime.
                I opt for .NET in large projects due to its reliability and scalability.
            `,

            typescriptSkillDescription: `
                Javascript is a must-have skill for any web developer. Not only do I know
                it well, but I always keep learning about browsers' native solutions and APIs,
                generally making me capable of developing with any framework. Typescript in
                turn is a natural extension of this. Generally being the default
                for any project I'm involved in.
            `,

            rustSkillDescription: `
                Rust is the language I'm least familiar with. Despite the two years
                experience, I use it occasionally in projects where the performance
                of a systems language is indispensable. Being able to create entire systems
                or high-performance dynamic libraries for use in other languages.
            `,

            nextjsSkillDescription: `
                I have 2 years of experience with Next.js using its capabilities
                of ssg and ssr to create performant websites using React. The maturity
                of the framework makes it my default choice for large projects that
                require a JAM stack.
            `,

            nuxtjsSkillDescription: `
                Nuxt is my latest choice for personal frontend projects, the
                which includes this portfolio. Despite the short time using it, I can achieve
                the same development efficiency as when I'm using Next.js.
            `,

            nodejsSkillDescription: `
                Node, like javascript, is an obvious requirement for using the frameworks
                that I know. But besides that, I also have experience in development
                server side with it as well as the development of CLI tools with it.
            `,

            tailwindSkillDescription: `
                Tailwind is an extension of my knowledge about CSS, I use it
                2 years along with Next.js and other javascript frameworks when
                its use proves to be conducive to the project.
            `,

            linuxSkillDescription: `
                I've been using Linux as my primary system since I was 15 years old.
                First as a hobby and now as a platform for deploying applications.
                I deeply understand systems with the Linux kernel as well as tools
                specific to different distributions.
            `,

            nginxSkillDescription: `
                Nginx is my favorite web server for reverse proxying,
                I've been using it for 2 years in any manual deployment of web applications.
            `,

            redisSkillDescription: `
                I've been using Redis for caching, full text search and queue for 3 years.
                Generally in conjunction with other databases.
            `,

            sqlSkillDescription: `
                I have 4 years of experience with SQL, with some DBMS: PostgreSQL,
                Sqlite and SQL server. Having worked with Raw SQL, Micro ORMs and ORMs.
                Knowing the best ways to achieve performance in long queries.
            `,

            dockerSkillDescription: `
                I have been working with Docker for 3 years, knowing its internal
                workings and auxiliary tools such as Docker Compose and Microsoft.NET.Build.Containers.
                Using for rapid deployment of cloud applications.
            `,

            awsSkillDescription: `
                AWS is my comfort cloud provider. I have 2 years of experience
                with services such as: EC2, RDS, SES, S3, Elastic cache, Elastic Ip, IAM,
                among others.
            `,

            ansibleSkillDescription: `
                I use Ansible Playbooks to manage and reproduce cloud environments.
                Usually in conjunction with Docker containers.
            `,

            nixSkillDescription: `
                I use NixOS as my main development environment, the Nix package
                manager allows a level of isolation similar to Docker but with
                greater development speed.
            `,
        },
        pt: {
            showMore: "Mostrar Mais",
            showLess: "Mostrar Menos",
            visit: "Visitar",
            sourceCode: "Source Code",
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos",
            recommendations: "Recomendações",
            contact: "Contato",
            contactCompose: "Contato e Redes Sociais",
            hello: "Olá, eu sou",
            title: "Desenvolvedor Web Fullstack e Físico ",
            aboutMe: `
                Trabalho a 4 anos como desenvolvedor de software,
                nos ultimos dois anos tenho progredido na minha jornada
                como desenvolvedor fullstack sendo especialista, entre outras coisas,
                em .Net, Golang, Typescript. Constui minha carreira desenvolvendo
                aplicações de alto desempenho focadas em tecnologias
                cloud.
            `,
            skillsDescription: ``,
            projectsDescription: `
                Alguns dos meus projetos comerciais e open source.
                Você pode checar a lista completa de contribuições
                no meu
            `,
            recommendationsDescription: `
                Veja os testemunhos de profissionais
                que recomendam meu trabalho. 
            `,
            recommendationRodrigoTitle: `
                Senior QA Automation Engineer na Blackpoint Cyber
            `,
            contactDescription: `
                Sinta-se livre para entrar em contato a qualquer hora.
                Te responderei assim que possível, provavelmete no horário
                comercial de meu país: 08:00 - 18:00h (UTC -3). 
            `,

            // Projects section
            saionaraProjectDescription: `
                Um catalogo e sistema de gerenciamento criados
                durante minha passagem pela empresa Saionara Cosméticos.
                Com esse projeto fui capaz de reduzir vertiginozamente
                os custos anteriores em hospedagem da empresa.
            `,

            commonEcommerceServiceProjectDescription: `
                Um sistema de E-commerce de alta performace 
                feito para ser vendido sob licença. Possuí integração
                com multiplas plataformas de pagamento e entregas
                e um sistema de gerenciamento amigavel para o
                catalogo e outros recursos. Utiliza o melhor da
                plataforma .Net para evitar duplicação de código.
            `,

            rinhaCompilerProjectDescription: `
                Um compilador capaz de gerar um programa em .Net IL
                executável para a linguagem funcional "rinha".
                Foi criado em 5 dias durante o evento rinha de compiler.
                Feito do zero utilizando apenas o Mono.Cecil para a emissão
                de IL e o Mono.Options para o parsing dos argumentos da cli.
            `,

            goTemplatesProjectDescription: `
                Uma coleção de templates agnósticos a framework para projetos Golang web.
                Seu foco é trazer uma padronização para projetos web seguindo
                conceitos de Domain Driven Design. Possibilidade de modularidade
                e facilidade na troca de componentes na camada de infraestrutura.
            `,

            // Skills section
            goSkillDescription: `
                Desenvolvo em Golang desde o início da minha carreira,
                e construi CLI's, Ferramentas Clouds e Aplicações Web.
                Por sua simplicidate e portabilidade, a utilizo regularmente
                para criar ferramentas de automação simples.
            `,

            dotnetSkillDescription: `
                Tenho amplo domínio em diversas áreas da plataforma .NET, incluindo C#,
                F#, MSBuild, MS IL, ASP.NET Core e Ef Core, com 4 anos de experiência sólida.
                Desenvolvi um compilador para este framework, gerando assemblies IL executáveis
                e aplicando meu conhecimento avançado sobre o Common Language Runtime.
                Opto pelo .NET em projetos de grande porte devido à sua confiabilidade e escalabilidade.
            `,

            typescriptSkillDescription: `
                Javascript é uma hábilidade obrigatória para qualquer desenvolvedor Web.
                Não só o conheço bem como me mantenho sempre aprendendo sobre as soluções e APIs
                nativas dos browsers, geralmente me tornando hápito para o desenvolvimento
                com qualquer framework. Typescript por sua vez é uma extensão natural deste
                conhecimento. Sendo geralmente o padrão para qualquer projeto que estou envolvido.
            `,

            rustSkillDescription: `
                Rust é a linguagem com que tenho menos intimidade. Apesar dos dois anos
                de experiência, eu a utilizo pontualmente em projetos onde a performace
                de uma linguagem de sistemas é indispensável. Sendo capaz de criar sistemas inteiros
                ou bibliotecas dinâmicas de alta performace para a utilização em outras
                linguagens.
            `,

            nextjsSkillDescription: `
                Tenho 2 anos de experiência com o Next.js utilizando suas capacidade
                de ssg e ssr para criar sites performáticos a partir do React. A maturidade
                do framework o torna minha escolha padrão para projetos grandes que
                requerem uma JAM stack.
            `,

            nuxtjsSkillDescription: `
                Nuxt é minha escolha mais recente para projetos frontend pessoais, o
                que inclui este portifólio. Apesar do pouco tempo o utilizando, consigo alcançar
                a mesma eficiência no desenvolvimento de quando estou utilizando Next.js.
            `,

            nodejsSkillDescription: `
                Node assim como javascript é um requisito obvio a utilização dos frameworks
                que conheço. Mas além disso tambêm tenho experiência em desenvolvimento
                server side com ele assim como o desenvolvimento de ferramentas CLI com o mesmo.
            `,

            tailwindSkillDescription: `
                Tailwind é uma extensão do meu conhecimento sobre CSS, o utilizo
                a 2 anos junto com o Next.js e outros frameworks javascript quando
                seu uso se mostra propício ao projeto.
            `,

            linuxSkillDescription: `
                Utilizo Linux como meu sistema primário desde meus 15 anos de idade.
                Primeiro como hobby e agora como plataforma para o deploy de aplicações.
                Compreendo profundamente sistemas com o kernel linux assim como ferramentas
                especificas de diversas distribuições.
            `,

            nginxSkillDescription: `
                Nginx é meu web server favorito para reverse proxying, o utilizo a 2 anos
                em qualquer deploy manual de aplicações web.
            `,

            redisSkillDescription: `
                Utilizo Redis para caching, full text search e queue a 3 anos. Geralmente
                em conjuto com outros bancos de dados.
            `,

            sqlSkillDescription: `
                Tenho 4 anos de experiência com SQL, com alguns DBMS: PostgreSQL,
                Sqlite e SQL server. Tendo trabalhado tanto com Raw SQL, Micro ORMs e ORMs.
                Conhecendo as melhores formas de obter perfomace em queries longas.
            `,

            dockerSkillDescription: `
                Trabalho com docker a 3 anos, conhecendo seu funcionamento interno
                e ferramentas auxiliares como Docker Compose e Microsoft.NET.Build.Containers.
                Utilizando para o deploy rápido de aplicações em cloud.
            `,

            awsSkillDescription: `
                Aws é meu cloud provider de conforto. Tenho 2 anos de experiência
                com serviçõs como: EC2, RDS, SES, S3, Elastic cache, Elastic Ip, IAM,
                entre outros.
            `,

            ansibleSkillDescription: `
                Utilizo Playbooks Ansible para o gerenciamento e reprodução
                de ambientes em cloud. Geralmente em conjunto com containers Docker.
            `,

            nixSkillDescription: `
                Utilizo o NixOS como meu ambiente principal de desenvolvimento,
                o package manager Nix permite um nivel de isolamento similar ao Docker
                porem com maior agelidade de desenvolvimento.
            `,
        }
    }
}))
