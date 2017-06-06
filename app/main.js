/**
 * Created by Administrator on 2017/6/5.
 */
//main.js
/*
var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());
*/

//react
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';


import './css/main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));