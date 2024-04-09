const app = Vue.createApp({
    data() {
        return {
            animeData: null
        }
    },
    mounted() {
        this.fetchAnimeData()
    },
    methods: {
        async fetchAnimeData() {
            try {
                const response = await fetch('https://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=4658')
                const xmlData = await response.text()
                console.log(xmlData)
                this.animeData = xmlData
            } catch (error) {
                console.error('Error fetching anime data:', error)
            }
        }
    }
})

app.mount('#app')