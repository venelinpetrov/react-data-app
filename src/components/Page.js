import Navbar from './Navbar';

const Page = props => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default Page;