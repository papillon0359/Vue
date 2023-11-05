<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo/>
            </div>
            <div class="col-9">
                <UserProfilePosts/>
            </div> 
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from '../components/ContentBase';
import UserProfileInfo from '../components/UserProfileInfo';
import UserProfilePosts from '../components/UserProfilePosts';

export default {
    name: 'UserProfileView',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts
    }
}
</script>
  
<style scoped>
</style>