import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  html: "<h1>Welcome to my code editor !!!</h1>",
  css: "",
  js: "//use document.querySelector('.Page'); if you want to add something using javascript :)",
  projects: [],
};

export const codeSlice = createSlice({
  name: "code",
  initialState: initialState,
  reducers: {
    html: (state, action) => {
      state.html = action.payload;
      return state;
    },
    css: (state, action) => {
      state.css = action.payload;
      return state;
    },
    js: (state, action) => {
      state.js = action.payload;
      return state;
    },
    loadProjects: (state, action) => {
      if (window.localStorage.getItem("projects")) {
        state.projects = localStorage.getItem("projects");
      } else {
        state.projects = [];
      }
    },
    saveProject: (state, action) => {
      let id;

      if (state.projects.length === 0) {
        id = 0;
      } else {
        id = state.projects.length;
      }

      const projectData = {
        id: id,
        name: action.payload,
        html: state.html,
        css: state.css,
        js: state.js,
      };

      state.projects.push(projectData);

      localStorage.setItem("projects", state.projects);
    },
  },
});

export const { html, css, js, saveProject, loadProjects } = codeSlice.actions;
export default codeSlice.reducer;
