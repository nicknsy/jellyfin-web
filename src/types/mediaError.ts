/**
 * Error types used for reporting media playback errors.
 */
export enum MediaError {
    ASS_RENDER_ERROR = 'ASS_RENDER_ERROR',
    FATAL_HLS_ERROR = 'FATAL_HLS_ERROR',
    MEDIA_DECODE_ERROR = 'MEDIA_DECODE_ERROR',
    MEDIA_NOT_SUPPORTED = 'MEDIA_NOT_SUPPORTED',
    NETWORK_ERROR = 'NETWORK_ERROR',
    NO_MEDIA_ERROR = 'NO_MEDIA_ERROR',
    PLAYER_ERROR = 'PLAYER_ERROR',
    SERVER_ERROR = 'SERVER_ERROR'
}