<template>
    <div class="ma-4 text-center">
        <h1 class="ma-4">Obrigado!</h1>
        <p class="ma-4">A baixo algumas tecnologias que aprendi.</p>
        <v-divider></v-divider>
    </div>
    <div></div>
    <div class="ma-4 align-start d-flex">
        <AboutCard v-for="(item, index) in items" :key="index" :image="item.image" :title="item.title"
            :subtitle="item.subtitle" :text="item.text" :link="item.link" />
    </div>
</template>

<script setup>
import AboutCard from "@/components/about/AboutCard.vue";

const items = [
    {
        image:
            "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrjCKmou1jT4It5so5gvOA.jpeg",
        title: "Vue.js",
        subtitle: "A framework JavaScript progressiva",
        text: "Vue (pronuncia-se /vjuː/, como view) é uma framework JavaScript para a construção de interfaces " +
            "de usuário. Ele se baseia em HTML, CSS e JavaScript padrão e fornece um modelo de programação " +
            "declarativo e baseado em componentes que ajuda a desenvolver interfaces de usuário " +
            "com eficiência, sejam elas simples ou complexas.",
        link: ""
    },
    {
        image:
            "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
        title: "Vuetify 3",
        subtitle: "Incível biblioteca front-end",
        text: "Vuetify é uma biblioteca de interface de usuário de código aberto necessária sem habilidades " +
            "de design com componentes de Vue lindamente artesanais.",
        link: "https://vuetifyjs.com/en/"
    },
    {
        image:
            "https://fineproxy.org/wp-content/uploads/2023/07/netlify.app_logo.png",
        title: "Netlify",
        subtitle: "Netlify incorpora funcionalidade sem servidor em sua web",
        text: "Netlify é a plataforma de desenvolvimento moderna para empresas obterem a velocidade, agilidade e desempenho de uma arquitetura web escalável e combinável.",
        link: "https://www.netlify.com/"
    },
    {
        image:
            "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UWpmhI3AEdFY7gjHIZH-2w.png",
        title: "PWA",
        subtitle: "Progressive Web App",
        text: "PWA, ou Progressive Web App, é uma aplicação web desenvolvida usando tecnologias específicas " +
            "para aproveitar recursos de apps nativos e da web. É como um site feito usando tecnologias da web, " +
            " mas que parece um app. Uma aplicação web é um PWA quando atende requisitos como funcionar offline, " +
            " ser instalável e enviar notificações. ",
        link: ""
    },
];
</script>

<style></style>