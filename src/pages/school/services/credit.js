import request from '../../../utils/request'

export function getToken (data) {
  console.log(data)
  // return ajax(`http://www.1v1.one:9902/v2/rest/getToken/`);

  return request ({
    url: 'http://www.1v1.one:9902/v2/rest/getToken/',
  })
}

