export enum ChatRoomEventType {
  NEW_MESSAGE = 'new-message',
  NEW_ROOM = 'new-room',
  USER_TYPING = 'user-typing',
  MEMBERS_ADDED = 'members-added',
  MEMBERS_REMOVED = 'members-removed',
  ROOM_DELETED = 'room-deleted',
  MESSAGE_DELETED = 'message-deleted',
  MESSAGE_UPDATED = 'message-updated',
  MESSAGE_PINNED = 'message-pinned',
  MESSAGE_UNPINNED = 'message-unpinned',
  FORWARD_MESSAGES = 'forward-messages',
  ROOM_UPDATED = 'room-updated',
  CLEAR_HISTORY = 'clear-history',
  USER_LEFT = 'user-left',
  OWNERSHIP_UPDATED = 'ownership-updated',
  USER_DELETED = 'user-deleted',
  REACTION_ADDED = 'reaction-added',
  REACTION_REMOVED = 'reaction-removed',
  NEW_ACTIVITIES = 'new-activities',
}
