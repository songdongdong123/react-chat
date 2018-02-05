export function getRedirectPath ({type, avatar}) {
  // 根据用户信息，返回跳转地址
  // user.type /boss /genius
  // user.avator /boosinfo /geniusinfo
  console.log(type, avatar)
  // 根据用户的type，返回不同的地址
  let url = (type === 'boss' ? '/boss' : '/genius')
  // 如果用户有图像，说明不用完善信息，反之则需要完善信息，那么久返回对应的完善信息页面
  if (!avatar) {
    url += 'info'
  }
  return url
}