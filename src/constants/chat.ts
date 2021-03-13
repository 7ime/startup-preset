export enum ETypeChat {
    system = 'system',
    single = 'single',
    group = 'group',
    savedMessages = 'savedMessages'
}

export enum EStatusChat {
    archived = 'archived',
    used = 'used',
}

export enum ETypeSender {
    system = 'system',
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
