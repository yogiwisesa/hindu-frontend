<template>
    <div class="container">
        <h1>Hello! world</h1>
        <div class="row">
            <div class="col-sm-4">
                <Form form="Kidung"> </Form>
            </div>
             <div class="offset-sm-1 col-sm-7">
                <Item form="Kidung"> </Item>
            </div>
        </div>
    </div>
</template>

<script>
import Form from "@/components/mainpage/AddForm.vue";
import Item from "@/components/mainpage/Item.vue";

export default {
  components: {
     Form,
     Item
  },
};
</script>
