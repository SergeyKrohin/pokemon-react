import {urls as url} from '../../vars/urls';

export const invoke = (method, endPoint, body = null) => {

    return fetch(
    url.main +  endPoint,
    {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: body
        }
    ).then(res => res.json())
}