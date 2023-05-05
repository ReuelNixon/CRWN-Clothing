import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

type ContainerProps = {
	categories: {
		id: number;
		title: string;
		imageUrl: string;
	}[];
};

function CategoryContainer(props: ContainerProps) {
	const { categories } = props;
	return (
		<div className="categories-container">
			{categories.map((category) => {
				return (
					<CategoryItem
						id={category.id}
						title={category.title}
						imageUrl={category.imageUrl}
					/>
				);
			})}
		</div>
	);
}

export default CategoryContainer;
