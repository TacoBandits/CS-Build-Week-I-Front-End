import axios from 'axios'; 
const key = localStorage.getItem('key');
const instance = axios.create()
instance.defaults.headers.common['Authorization'] = `Token ${key}`

export default instance 

// axios.get("https://tacobandits.herokuapp.com/api/adv/get_rooms/", {Authorization: `Token ${key}`}).then(res => {
//     this.setState({rooms: res.data.room_list})
//     }).catch(error => console.log(error))