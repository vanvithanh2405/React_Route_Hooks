import HomeHeader from "../../Components/HomeHeader/HomeHeader"
import { Route } from "react-router"
import HomeCarousel from "../../Components/Carousel/HomeCarousel"
import SlickCarousel from "../../Components/SlickCarousel/SlickCarousel"





export const HomeTemplate = (props) => {
    // props {path:'/home', component:Home}


    return <Route exact path={props.path} render={(propsRoute) => {

        return <div>
            <HomeHeader {...propsRoute} />
            <HomeCarousel />
            <SlickCarousel />
            <props.component {...propsRoute} />
        </div>
    }} />
}