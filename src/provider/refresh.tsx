import createRefresh from 'react-auth-kit/createRefresh';

export const refresh = createRefresh({
  interval: 10,
  refreshApiCallback: async (param) => {
    try {
      // const response = await axios.post("/refresh", param, {
      //   headers: {'Authorization': `Bearer ${param.authToken}`}
      // })
      console.log(param)
      console.log("Refreshing")
      return {
        isSuccess: true,
        newAuthToken: 'abc111',
        newAuthTokenExpireIn: 10,
        newRefreshTokenExpiresIn: 60
      }
    }
    catch(error){
      console.error(error)
      return {
        isSuccess: false,
        newAuthToken: '',  // Set default values for all expected fields
        newAuthTokenExpireIn: 0,
        newRefreshTokenExpiresIn: 0
      } 
    }
  },
})