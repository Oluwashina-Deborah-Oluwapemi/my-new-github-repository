import { createRouter, createWebHistory } from 'vue-router';
import RepoList from '@/components/RepoList.vue';
import RepoDetails from '@/components/RepoDetails.vue';
import NotFound from '@/components/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'RepoList',
    component: RepoList,
  },
  {
    path: '/repos/:name',
    name: 'RepoDetails',
    component: RepoDetails,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;