export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Data from '../../data/menu.json';

export function getCategories(){
    return (dispatch) => {

        setTimeout(() => {
            const data  = Data.categories;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);

    };
}
