import React from "react"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MainLayout = props => {
    return (
        //react fragment gantinya div jiga div nya gada class ataupun lain lainnya
        <React.Fragment> {/*iki opo, katanya tiny and bit faster*/}
            <NavBar />
            {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default MainLayout