import { type RouteConfig, route , layout } from "@react-router/dev/routes";

export default [
    route('sign-up','routes/root/sign-up.tsx'),
    layout('routes/admin/admin-layout.tsx',[
        route('dashboard','routes/admin/dashboard.tsx'),
        route('all-users','routes/admin/all-users.tsx')
    ])
] satisfies RouteConfig;