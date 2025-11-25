import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_LINK } from "../config";

export default function useContent() {
	const [contents, setContents] = useState([]);

	useEffect(() => {
		axios
			.get(`${BACKEND_LINK}/content`, {
				headers: { authorization: localStorage.getItem("jwt") },
			})
			.then((response) => {
                if (Array.isArray(response.data.content)) {
                    setContents(response.data.content);
				} else {
					console.error("API response.data.content is not an array:", response.data);
					setContents(Array.from(response.data.content));
				}
			})
			.catch((e) => {
				console.log("error", e);
			});
	}, []);

	return contents;
	{
		/* <Card
            title="hello"
            link="https://www.youtube.com/embed/LdPp6ikd3Qw?si=xTGqjf802-uzA6cI"
            type="youtube"
        />
        <Card title="hello" link="https://www.youtube.com/embed/8nX9P3Is8N8" type="youtube" />
        <Card
            title="hello"
            link="https://www.youtube.com/watch?v=PvLz5kCVIss&list=RDPvLz5kCVIss&start_radio=1"
            type="youtube"
        />
        <Card
            title="hello"
            link="https://twitter.com/positronx_/status/1994904729072406835"
            type="twitter"
        />
        <Card title="hello" link="https://x.com/memoizedk/status/1994689820493509088" type="twitter" />
        <Card title="hello" link="https://x.com/purusa0x6c/status/1995049799318680004" type="twitter" /> */
	}
	// return <div className="">hi</div>;
}
