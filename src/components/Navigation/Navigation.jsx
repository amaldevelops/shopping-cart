import NavigationCSS from './Navigation.module.css'
function Navigation()
{
    return (
        
            <div className={NavigationCSS.navigationBar}>
            <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="Shop">Shop</a></li>
                <li><a href="Cart">Cart</a></li>
            </ul>
            </div>
        
    )
}

export default Navigation;