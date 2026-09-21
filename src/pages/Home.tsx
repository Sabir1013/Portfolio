import { useEffect, useState } from "react";
import ArticleComponent from "../components/ArticleComponent";

function Home() {
    const txt = "Hello there! I am a second-year undergrad studying mathematics at Case Western Reserve University.";
    return <ArticleComponent text={txt}/>;
}

export default Home;