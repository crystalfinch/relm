import * as actionTypes from './actionTypes';

export function editListing(id, listing) {
    return {
        type: actionTypes.EDIT_LISTING,
        id,
        listing
    }
}

export function addListing(listing) {
    return {
        type: actionTypes.ADD_LISTING,
		listing
    }
}

export function removeListing(index) {
    return {
        type: actionTypes.REMOVE_LISTING,
        index
    }
}

export function removeAllListings() {
    return {
        type: actionTypes.REMOVE_ALL_LISTINGS
    }
}

export function editProfile(details) {
    return {
        type: actionTypes.EDIT_PROFILE,
        details
    }
}
