<template>
    <ContentBase>
        好友列表
    </ContentBase>
</template>
  
<script>
import ContentBase from '../components/ContentBase';
import $ from 'jquery';
import { ref } from 'vue';

export default {
    name: 'UserListView',
    components: {
        ContentBase,
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
    }
}
</script>
  
<style scoped>

</style>