export enum BookMarkActionTypes {
    BEGIN_BOOKMARKS_DOWNLOAD = '@@BEGIN_BOOKMARKS_DOWNLOAD',
    BOOKMARKS_DOWNLOAD_OK = '@@BOOKMARKS_DOWNLOAD_OK',
    BOOKMARKS_DOWNLOAD_ERROR = '@@BOOKMARKS_DOWNLOAD_ERROR',

    ADD_BOOKMARK = '@@ADD_BOOKMARK',
    ADD_BOOKMARK_OK = '@@ADD_BOOKMARK_OK',
    ADD_BOOKMARK_ERROR = '@@ADD_BOOKMARK_ERROR',

    RETRIEVE_BOOKMARK_DELETE = '@@RETRIEVE_BOOKMARK_DELETE',
    BOOKMARK_DELETED_OK = '@@BOOKMARK_DELETED_OK',
    BOOKMARK_DELETED_ERROR = '@@BOOKMARK_DELETED_ERROR'
}