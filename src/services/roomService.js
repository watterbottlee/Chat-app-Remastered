const BASE_URL = "http://localhost:8080/"

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
        if (res.ok) {
            console.log("room created in db")
            return res;
        } else {
            console.log("else block of createRoom")
            return null;
        }
    }
    catch {
        console.log("catch block of createRoom")
    }
};

//join room api
export const joinRoom = async (payload) => {
    try {
        const res = await fetch(`${BASE_URL}api/v1/rooms/join-room`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        if (res.ok) {
            console.log("joined room")
            return res;
        } else {
            console.log("else block of joinRoom")
            return null;
        }
    }
    catch {
        console.log("catch block of joinRoom")
    }
};

//fetch data
export const fetchOldMessages = async (roomId) => {
    try {
        const res = await fetch(`${BASE_URL}api/v1/rooms/${roomId}/messages`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (res.ok) {
            console.log("got the room data")
            return res;
        } else {
            console.log("else block of fetchOldMessages")
            return null;
        }
    }
    catch {
        console.log("catch block of fetchOldMessages")
    }
};
 
const data = await fetchOldMessages("upgrade");
console.log(data);
//dummy data
const obj = {
  "roomId": "superroom",
  "password": "mypassword"
}
