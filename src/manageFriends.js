export function manageFriends(state = { friends : [] }, action) {
  // your code here
  switch(action.type) {
    case "friends/add":
      return {friends: [...state.friends, {...action.payload}] };
    case "friends/remove":
      const newFriends = state.friends.filter(f => f.id !== action.payload);
      return {friends: newFriends};
    default:
      return state;
  }
}
