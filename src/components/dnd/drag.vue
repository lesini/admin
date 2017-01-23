<script>
    export default {
        props: {
            type: {
                type: String,
                required: true
            }
        },
        methods: {
            dragStart(e) {
                e.dataTransfer.effectAllowed = 'copy'
                e.dataTransfer.setData('text/plain', this.type)
            },
            dragEnd(e) {
                e.dataTransfer.clearData('text/plain')
            },
            bindEvents() {
                this.$el.addEventListener('dragend', this.dragEnd, false)
                this.$el.addEventListener('dragstart', this.dragStart, false)
            },
            unbindEvents() {
                this.$el.removeEventListener('dragend', this.dragEnd)
                this.$el.removeEventListener('dragstart', this.dragStart)
            }
        },
        render() {
            return this.$slots.default[0]
        },
        mounted() {
            this.bindEvents()
            this.$el.setAttribute('draggable', true)
        },
        beforeDestroy() {
            this.unbindEvents()
            this.$el.removeAttribute('draggable')
        }
    }
</script>