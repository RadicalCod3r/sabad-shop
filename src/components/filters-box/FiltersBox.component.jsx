import React from 'react';
import SecondaryButtonMedium from '../buttons/secondary-button/SecondaryButtonMedium.styles';
import FormInput from '../form-input/FormInput.component';
import { 
    BrandItems, 
    CostFilter, 
    FiltersContainer, 
    FiltersTitle, 
    GeneralItems, 
    TitleText, 
    BrandItem,
    FilterText,
    FilterCircle,
    FilterTitre
} from './FiltersBox.styles';
import './FiltersBox.styles.css';
import { connect } from 'react-redux';
import { sendFilters } from '../../redux/shop/shop.action';

class FiltersBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            general: '',
            brandItems: [],
            fromPrice: 0,
            toPrice: 0
        }
    }

    getBrands = (items) => {
        let brands = [];
        items.forEach(item => {
            brands.push(item.brand);
        });
    
        let removedDuplicates = [];
        let seen = {};
        for(let i = 0; i < brands.length; i++) {
            if(!(brands[i] in seen)) {
                removedDuplicates.push(brands[i]);
                seen[brands[i]] = true;
            }
        }
        
        return removedDuplicates;
    }

    radioChangeHandler = (e) => {
        this.setState({general: e.target.value});
    }

    checkBoxChangeHandler = (e) => {
        let selectedBrands = this.state.brandItems;
        if(e.target.checked) {
            selectedBrands.push(e.target.name);
            this.setState({brandItems: selectedBrands});
        } else  {
            selectedBrands = selectedBrands.filter(value => value !== e.target.name);
            this.setState({brandItems: selectedBrands});
        }
    }

    fromPriceChangeHandler = (e) => {
        this.setState({fromPrice: e.target.value});
    }

    toPriceChangeHandler = (e) => {
        this.setState({toPrice: e.target.value});
    }

    onFormSubmit = () => {
        const { sendFilters } = this.props;
        if(parseInt(this.state.fromPrice) <= parseInt(this.state.toPrice)) {
            sendFilters(this.state);
        } else if(parseInt(this.state.fromPrice) > parseInt(this.state.toPrice)) {
            alert('???????? ???? ???????????? ???????? ???????? ?????? ????????.');
        } else {
            sendFilters(this.state);
        }
    }

    render() {
        const { items } = this.props;
        let brands = this.getBrands(items);
        return(
            <FiltersContainer>
                <FiltersTitle>
                    <i className="fas fa-bars"></i>
                    <TitleText>?????????? ???? ????????</TitleText>
                </FiltersTitle>
                <GeneralItems>
                    <div>
                        <input 
                            type='radio' 
                            id='newest' 
                            name='generalFilter'
                            value='???????? ????????'
                            className='general-radio'
                            onChange={this.radioChangeHandler} />
                        <label for='newest' className='general-label'>???????? ????????</label>
                    </div>
                    <div>
                        <input 
                            type='radio' 
                            id='most-popular' 
                            name='generalFilter'
                            className='general-radio'
                            value='?????????? ????????'
                            onChange={this.radioChangeHandler} />
                        <label for='most-popular' className='general-label'>?????????? ????????</label>
                    </div>
                    <div>
                        <input 
                            type='radio' 
                            id='cheapest' 
                            name='generalFilter'
                            className='general-radio'
                            value='?????????? ????????'
                            onChange={this.radioChangeHandler} />
                        <label for='cheapest' className='general-label'>?????????? ????????</label>
                    </div>
                    <div>
                        <input 
                            type='radio' 
                            id='most-expensive' 
                            name='generalFilter'
                            className='general-radio'
                            value='???????? ????????'
                            onChange={this.radioChangeHandler} />
                        <label for='most-expensive' className='general-label'>???????? ????????</label>
                    </div>
                </GeneralItems>
                <FilterTitre>
                    <FilterCircle />
                    <FilterText>????????</FilterText>
                </FilterTitre>
                <BrandItems>
                    {brands.map(brand => (
                        <BrandItem key={brand}>
                            <input 
                                type='checkbox' 
                                className='brand-checkbox'
                                name={brand}
                                id={brand}
                                onChange={this.checkBoxChangeHandler} />
                            <span>{brand}</span>
                        </BrandItem>
                    ))}
                </BrandItems>
                <FilterTitre>
                    <FilterCircle />
                    <FilterText>???????? ??????????</FilterText>
                </FilterTitre>
                <CostFilter>
                    <FormInput
                        type='number'
                        reversed={true}
                        logoText='??????????'
                        onInputChanged={this.fromPriceChangeHandler}/>
                    <span>????</span>
                    <FormInput
                        type='number'
                        reversed={true}
                        logoText='??????????'
                        onInputChanged={this.toPriceChangeHandler}/>    
                </CostFilter>
                <SecondaryButtonMedium 
                    style={{margin: '0 4rem'}}
                    onClick={this.onFormSubmit}>
                    ??????????
                </SecondaryButtonMedium>
            </FiltersContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    sendFilters: filters => dispatch(sendFilters(filters))
})

export default connect(null, mapDispatchToProps)(FiltersBox);