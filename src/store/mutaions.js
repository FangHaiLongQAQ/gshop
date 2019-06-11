/*
  直接更新state多个方法的对象
*/
import Vue from 'vue';
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
} from './mutaion-types';

export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address;
  },

  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys;
  },

  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops;
  },

  [RECEIVE_USER_INFO] (state, { userInfo }) {
    state.userInfo = userInfo;
  },

  [RESET_USER_INFO] (state) {
    state.userInfo = {};
  },

  [RECEIVE_GOODS] (state, { goods }) {
    state.goods = goods;
  },

  [RECEIVE_RATINGS] (state, { ratings }) {
    state.rating = ratings;
  },

  [RECEIVE_INFO] (state, { info }) {
    state.info = info;
  },

  [INCREMENT_FOOD_COUNT] (state, { food }) {
    if (!food.count) { // 第一次增加
      // food.count = 1;  // 新增属性(没有数据绑定)
      /**
       * 对象
       * 属性名
       * 属性值
       */
      Vue.set(food, 'count', 1) // 让新增的属性也有属性绑定
      // 将food添加cartFoods中
      state.cartFoods.push(food);
    } else {
      food.count++;
    }
  },

  [DECREMENT_FOOD_COUNT] (state, { food }) {
    if (food.count) { // 只有有值才去减
      food.count--;
      if (food.count === 0) {
        // 将food从cartFoods中移除
        state.cartFoods.splic(state.cartFoods.indexOf(food), 1);
      }
    }
    
  },


}