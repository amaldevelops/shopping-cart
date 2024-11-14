import HomeCSS from './Home.module.css'
function Home()
{
    return (
        <div >
            <h1>Welcome To Shopping cart developed using React</h1>
            <h2>About</h2>
            <ul>
                <li><a href="https://github.com/1Amal/React-ShoppingCart">Source Code</a></li>
                <li><a href="https://amalk-reactshoppingcart.netlify.app/">Live Demo</a></li>
            </ul>
            <h2>App Architecture</h2>
            <h3>Component Structure</h3>
            <ul className={HomeCSS.list}>
                <li>Main  =&gt; App =&gt; Home =&gt; </li>
                <li>Shop =&gt; </li>
                <li>Shopping Cart</li>
                <li>Product</li>


            </ul>
        </div>
    )
}

export default Home;