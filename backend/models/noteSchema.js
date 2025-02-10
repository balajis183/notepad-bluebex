class Note {
    constructor(id, title, content, category) {
      const allowedCategories = ["Personal", "Work", "Other"];
  
      if (!title || !content || content.length < 10) {
        throw new Error("Title is required, and content must be at least 10 characters.");
      }
  
      if (!allowedCategories.includes(category)) {
        throw new Error("Invalid category. Choose from: Personal, Work, Other.");
      }
  
      this.id = id;
      this.title = title;
      this.content = content;
      this.category = category;
    }
  }
  
  module.exports = Note;
  