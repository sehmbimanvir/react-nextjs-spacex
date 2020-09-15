export const SpaceService = {
  baseUrl: 'https://api.spacexdata.com/v3/launches',

  async get (params = {}) {
    let paramsObj = { ...params }
    paramsObj.limit = 100
    let searchParams = new URLSearchParams(paramsObj)
    let data = []
    try {
      let response = await fetch(`${this.baseUrl}?${searchParams}`)
      data = this.getData(await response.json())
    } catch (err) {
      console.log('err', err)
      data = []
    }
    return data
  },

  getData (items) {
    return items.map((
      { flight_number, mission_name, mission_id: missions, launch_year, launch_success, links: { mission_patch_small: thumbnail } }
    ) => {
      return {
        flight_number, mission_name, missions, launch_year, launch_success, thumbnail
      }
    })
  }
}