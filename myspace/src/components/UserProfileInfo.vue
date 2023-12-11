<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/230309_lg_baffee6240.jpg"
                        alt="">
                </div>
                <div class="col-9">
<<<<<<< HEAD
                    <div class= "username">{{ fullName }}</div>
                    <div class= "fans">粉丝数:{{ user.followerCount }}</div>
                    <button @click="follow" v-if = "!user.is_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
                    <button @click="unfollow" v-if = "user.is_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>
=======
                    <div class="username">Guoxi Zhu</div>
                    <div class='fans'>粉丝数:124</div>
                    <button type="button" class="btn btn-secondary">+关注</button>
>>>>>>> 97f9c9c (11)
                </div>
            </div>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
import {computed} from 'vue';

export default {
    name: "UserProfileInfo",
    props:{
        user:{
            type: Object,
            requierd: true,
        },
    },
    setup(props,context){
        let fullName = computed(() => props.user.lastname + ' ' + props.user.firstname);

        const follow = () => {
            context.emit("follow");
        }

        const unfollow = () => {
            context.emit("unfollow");
        }

        return {
            fullName,
            follow,
            unfollow,
        }
    }
=======
export default {
    name: "UserProfileInfo"
>>>>>>> 97f9c9c (11)
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.fans {
    font-size: 12px;
    color: gray;
}

button {
    padding: 2px 4px;
    font-size: 12px;
}
</style>