const todoListDB = [
    {
      id: 1,
      action: "Nongkrong",
      status: "done"
    },
    {
      id: 2,
      action: "Gebukin orang",
      status: "done"
    },
    {
      id: 3,
      action: "Bubarin tongkrongan",
      status: "on going"
    }
  ]

  module.exports = {
    todoListDB
  }

  // CORS = Cross Origin Resource Sharing

// Challenge
// 1. Buat CRUD API untuk sebuah todo list
// 2. Terapkan logging menggunakan middleware dengan format sbg berikut:
//    "<HTTP_METHOD> <PATH> <hh:mm DD/MM/YYYY>"
//    "GET /todos 13:01 24/03/2022"
// 3. Logs harus muncul di console/terminal setiap request
// 4. Logs harus disimpan ke dalam file bernama ".log"
// 5. Tampilkan todo list di front end (next atau create-react-app)
// 6. Connect todo list frontend ke back end

// Isi todo list
// id: generate secara random
// status: "done" || "not done"
// action: string
