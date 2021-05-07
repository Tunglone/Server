module.exports = (socket) => {
    try {
        console.log(socket.id)
        socket.on("code", (data, cb) => {
            socket.broadcast.emit("code", data)
        })
    }
    catch(ex) {
        console.log(ex.message)
    }
}
