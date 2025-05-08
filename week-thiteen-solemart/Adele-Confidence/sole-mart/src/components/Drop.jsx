const Drop = () => {
    
            const dropDowns = [
                { name: "Shoe type", path: "/" },
                { name: "Price", path: "/price" },
                { name: "Size selection", path: "/size" },
                { name: "Color", path: "/color" },
                { name: "Material", path: "/material" },
                { name: "Brand", path: "/brand" },
            ];
        
        return (
            <nav className="py-8 flex justify-between items-center">
                   
            <ul className="flex gap-8">
                {dropDowns.map(link => (
                    <li className="text-sm  " key={link.name}>{link.name}</li>
                )
            )}
        

            </ul>
            </nav>
        )
}
       

