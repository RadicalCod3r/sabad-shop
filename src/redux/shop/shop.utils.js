export const convertCategoryMapToArray = (categoryMap) => {
    return Object.keys(categoryMap)
        .map(key => categoryMap[key]);
}

export const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
}

export const handleGeneralFilter = (generalFilter, products) => {
  let newProducts = products;
  switch(generalFilter) {
    case 'تازه ترین':
      return products;
    case 'محبوب ترین':
      newProducts.sort((a, b) => {
        return b.sellCounter - a.sellCounter;
      });
      return newProducts;
    case 'ارزان ترین':
      newProducts.sort((a, b) => {
        return a.price - b.price;
      });
      return newProducts;
    case 'گران ترین':
      newProducts.sort((a, b) => {
        return b.price - a.price;
      });
      return newProducts;
    default:
      return products;
  }
}

export const handleBrandFilter = (brandItems, products) => {
  let newProducts = [];
  console.log(brandItems);
  if(brandItems !== undefined && brandItems.length !== 0) {
    newProducts = products.filter(product => {
      return brandItems.includes(product.brand);
    });
    console.log(newProducts);
  } else {
    newProducts = products;
  }
  return newProducts;
}

export const handlePriceRangeFilter = (fromPrice, toPrice, products) => {
  let newProducts = [];
  if((fromPrice <= toPrice) && (toPrice !== 0)) {
    newProducts = products.filter(product => {
      return (product.price >= fromPrice && product.price <= toPrice);
    });
    console.log(fromPrice);
  } else {
    newProducts = products;
  }
  return newProducts;
}

export const handleSearch = (keyword, products) => {
  let newProducts = [];
  if(keyword !== '' && keyword !== null && keyword !== undefined) {
    newProducts = products.filter(product => product.title.includes(keyword));
    console.log(newProducts);
  }
  return newProducts;
}