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
        }
    }
}))
