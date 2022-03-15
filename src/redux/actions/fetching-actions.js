export const send_request = () => ({ type: 'SEND_REQUEST' })
export const request_success = (payload) => ({ type: 'REQUEST_SUCCESS', payload })
export const request_error = () => ({ type: 'REQUEST_ERROR' })