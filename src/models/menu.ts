import { Effect } from 'dva';
import { Reducer } from 'redux';

import { fetchUserMenuu } from '@/services/menu';

export interface MenuItem {
    path?: string;
    name?: string;
    component?: string;
    routes?: MenuItem[];
}

export interface MenuModelState {
    currentMenu?: MenuItem[];
}

export interface MenuModelType {
    namespace: 'menu';
    state: MenuModelState,
    effects: {
        fetchUserMenuu: Effect
    };
    
    reducers: {
        saveCurrentMenu: Reducer
    }
}

const MenuModel: MenuModelType = {
    namespace: 'menu',

    state: {
        currentMenu: []
    },

    effects: {
        *fetchUserMenuu(_, {call, put}) {
            const response = yield call(fetchUserMenuu);
            yield put({
                type: 'saveCurrentMenu',
                payload: response
            })
        }
    },
    
    reducers: {
        saveCurrentMenu(state, action) {  
            console.log({
                ...state,
                currentMenu: action.payload || []
            }) 
            return {
                ...state,
                currentMenu: action.payload || []
            }
        }
    }
}

export default MenuModel;