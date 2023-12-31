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
        state.projects = JSON.parse(localStorage.getItem("projects"));
      } else {
        state.projects = [];
      }

      console.log(state.projects);

      return state;
    },
    loadOneProject: (state, action) => {
      if(action.payload)
        state.html = state.projects[action.payload].html;
        state.css = state.projects[action.payload].css;
        state.js = state.projects[action.payload].js;
        return state;
    },
    saveProject: (state, action) => {
      let id;

      if (state.projects.length === 0) {
        id = 0;
      } else {
        id = state.projects.length;
      }

      if (
        state.projects.some((item) => item.name === action.payload[0]) &&
        !action.payload[1]
      ) {
        alert("Name must be unique");
        return state;
      }

      const projectData = {
        id: id,
        name: action.payload[0],
        html: state.html,
        css: state.css,
        js: state.js,
      };

      if (!action.payload[1]) {
        state.projects.push(projectData);
      } else {
        const index = state.projects.findIndex(
          (item) => item.name === action.payload[1]
        );
        state.projects[index].html = projectData.html;
        state.projects[index].css = projectData.css;
        state.projects[index].js = projectData.js;
      }

      localStorage.setItem("projects", JSON.stringify(state.projects));
      loadProjects();
    },
  },
});

export const { html, css, js, saveProject, loadProjects, loadOneProject } =
  codeSlice.actions;
export default codeSlice.reducer;
