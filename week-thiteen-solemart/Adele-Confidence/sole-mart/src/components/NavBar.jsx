
const NavBar = () => {

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
        { name: "Product Listing Page", path: "/products" },
        { name: "Sign Up", path: "/signup" },
    ];

    return (
        <nav className="py-8 flex justify-between items-center">
            <div>
                <img src="/logo.png" alt="" />
            </div>
            <ul className="flex gap-8">
                {navLinks.map(link => (
                    <li className="text-sm  " key={link.name}>{link.name}</li>
                )
                )}
            </ul>

            <div className="flex gap-8">

                <div className='bg-gray-300'>
                <input type="text" placeholder="what are you looking for?" />
                <img scr="/Google-search.jpg" alt="search icon"/>
                

                </div>
                <img scr="/love icon.png" alt="Lov icon"/>
                <img scr="/Cart.png" alt="Cart icon"/>
                
                
            </div>
        </nav>

       
    )
}

export default NavBar