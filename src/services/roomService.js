const BASE_URL = "http://localhost:8080/";

//create room API
export const createRoom = async (payload) => {
    try {
        const res = await fetch(`${BASE_URL}api/v1/rooms/create-room`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        const data = await res.json();
        if (data.success) {
            console.log("room created in db")
            return data;
        } else {
            console.log("else block of createRoom")
            return data
        }
    }
    catch (error){
        console.log("catch block of createRoom", error);
        return null;
    }
};

//join room api
export const JoinRoom = async (payload) => {
    try {
        const res = await fetch(`${BASE_URL}api/v1/rooms/join-room`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        const data = await res.json();
        if (data.success) {
            console.log("joined room")
            return data;
        } else {
            console.log("else block of joinRoom")
            return data;
        }
    }
    catch {
        console.log("catch block of joinRoom");
        return null;
    }
};

//fetch data
export const fetchOldMessages = async (roomId) => {
    try {
        const res = await fetch(`${BASE_URL}api/v1/rooms/${roomId}/messages`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const data = await res.json();
        console.log(data)
        if (data.success) {
            console.log("got the room data")
            return data;
        } else {
            console.log("else block of fetchOldMessages")
            return data;
        }
    }
    catch (error){
        console.log("catch block of fetchOldMessages",error);
        return null;
    }
};

//dummy data
const obj = {
  "roomId": "superroom",
  "password": "mypassword"
}
