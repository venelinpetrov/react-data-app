import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
const Page = props => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default Page;