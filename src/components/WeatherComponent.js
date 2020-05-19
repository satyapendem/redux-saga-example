import React from 'react';
import { connect } from 'react-redux'

class WeatherComponent extends React.Component{

  componentDidMount(){
    console.log("Props", this.props);
    this.props.fetchWeather()
  }
  render(){
    let {weather} = this.props;
    return(
      weather ?
<article >
  {
    console.log("Props", this.props)
  }
  <div>
      <h1>{weather.name}</h1>
      <div className="location-contents">
          <p>{weather.country}</p>
          <p>{weather.region}</p>
          <p>{weather.lat}</p>
          <p>{weather.lon}</p>
          <p>{weather.timezone_id}</p>
          <p>{weather.localtime}</p>

      </div>
  </div>
</article> :
null
    )
  }
}

// let WeatherComponent = ({ weather, fetchWeather }) => (
  
// );
const mapStateToProps = (state) => ({
weather: state.weather,
})

const mapDispatchToProps =(dispatch)=>{
  return {
    fetchWeather: () =>{dispatch({type: "FETCH_WEATHER"})}
  }
}
WeatherComponent = connect(mapStateToProps,mapDispatchToProps)(WeatherComponent)
export default WeatherComponent;