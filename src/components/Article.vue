<template>
    <div>
        <ul class="list-unstyled">
            <b-media tag="li" class="mx-2">
                <!-- <template #aside>
                    <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
                </template> -->
                <h4 class="mt-0 mb-1">{{ data.header }}</h4>
                <p class="mb-0 mt-2 text-left" style="text-indent: 24px">
                    {{ data.content }}
                </p>
            </b-media>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['data'], 
}
</script>