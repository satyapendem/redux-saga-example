import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../action';
let Button=({fetchWeather})=>(
   <button onClick={fetchWeather}>Click to fetch weather</button>
)
const mapDispatchToProps = {
    fetchWeather: fetchWeather,
};
Button = connect(null,mapDispatchToProps)(Button);
export default Button;