export function showNameModal() {
  return { type: 'SHOW_NAME_MODAL', payload: true };
}

export function hideNameModal() {
  return { type: 'HIDE_NAME_MODAL', payload: false };
}

export function showAddressModal() {
  return { type: 'SHOW_ADDRESS_MODAL', payload: true };
}

export function hideAddressModal() {
  return { type: 'HIDE_ADDRESS_MODAL', payload: false };
}

export function showFavoritesModal() {
  return { type: 'SHOW_FAVORITES_MODAL', payload: true };
}

export function hideFavoritesModal() {
  return { type: 'HIDE_FAVORITES_MODAL', payload: false };
}
