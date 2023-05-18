import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center md:text-5xl text-xl font-bold mb-5 mt-16">Gallery</h2>
            <Gallery></Gallery>
            <h2 className='text-4xl text-center font-bold  mt-16 mb-10'>Shop By Category</h2>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;