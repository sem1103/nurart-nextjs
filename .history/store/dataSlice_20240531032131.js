

import useLoaderSlice from './loaderSlice';
import { create } from 'zustand';
import { devtools } from 'zustand-devtools';
import useAzerbaijaniNormalization from '../hooks/useAzetoEng';
import i18next from 'i18next';




const useDataSlice = create(
    devtools(
        (set, get) => ({
            imagesLoaded: false,
            campaignSlides: [],
            promotionItems : [],
            searchInput: '',
            items: {
                polygraphy: [],
                shtamp: [],
                plastic: [],
                promo: [],
                vinil: []
            },
            allItems: {
                polygraphy: [],
                shtamp: [],
                plastic: [],
                promo: [],
                vinil: []
            },
            filters: {
                polygraphy: [],
                shtamp: [],
                plastic: [],
                promo: [],
                vinil: []
            },
            activeCategory: '',
            activeCategoryLabel: '',
            favoriteItems: [],
            cartItems: [],
            setOnloadImg : (state) => {
                set(() => ({imagesLoaded : state}))
            },
            fetchPromotionItems: async () =>{
                try {
                    let data = await fetch('http://localhost/wp-json/wp/v2/promotion__items/').then(res => res.json());

                    let promotions = data[0].acf.promotions;
                    set(() => ({promotionItems: promotions}));
                } catch (error) {
                    
                }
            },
            fetchCampaignSlides: async () =>{
                try {
                    let data = await fetch('http://localhost/wp-json/wp/v2/campaign_slider/').then(res => res.json());

                    let slides = data[0].acf.slide;
                    set(() => ({campaignSlides: slides}));
                } catch (error) {
                    
                }
            },

            fetchData: async (data) => {
                try {
                    let differentItems = [];
                    set(() => ({ activeCategory: '' }))
                    set(() => ({ activeCategoryLabel: '' }))
                    useLoaderSlice.getState().changeLoader(true);
                    get().getFavoriteItems();
                    get().getCartItems();
                    const data = await fetch(mainUrl).then(res => res.json());
                    const items = await Promise.all(data[0].acf.items.map(async item => {
                        item.boxImg = data[0].acf.boxImg;
                        return item;
                    }));
                    const paintItem = data[0].acf.paint ? await Promise.all(data[0].acf.paint.map(async item => {
                        return item;
                    })) : [];




                    differentItems = [].concat(items, paintItem);


                    let type;

                    switch (true) {
                        case mainUrl.includes('poliqrafiya'):
                            type = 'polygraphy';
                            break;
                        case mainUrl.includes('shtamp'):
                            type = 'shtamp';
                            break;
                        case mainUrl.includes('plastic'):
                            type = 'plastic';
                            break;
                        case mainUrl.includes('promo'):
                            type = 'promo';
                            break;
                        case mainUrl.includes('vinil'):
                            type = 'vinil';
                            break;
                        default:
                            break;
                    }
                    set(state => ({
                        items: { ...state.items, [type]: differentItems },
                        allItems: { ...state.allItems, [type]: differentItems },
                        filters: { ...state.filters, [type]: data[0].acf.categories != undefined ? data[0].acf.categories : [] }
                    }));


                    get().checkItemsState();

                    useLoaderSlice.getState().changeLoader(false);

                } catch (error) {
                    console.error('Ошибка:', error);
                }
            },
            filterByCategory: (category, type, label = get().activeCategoryLabel) => {
                set(() => ({ activeCategory: category }));
                get().setActiveCategoryLabel(label);
                get().setInputValue('')
                set(
                    state => ({
                        items: {
                            ...state.items,
                            [type]: state.allItems[type].filter(item => {
                                if (!category) {
                                    return state.allItems[type];
                                }
                                return item.categories[0].value == category;
                            })
                        }
                    }
                    )
                )
            }
            ,
            filterByName: (value, type) => {
                if (!value) {
                    get().filterByCategory(get().activeCategory, type)
                    return;
                }
                set(
                    state => ({
                        items: {
                            ...state.items,
                            [type]: state.allItems[type].filter((item) => {

                                const normalizeAzerbaijani = useAzerbaijaniNormalization();
                                if (i18next.language == 'az') {
                                    if (normalizeAzerbaijani(item.productAz.productName).includes(normalizeAzerbaijani(value.toLowerCase()))) {
                                        if (get().activeCategory) {
                                            return get().activeCategory == item.categories[0].value ? item : false;
                                        } else return item
                                    }
                                }
                                else {
                                    if (item.productRu.productName.toLowerCase().includes(value.toLowerCase())) {
                                        if (get().activeCategory) {
                                            return get().activeCategory == item.categories[0].value ? item : false;
                                        } else return item
                                    }
                                }

                            })
                        }
                    })
                )

            },
            filterByCode: (value, type) => {
                if (!value) {
                    get().filterByCategory(get().activeCategory, type)
                    return;
                }

                set(
                    state => ({
                        items: {
                            ...state.items,

                            [type]: state.allItems[type].filter(item => {
                                if (item.productName.toLowerCase().includes(value.toLowerCase())) {
                                    if (get().activeCategory) {
                                        return get().activeCategory == item.categories[0].value ? item : false;
                                    } else return item;
                                }
                            })
                        }
                    })
                )
            },
            resetItems: () => {
                get().checkItemsState();
                set(state => ({ items: state.allItems }));
                get().setInputValue('');
                set(() => ({ activeCategory: '' }))
                set(() => ({ activeCategoryLabel: '' }))
            },
            setInputValue: (value) => {
                set(() => ({ searchInput: value }))
            },
            setActiveCategoryLabel: label => {
                set(() => ({ activeCategoryLabel: label }))
            },
            checkItemsState: () => {
                
                let newObj = {};
                for(let key in get().allItems){
                    newObj[key] = get().allItems[key].map(item => {
                        if(get().favoriteItems.length){
                            item.favorite = get().favoriteItems.some(element => item.img === element.img);
                        } else item.favorite = false;

                        if(get().cartItems.length){
                            item.cartItem = get().cartItems.some(element => item.img === element.img);
                        } else item.cartItem = false;
                       
                        return item;
                    });
                }

                set(state => ({cartItems: state.cartItems.map(item => {
                    if(get().favoriteItems.length){
                        item.favorite = get().favoriteItems.some(element => item.img === element.img);
                    } else item.favorite = false;
                    return item;
                })}))

                set(state => ({favoriteItems : state.favoriteItems.map(item => {
                    if(get().cartItems.length){
                        item.cartItem = get().cartItems.some(element => item.img === element.img);
                    } else item.cartItem = false;
                    return item;
                })}))
                set(state => ({allItems : newObj}));

            },
            addFavoriteItem: (item) => {
                item = { ...item, favorite: true };
                set(state => ({ favoriteItems: [...state.favoriteItems, item] }));
                localStorage.setItem('favorites', JSON.stringify(get().favoriteItems));
                get().checkItemsState();
            },
            removeFavoriteItem: (item) => {
                set(() => ({ favoriteItems: JSON.parse(localStorage.getItem('favorites')).filter(elem => item.img != elem.img) }));
                localStorage.setItem('favorites', JSON.stringify(get().favoriteItems));
                get().checkItemsState();
            },
            getFavoriteItems: () => {
                set(() => ({ favoriteItems: JSON.parse(localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')) : [] }));
                localStorage.setItem('favorites', JSON.stringify(get().favoriteItems));

            },
            addCartItem: item => {
                item = { ...item, cartItem: true };
                set(state => ({ cartItems: [...state.cartItems, item] }));
                localStorage.setItem('cartItems', JSON.stringify(get().cartItems));
                get().checkItemsState();
            },
            getCartItems: () => {
                set(state => ({ cartItems: JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : [] }));
                localStorage.setItem('cartItems', JSON.stringify(get().cartItems));

            },
            removeCartItem: (item) => {
                set(state => ({ cartItems: JSON.parse(localStorage.getItem('cartItems')).filter(elem => item.img != elem.img) }));
                localStorage.setItem('cartItems', JSON.stringify(get().cartItems));
                get().checkItemsState();
            },
            removeCartAllItems : () => {
                set(() => ({cartItems: []}));
                localStorage.removeItem('cartItems');
                get().checkItemsState();
            }
        })
    )
)

export default useDataSlice;