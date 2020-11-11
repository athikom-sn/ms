<template>
    <div>
        <ul class="list-unstyled">
            <b-media tag="li" class="mx-2">
                <h3 class="mt-0 mb-1 text-left">{{ data.header }}</h3>
                <hr />
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