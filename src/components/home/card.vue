<template>
    <div class="card">
        <div class="card-header">
            <h4 class="card-title">{{ endpointItem.title }}</h4>
        </div>
        <div class="card-body">
            <p class="card-text">
                <button class="btn btn-outline-dark"> {{ endpointItem.method }}</button>
                {{endpointItem.url}}
            </p>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Parameter</th>
                        <th scope="col">Key</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="parameter in endpointItem.parameters">
                        <td>{{parameter.key}}</td>
                        <td>{{parameter.value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: ["endpointItem"]
};
</script>

<style lang="scss" scoped>
.btn-outline-dark:hover {
    @extend .btn-outline-dark;
    background: transparent;
    color: #27292D;
  }
</style>
