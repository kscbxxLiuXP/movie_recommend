
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom"
import { routers } from "./routers";
import MainContainer from './components/MainContainer';
import './App.css';
import 'antd/dist/antd.css';


function App(props) {
    return (
        <BrowserRouter>
            <MainContainer>
                <Switch>
                    {/*从路由配置中匹配页面*/}
                    {routers.map(route => {
                        return (
                            <Route
                                key={route.path}
                                {...route}
                                //显示在正文内容中的组件
                                render={routeProps => {
                                    return <route.component {...routeProps} />
                                }} />
                        );
                    })}
                    <Redirect to={"/404"} />
                </Switch>
            </MainContainer>
        </BrowserRouter>
    );
}

export default App;
