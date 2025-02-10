# Simple Notes Manager  

**Simple Notes Manager** is a MERN stack application that allows users to add, view, and delete notes. It provides a minimal yet functional interface to manage notes efficiently.  

## Features  

✅ Add new notes (title, content, category)  
✅ View all notes in a card-based layout  
✅ Delete existing notes with a single click  
✅ Minimalist UI with simple CSS styling  
✅ Validates the required fields title, category, textcontent
✅ Each note should have a delete button to remove it


## Tech Stack  

### Backend:  
- **Node.js** with **Express.js**  
- Simple in-memory storage (No database for simplicity)
- ⚠ **Note:** This project does **not** use local storage or a database. Since the backend stores notes in an in-memory array, all data will be lost when the server restarts.


### Frontend:  
- **React.js** (Functional components with hooks)  
- **Axios** for API requests  
- **CSS** for basic styling  

## API Endpoints  

| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| POST   | `/api/notes`    | Add a new note (title, content, category) |
| GET    | `/api/notes`    | Retrieve all notes  |
| DELETE | `/api/notes/:id`| Delete a note by ID |



## Installation & Setup  

### 1️⃣ Clone the repository  

```bash
git clone https://github.com/balajis183/notepad-bluebex

```


### Frontend Installation  

1. Navigate to the frontend directory:  

```bash
cd frontend

```

2.Install react and react-dom in the frontend 

```bash
npm install react@18 react-dom@18

```

3. Install axios
```bash
npm install axios

```

4. Start the frontend using npm start
```bash
npm start
```

### Backend Installation  

Navigate back to the root directory:  

```bash
cd ..

```

```bash
cd backend

```

1. install express cors body-parser nodemon at a time

```bash
npm install express cors body-parser nodemon
```

2. Restart using command npm run dev


```bash
npm run dev
```

If it didn't work use this command in the backend 

```bash
npm install 
```

### Dependencies Explanation  

#### Frontend Dependencies  

- **react@18** – Core library for building the UI using components.  
- **react-dom@18** – Integrates React with the browser DOM.  
- **axios** – Handles HTTP requests for fetching and sending data.  

#### Backend Dependencies  

- **express** – Web framework for handling server routes and requests.  
- **cors** – Enables Cross-Origin Resource Sharing (CORS) for API access.  
- **body-parser** – Parses incoming request bodies (JSON, URL-encoded data).  
- **nodemon** – Automatically restarts the server during development.  




## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For major changes, open an issue to discuss your ideas first.

## Contact

If you have any questions or feedback, feel free to reach out:

- **GitHub**: [balajis183](https://github.com/balajis183)
- **Email**: sbalaji2000s@gmail.com

---

```bash
https://github.com/balajis183

```

Thank you for exploring **My simple Note manager**! 😊
