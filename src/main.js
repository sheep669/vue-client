/*
 * @Author: sheep669
 * @Description: 
 * @Date: 2022-09-19 20:40:42
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Button from 'vant/lib/button';
import 'vant/lib/button/style';
import Tabbar from 'vant/lib/tabbar';
import 'vant/lib/tabbar/style';
import TabbarItem from 'vant/lib/tabbar-item';
import 'vant/lib/tabbar-item/style';
import NavBar from 'vant/lib/nav-bar';
import 'vant/lib/nav-bar/style';
import Icon from 'vant/lib/icon';
import 'vant/lib/icon/style';
import Grid from 'vant/lib/grid';
import 'vant/lib/grid/style';
import GridItem from 'vant/lib/grid-item';
import 'vant/lib/grid-item/style';
import Image from 'vant/lib/image';
import 'vant/lib/image/style';
import Search from 'vant/lib/search';
import 'vant/lib/search/style';
import Card from 'vant/lib/card';
import 'vant/lib/card/style';
import Swipe from 'vant/lib/swipe';
import 'vant/lib/swipe/style';
import SwipeItem from 'vant/lib/swipe-item';
import 'vant/lib/swipe-item/style';
import Tag from 'vant/lib/tag';
import 'vant/lib/tag/style';
import TreeSelect from 'vant/lib/tree-select';
import 'vant/lib/tree-select/style';
import Field from 'vant/lib/field';
import 'vant/lib/field/style';
import Stepper from 'vant/lib/stepper';
import 'vant/lib/stepper/style';
import Cell from 'vant/lib/cell';
import 'vant/lib/cell/style';
import CellGroup from 'vant/lib/cell-group';
import 'vant/lib/cell-group/style';
import CheckBox from 'vant/lib/checkbox';
import 'vant/lib/checkbox/style';
import CheckboxGroup from 'vant/lib/checkbox-group';
import 'vant/lib/checkbox-group/style';
import SubmitBar from 'vant/lib/submit-bar';
import 'vant/lib/submit-bar/style';


import { Lazyload } from 'vant';
Vue.use(Lazyload);
Vue.use(SubmitBar);
Vue.use(CheckBox);
Vue.use(CheckboxGroup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(TreeSelect);
Vue.use(Stepper);
Vue.use(Tag);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Card);
Vue.use(Search);
Vue.use(Image);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
