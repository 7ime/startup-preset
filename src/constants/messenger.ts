export enum ETypeChat {
    channel = 'channel',
    single = 'single',
    group = 'group',
    savedMessages = 'savedMessages'
}

export enum EStatusChat {
    archived = 'archived',
    used = 'used',
}

export enum ETypeSender {
    channel = 'channel',
    user = 'user',
    self = 'self'
}

export enum EMessageReadingStatus {
    read = 'read',
    unread= 'unread',
}

export enum EChatNotificationsState {
    disabled = 'disabled',
    enabled = 'enabled',
}

export enum EMessengerModalType {
    deleteChannel = 1
}
