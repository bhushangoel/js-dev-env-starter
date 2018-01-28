import 'whatwg-fetch';

export function getData(type) {
    return get(type);
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error);     //eslint-disable-line no-console
}