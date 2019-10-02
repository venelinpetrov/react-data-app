import Link from 'next/link';
import AuthButton from './AuthButton';

const Header = (() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/admin">
                        <a>Admin Panel</a>
                    </Link>
                    <AuthButton />
                </div>
            </div>
        </nav>
    )
})

export default Header;