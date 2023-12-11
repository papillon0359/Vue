<template>
    <ContentBase>
<<<<<<< HEAD
        å¥½å‹åˆ—è¡¨
=======
        ºÃÓÑÁÐ±í
>>>>>>> 97f9c9c (11)
    </ContentBase>
</template>
  
<script>
import ContentBase from '../components/ContentBase';
<<<<<<< HEAD
import $ from 'jquery';
import { ref } from 'vue';
=======
>>>>>>> 97f9c9c (11)

export default {
    name: 'UserListView',
    components: {
        ContentBase,
<<<<<<< HEAD
    },
    setup() {
        let users = ref([]);

        $.ajax({
            url: 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type:"get",
            success(resp){
                console.log(resp); 
            }
        });

        return {
            users,
        };
=======
>>>>>>> 97f9c9c (11)
    }
}
</script>
  
<style scoped>

</style>