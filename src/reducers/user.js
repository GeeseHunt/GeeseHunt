const initialUserState = { id: '', displayName: '', avatarUrl: '' };

export default function user(state = initialUserState, action) {
  switch (action.type) {
    default:
      break;
  }

  return { ...state };
}
