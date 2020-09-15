export const SpaceService = {
  baseUrl: 'https://api.spacexdata.com/v3/launches',

  get (params = {}) {
    let paramsObj = { ...params }
    paramsObj.limit = 100
    let searchParams = new URLSearchParams(paramsObj)
    return fetch(`${this.baseUrl}?${searchParams}`).then(res => res.json()).then(this.getData)
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