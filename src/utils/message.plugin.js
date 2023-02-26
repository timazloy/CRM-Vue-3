import M from 'materialize-css'

export function toast(text) {
    M.toast({html: text})
}
export function toastError(text) {
    M.toast({html: `[ошибка] ${text}`})
}
