import Index from "../components/Index/Index";
import Login from "../components/Login/Login";

const routes = [
    {
        'name': 'login',
        'path': '/login',
        'component': Login,
    },
    {
        'name': 'index',
        'path': '/',
        'component': Index,
        'roles': ['ROLE_USER'],
    },
 ];