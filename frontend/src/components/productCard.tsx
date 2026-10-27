
import { ProductCardProps } from "../models/productModel";


export const ProductCard = ({ product, toggleAvailability }:ProductCardProps) => {
	return (
		<li>
			<h3>{product.name}</h3>
			<p className="price">{product.price} kr</p>

			<p className={product.sold ? "buttonTrue" : "buttonFalse"}>
				{product.sold ? "Finns i lager" : "Slut i lager"}
			</p>

			<button
				className="productButton"
				onClick={() => toggleAvailability(product.name)}
			>
				Ändra lagerstatus
			</button>
		</li>
	);
};



