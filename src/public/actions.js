export function showModal() {
  return { type: 'SHOW_MODAL', payload: true };
}

export function hideModal() {
  return { type: 'HIDE_MODAL', payload: false };
}
