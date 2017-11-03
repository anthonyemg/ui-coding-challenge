export function updateName(name) {
  return { type: 'UPDATE_NAME', payload: name };
}

export function toggleNameModal(boolean) {
  return { type: 'TOGGLE_NAME_MODAL', payload: boolean };
}

export function updateAddress(address) {
  return { type: 'UPDATE_ADDRESS', payload: address };
}

export function toggleAddressModal(boolean) {
  return { type: 'TOGGLE_ADDRESS_MODAL', payload: boolean };
}

export function updateFavorites(favorites) {
  return { type: 'UPDATE_FAVORITES', payload: favorites };
}

export function toggleFavoritesModal(boolean) {
  return { type: 'TOGGLE_FAVORITES_MODAL', payload: boolean };
}
