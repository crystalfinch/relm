// Modules
import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import data from '../data';

const defaultListingsState = data;

function listings(state = defaultListingsState, action) {
	let newState;
	switch (action.type) {
		case actionTypes.ADD_LISTING:
			newState = [...state];
			newState.push(action.listing);
			return newState;

		case actionTypes.EDIT_LISTING:
			newState = [...state];
			newState[action.id] = action.listing;
			return newState;

		case actionTypes.REMOVE_LISTING:
			newState = [...state];
			newState.splice(action.index, 1);
			return newState;

		case actionTypes.REMOVE_ALL_LISTINGS:
			newState = [];
			return newState;

		default:
			return state;
	}
}


const defaultProfileState = {
	"firstName": "Phil",
	"lastName": "Dunphy",
	"email": "phildunphy@mfrealty.com",
	"phone": "(323) 555-5555",
	"company": "Modern Family Realty"
	//"photo": "photos/phil.jpg"
};

function profile(state = defaultProfileState, action) {
	let newState;
	switch (action.type) {
		case actionTypes.EDIT_PROFILE:
			newState = {
				"firstName": action.details.firstName,
				"lastName": action.details.lastName,
				"email": action.details.email,
				"phone": action.details.phone,
				"company": action.details.company
				//"photo"
			}
			return newState;

		default:
			return state;
	}
}

const rootReducer = combineReducers({
	profile,
	listings
});

export default rootReducer;
