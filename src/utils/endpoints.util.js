export const baseUrl = 'http://localhost:5000/';


export const endpointInterpolation = (baseUrl, endpoint, ...params) => {
    const interpolatedEndpoint = params.reduce((old, curr, i) => old.split(`{{${i}}}`).join(curr.toString()), endpoint);
    return baseUrl + interpolatedEndpoint;
  };

  export const service = (endpoint, ...params) => endpointInterpolation(
    baseUrl, endpoint, ...params);


export const setQueryParams = (url, queryParams) => {
    const fullQueryParams = new URLSearchParams(queryParams);
    return `${url}?${fullQueryParams.toString()}`;
};
