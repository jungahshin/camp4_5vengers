import router from '../router'

export const Mutations = {
  signUpSuccess (state, payload) {
    console.log('signUpSuccess')
  },
  signUpFail (state, payload) {
    console.log('signUpFail')
  },
  signInSuccess (state, payload) {
    console.log('signInSuccess')
    state.token = payload.data[0].token

    if (payload.data[0].status === 1) router.push('/home')
    else router.push('/auth')
  },
  signInFail (state, payload) {
    console.log('signInFail')
  },
  authSuccess (state, payload) {
    router.push('/home')
  },
  sendMsgSuccess (state, payload) {
    console.log(state)
    console.log(payload)
    console.log('sendMsgSuccess!!')
  },
  sendMsgFail (state, payload) {
    console.log(state)
    console.log(payload)
    console.log('sendMsgFail!!')
  }
}
