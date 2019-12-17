// creating the chat class here
class Chat {
    constructor(name, room) {
        this.name = name;
        this.room = room;
        this.unsub;
    }

    async addMessage(message) {

        const now = new Date();
        // creating chat obj to send
        const msg = {
            message,
            room: this.room,
            username: this.name,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }

        const response = await db.collection('Chats').add(msg);
        return response;
    }

    getChat(callback) {
        this.unsub = db.collection('Chats').
        where('room', '==', this.room).
        orderBy("created_at").
        onSnapshot(snap => {
            snap.docChanges().forEach(change => {

                if (change.type === "added") {

                    // updating the UI on adding the data in the DB
                    callback(change.doc.data());
                }
            })
        })
    }

    updateName(name) {
        this.name = name;

        // setting the name to the localStorage
        localStorage.setItem('username', name);
    }

    updateRoom(room) {
        this.room = room;
        console.log('Room Updated');
        if (this.unsub) {
            this.unsub();
        }

    }

}