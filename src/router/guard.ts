// import router from '@/plugins/router/index';
// import { useAuth } from '@/store/auth';
// import { RouteLocationNormalized } from 'vue-router';

// export default function setupRouteGuards() {
//   router.beforeEach(async (to, from, next) => {
//     const authStore = useAuth();
//     const role = authStore.user?.user_type;
//     const token = authStore.token;
//     const isRequiredAuth = Array.isArray(to.meta.roles) && to.meta.roles.length ? true : false;
//     const authPath = '/auth/sign-in';
//     if (isRequiredAuth && token) {
//       if (!hasAccess(role, to)) {
//         next(`/error?message=Access Denied: You are not authorized to access this page`);
//       } else {
//         next();
//       }
//     } else if (isRequiredAuth && !token) {
//       next('/auth/sign-in?message=Access Denied: You are not authorized to access this page');
//     } else if (!isRequiredAuth && token) {
//       next(`/${role}`)
//     } else if (!token && to.path !== authPath) {
//       next(authPath)
//     } else {
//       next();
//     }
//   });
// }

// const hasAccess = (userRole: string | undefined, route: RouteLocationNormalized) => {
//   const requiredRoles = route?.meta?.roles as string[];
//   if (requiredRoles) {
//     return requiredRoles.includes(userRole || '');
//   } else {
//     return false;
//   }
// }
