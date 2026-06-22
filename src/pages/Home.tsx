import ArticleComponent from "../components/ArticleComponent";

function Home() {
    let x = "Hello there! I am a student studying mathematics at Case Western Reserve University. I am looking to get into academia and research. My main interest recently has been in abstract algebra. Currently, I am open for any opportunities in finance or other math-related areas.";
    return <ArticleComponent text={x}/>;
}

export default Home;