export type IAvatarInitials = [string, string?]

export interface IAvatar {
    img: string | null
    color: string | null
    initials: IAvatarInitials | null
}
