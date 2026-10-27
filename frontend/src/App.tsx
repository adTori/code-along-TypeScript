import { useState } from "react";
import { ProductCard } from "./components/productCard";
import { ProductModel } from "./models/productModel";



function App() {

	const [products, setProducts] = useState<ProductModel[]>([
		{ id: 1, name: "Dator", price: 8000, sold: true },
		{ id: 2, name: "Mus", price: 300, sold: true },
		{ id: 3, name: "Tangentbord", price: 500, sold: false }
	]);



	const name:string = "Molly";
	const age:number = 25;

	

	const toggleAvailability = (productName:string) => {
		setProducts(
			products.map((product) =>
				product.name === productName
					? { ...product, sold: !product.sold }
					: product
			)
		);
	};

	return (
		<main>
			<h1>
				{name}, {age} år
			</h1>
			<h2>Produkter</h2>
			<ul>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						toggleAvailability={toggleAvailability}
					/>
				))}
			</ul>
		</main>
	);
}

export default App;
