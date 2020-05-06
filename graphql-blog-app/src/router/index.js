/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import Router from 'vue-router';
import SignUp from '@/components/admin/SignUp';
import LogIn from '@/components/admin/logIn';
import Users from '@/components/admin/Users';
import UserDetail from '@/components/admin/UserDetail';
import AddPost from '@/components/admin/AddPost';
import Posts from '@/components/admin/Posts';
import Home from '@/components/Home';
import SinglePost from '@/components/SinglePost';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
    },
    // add these inside the `routes` array
    {
      path: '/admin/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/admin/users/:id',
      name: 'UserDetails',
      component: UserDetail,
      props: true,
    },
    {
      path: '/admin/posts/new',
      name: 'AddPost',
      component: AddPost,
    },
    {
      path: '/admin/posts',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/:slug',
      name: 'SinglePost',
      component: SinglePost,
      props: true,
    },
  ],
});
