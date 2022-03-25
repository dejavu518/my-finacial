export default {
    data() {
        return {
            breadlist: [],
        }
    },
    created() {
        this.getBreadcrumb()
    },
    watch:{
        $route(){
            this.getBreadcrumb()
        }
    },
    methods: {
        getBreadcrumb() {
            this.breadlist = this.$route.meta.bread ? this.$route.meta.bread : []
        },
    },
}