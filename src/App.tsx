import { useEffect, useState } from "react";
import CategoryContainer from "./components/directory/directory.component";

function App() {
	const [data, setData] = useState<
		{
			id: number;
			imageUrl: string;
			title: string;
		}[]
	>([]);

	useEffect(() => {
		fetch("https://api.jsonbin.io/v3/b/64548ff8b89b1e2299973a6b")
			.then((res) => res.json())
			.then((res) => setData(res.record))
			.catch((err) => console.error(`Error: ${err}`));
	}, []);

	return <CategoryContainer categories={data} />;
}

export default App;
