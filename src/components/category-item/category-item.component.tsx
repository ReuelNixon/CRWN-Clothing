import "./category-item.styles.scss";

type CategoryProps = {
	id: number;
	title: string;
	imageUrl: string;
};

function CategoryItem(category: CategoryProps) {
	return (
		<div key={String(category.id)} className="category-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${category.imageUrl})`,
				}}
			/>
			<div className="category-body-container">
				<h2>{category.title.toUpperCase()}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
}

export default CategoryItem;
