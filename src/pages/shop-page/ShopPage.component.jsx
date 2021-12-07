import React from 'react';
import ShopPageBanner from '../../components/shop-page-banner/ShopPageBanner.component';
import ShopPageContainer from './ShopPage.styles';
import './ShopPage.styles.css';
import { connect } from 'react-redux';
import { fetchCategoriesStart, setIsShopping } from '../../redux/shop/shop.action';
import CategoriesPreview from '../../components/categories-preview/CategoriesPreview.component';
import Showcase from '../../components/showcase/Showcase.component';
import Footer from '../../components/footer/footer.component';
import { createStructuredSelector } from 'reselect';
import { 
    selectCategories, 
    selectIsCategoriesLoading, 
    selectProducts 
} from '../../redux/shop/shop.selectors';
import { convertCategoryMapToArray } from '../../redux/shop/shop.utils';
import Loader from '../../components/Loader/Loader.component';
import products from '../../data/products';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { toggleShoppingMode, startFetchingCategories } = this.props;
        toggleShoppingMode(true);
        document.body.style.overflow = 'auto';
        // startFetchingCategories();
    }
    
    render() {
        const { isLoading, categories, products } = this.props;
        console.log(isLoading);
        return(
            // <Loader isLoading={isLoading}>
                <ShopPageContainer>
                    <ShopPageBanner 
                        imageUrl="https://s4.uupload.ir/files/shop-page1_fqhm.jpg"
                        reverse={false}
                        backgroundColor="#D4E9E2"
                        title="همکاری با سوپر مارکت های
                        سراسر کشور"
                        textContent="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />
        
                    <ShopPageBanner 
                        imageUrl="https://s4.uupload.ir/files/shop-page2_9psn.jpg"
                        reverse={true}
                        backgroundColor="#F8D240"
                        title="تحویل فوری 
                        و امن سفارشات شما"
                        textContent="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است." />  
        
                    <CategoriesPreview items={convertCategoryMapToArray(categories)} />

                    <Showcase id={'-one'} items={products.slice(0, 10)} title="تازه های سبد" url='/shop/products/newest' backgroundColor='#D4E9E2'/>
                    <Showcase id={'-two'} items={products.slice(11, 20)} title="محبوب ترین های هفته" url='/shop/products/most_popular' backgroundColor='#f4f4f4'/>

                    <Footer />
                </ShopPageContainer>
            /* </Loader> */
        )
    }
}

const mapDispatchToProps = dispatch => ({
    toggleShoppingMode: (isShopping) => dispatch(setIsShopping(isShopping)),
    startFetchingCategories: () => dispatch(fetchCategoriesStart())
});

const mapStateToProps = createStructuredSelector({
    categories: selectCategories,
    products: selectProducts,
    isLoading: selectIsCategoriesLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);