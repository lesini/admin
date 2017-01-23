<style src="./style.css" scoped></style>

<template>
    <div class="workspace">
        <div class="widgets">
            <Drag type="layer1">
                <div class="layer layer__1"></div>
            </Drag>
            <Drag type="layer2">
                <div class="layer layer__2">
                    <div class="layer__split"></div>
                    <div class="layer__split layer__split--last"></div>
                </div>
            </Drag>
            <Drag type="layer3">
                <div class="layer layer__3">
                    <div class="layer__split"></div>
                    <div class="layer__split"></div>
                    <div class="layer__split layer__split--last"></div>
                </div>
            </Drag>
            <Drag type="layer4">
                <div class="layer layer__4">
                    <div class="layer__split"></div>
                    <div class="layer__split"></div>
                    <div class="layer__split"></div>
                    <div class="layer__split layer__split--last"></div>
                </div>
            </Drag>
            <Drag type="layer5">
                <div class="layer layer__5">
                    <div class="layer__split"></div>
                    <div class="layer__split layer__split--last"></div>
                </div>
            </Drag>
        </div>

        <div class="canvas">
            <Drop :data="layers">
                <div class="template" :class="{ 'template--pc': po.type === 'PC', 'template--wap': po.type === 'WAP'}"></div>
            </Drop>
        </div>

        <div class="config">
            <form v-submit.prevent="done">
                <Field label="模版名称" position="top">
                    <Validator name="模版名称" required>
                        <input class="input__box" type="text" v-model="po.name" placeholder="请输入模版名称">
                    </Validator>
                </Field>
                <Field label="模版类别" position="top">
                    <Validator name="模版类别">
                        <Selects size="large" placeholder="请选择模版类别" v-model="po.type">                            
                            <Options value="PC">PC</Options>
                            <Options value="WAP">WAP</Options>
                        </Selects>
                    </Validator>
                </Field>
                <Field label="域名" position="top">
                    <Validator name="域名" required>
                        <input class="input__box" type="text" v-model="po.domain" placeholder="请输入域名">
                    </Validator>
                </Field>

                <input class="save__btn" type="submit" value="保 存">
            </form>
            <a class="cancel__btn" href="">返回列表</a>
        </div>
    </div>
</template>

<script>
    import layers from './layers'

    export default {
        data() {
            return {
                layers,
                po: {
                    name: '',
                    type: 'PC',
                    domain: ''
                }
            }
        },
        methods: {
            done(err) {
                if(err.message) {
                    alert(err.message)
                    return
                }
            }
        }
    }
</script>