import { h } from "vue"
import { EnumUserRoles } from "@/utils/enums";
import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
    {
        path: "",
        component: () => import("@/layout/default.vue"),
        meta: {
            roles: Object.values(EnumUserRoles),
        },
        children: [
            {
                path: EnumUserRoles.ADMIN,
                component: { render: () => h(RouterView) },
                meta: {
                    roles: [EnumUserRoles.ADMIN],
                },
                children: [
                    {
                        path: '',
                        component: () => import("@/views/admin/index.vue"),
                    },
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
