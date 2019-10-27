import { Alert } from "react-native";

const initialState = {
  history: [],
  results: []
};

export const types = {
  ADD_TO_HISTORY: "ADD_TO_HISTORY",
  SET_RESULTS: "SET_RESULTS"
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_HISTORY:
      return {
        ...state,
        history: action.payload.history
      };
    case types.SET_RESULTS:
      return {
        ...state,
        results: action.payload.results
      };
    default:
      return state;
  }
}

const setResults = payload => ({
  type: types.SET_RESULTS,
  payload
});

const addToHistory = payload => ({
  type: types.ADD_TO_HISTORY,
  payload
});

const findPlaces = (lat, long) => {
  return async (dispatch, getState) => {
    try {
      const foursquareResponse = await fetch(
        `https://api.foursquare.com/v2/venues/search?client_id=RMBWVLGMQ4UNTRD4SD1QUDJPUUHNNRGMTLH0EYYKNFTMFG1T&client_secret=OYUMXYCSXYHQ1LI501PO54DWGT2R50S5HZ5ICA2WAQCNOFG5&v=20180323&limit=1&ll=${lat},${long}&query=restaurant`,
        {
          headers: {
            "Cache-Control": "no-cache",
            "Accept-Encoding": "gzip, deflate"
          }
        }
      );
      const serializedResponse = await foursquareResponse.json();
      dispatch(
        setResults({
          results: serializedResponse.response.venues.map(venue => ({
            address: venue.location.address,
            name: venue.name
          }))
        })
      );
      dispatch(
        addToHistory({
          history: [
            ...getState().finder.history,
            {
              date: new Date(),
              location: `lat: ${lat} - long ${long}`,
              places: serializedResponse.response.venues || []
            }
          ]
        })
      );
    } catch (err) {
      console.log("ERROR::::: ", err);
      dispatch(setResults({ payload: { results: [] } }));
      addToHistory({
        history: [
          ...getState().finder.history,
          {
            date: new Date(),
            location: `lat: ${lat} - long ${long}`,
            places: []
          }
        ]
      });
      Alert.alert("SOMETHING WENT WRONG: ", err);
    }
  };
};

const setUser = user => ({
  type: types.SET_USER,
  payload: user
});

export default Actions = {
  findPlaces,
  setUser
};
