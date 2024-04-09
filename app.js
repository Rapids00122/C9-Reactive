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
                let parser = new DOMParser()
                let xmlDOM = parser.parseFromString(xmlData, 'application/xml')

                const infoNodes = xmlDOM.querySelectorAll('info')
                const episodeCountNode = infoNodes[12]
                const episodeCount = episodeCountNode.textContent.trim()

                const nameAttribute = xmlDOM.querySelector('anime').getAttribute('name')
                console.log(nameAttribute)
                const name = nameAttribute.trim()

                this.animeData = { name, episodeCount }
            } catch (error) {
                console.error('Error fetching anime data:', error)
            }
        }
    }
})

app.mount('#app')