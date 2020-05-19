import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('http://api.weatherstack.com/current?access_key=bd1369ce292cf512567b71ec38e8c155&query=India')
        .then(response => response.json(), );    
  yield put({ type: "WEATHER_RECEIVED", data: json.location, });
}
function* actionWatcher() {
     yield takeLatest('FETCH_WEATHER', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}