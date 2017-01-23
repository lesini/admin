<script>
    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                children: []
            }
        },
        methods: {
            drop(e) {
                e.preventDefault()
                e.stopPropagation()

                let layer = this.data[e.dataTransfer.getData('text/plain')]

                if (layer) {
                    this.children = [...this.children, createElement(this._c, layer, this.data)]
                }
            },
            dragEnter(e) {
                e.preventDefault()
                e.stopPropagation()
                // console.log('enter')
            },
            dragOver(e) {
                e.preventDefault()
                e.stopPropagation()
                // console.log('over')
            },
            dragLeave(e) {
                e.preventDefault()
                e.stopPropagation()
                // console.log('leave')
            },
            bindEvents() {
                this.$el.addEventListener('drop', this.drop, false)
                this.$el.addEventListener('dragover', this.dragOver, false)
                this.$el.addEventListener('dragenter', this.dragEnter, false)
                this.$el.addEventListener('dragleave', this.dragLeave, false)
            },
            unbindEvents() {
                this.$el.removeEventListener('drop', this.drop)
                this.$el.removeEventListener('dragover', this.dragOver)
                this.$el.removeEventListener('dragenter', this.dragEnter)
                this.$el.removeEventListener('dragleave', this.dragLeave)
            }
        },
        render(h) {
            if (this.children.length) {
                this.$slots.default[0].children = this.children
            }
            
            return this.$slots.default[0]
        },
        mounted() {
            this.bindEvents()
        },
        beforeDestroy() {
            this.unbindEvents()
        }
    }

    function createElement(h, options, data) {
        options = Object.assign({}, { children: [] }, options)
        
        return h('Drop', {
            props: { data }
        }, [
            h(options.tag, options, options.children.map((item) => createElement(h, item, data)))
        ])
    }

    function assign(receiver, supplier) {
        if (Array.isArray(supplier)) {
            receiver = supplier.map((item, index) => {
                if (Array.isArray(item)) {
                    return assign([], item)
                } else if (isObject(item)) {
                    return assign({}, item)
                } else {
                    return item
                }
            })
        } else {
            for (let key in supplier) {
                if (supplier.hasOwnProperty(key) && key !== 'prototype') {
                    if (Array.isArray(supplier[key])) {
                        receiver[key] = assign([], supplier[key])
                    } else if (isObject(supplier[key])) {
                        receiver[key] = assign({}, supplier[key])
                    } else {
                        receiver[key] = supplier[key]
                    }
                }
            }
        }
        
        return receiver
    }

    function isObject(obj) {
        return typeof obj === 'object' && !!obj
    }

    function guid() {
        let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)

        return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
    }
</script>