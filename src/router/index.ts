import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/index.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Layout,
			redirect: "/bikes",
			children: [
				{
					path: "bikes",
					name: "Bikes",
					component: () => import("../views/bikes/index.vue"),
					meta: { title: "单车管理" },
				},
				{
					path: "users",
					name: "Users",
					component: () => import("../views/users/index.vue"),
					meta: { title: "用户管理" },
				},
				{
					path: "orders",
					name: "Orders",
					component: () => import("../views/orders/index.vue"),
					meta: { title: "订单管理" },
				},
			],
		},
	],
});

export default router;
