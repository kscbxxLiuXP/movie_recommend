// import Car from "../pages/Car";
import Home from '../pages/Home/index'
import Error404 from "../pages/Error/404";
import Movie from '../pages/Movie';
import MoviePlay from '../pages/MoviePlay';
import TopPopular from '../pages/TopPopular';
import TopRating from '../pages/TopRating';
import Register from '../pages/Register';
import History from '../pages/Hitsory';
import Genres from '../pages/Genres';
import Recommend from '../pages/Recommend';




//这个文件用来存放所有的路由信息，其他地方将通过循环获取此处的路由信息
//注册路由所绑定的组件信息

//主页路由，需要用户登录之后才能够访问的路由
export const routers = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/movie/:id',
        component: Movie,
    },
    {
        path: '/moviePlay/:id',
        component: MoviePlay,
    },
    {
        path: '/top-popular',
        component: TopPopular,
    },
    {
        path: '/top-rating',
        component: TopRating,
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/history',
        component: History,
    },
    {
        path: '/genre/:id',
        component: Genres,
    },
    {
        path: '/recommend',
        component: Recommend,
    },
    // {
    //     path: '/home/car/new',
    //     component: NewCar,
    //     exact: true,
    // },
    // {
    //     path: '/home/car/manage/:id',
    //     component: ViewCar,
    // },
    {
        path: '/404',
        component: Error404,
    }
]