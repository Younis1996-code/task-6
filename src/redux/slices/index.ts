import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import postsData, { type PostsTypes } from "../../data/PostsData";

export interface PostsState {
  mode: "light" | "dark";
  postsData: PostsTypes[];
  selectedPost: PostsTypes | null;
  currentPage: number;
  postsPerPage: number;
  totalPages: number;
  pagiPage: PostsTypes[];
  pagiPageNum: (number | string)[];
  filteredPosts: PostsTypes[];
}

const initialState: PostsState = {
  mode: "light",
  postsData,
  selectedPost: null,
  currentPage: 1,
  postsPerPage: 6,
  totalPages: Math.ceil(postsData.length / 6),
  pagiPage: [],
  pagiPageNum: [],
  filteredPosts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    modeChange: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
      localStorage.setItem("theme", action.payload);
    },

    showPost: (state, action: PayloadAction<number>) => {
      const choPost = state.postsData.find(
        (post) => post.id === action.payload
      );
      if (choPost) {
        state.selectedPost = choPost;
      }
    },

    showAllPosts: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;

      const lastPostIndex = state.currentPage * state.postsPerPage;
      const firstPostIndex = lastPostIndex - state.postsPerPage;

      state.pagiPageNum = [];

      const reArrPosts = [
        ...state.postsData.slice(4),
        ...state.postsData.slice(0, 4),
      ];

      state.pagiPage = reArrPosts.slice(firstPostIndex, lastPostIndex);

      if (state.totalPages <= 4) {
        for (let i = 1; i <= state.totalPages; i++) {
          state.pagiPageNum.push(i);
        }
      } else {
        if (state.currentPage <= 3) {
          for (let i = 1; i <= 3; i++) {
            state.pagiPageNum.push(i);
          }
          state.pagiPageNum.push(
            "...",
            state.totalPages - 2,
            state.totalPages - 1,
            state.totalPages
          );
        } else if (state.currentPage >= state.totalPages - 2) {
          state.pagiPageNum.push(1, 2, 3, "...");
          for (let i = state.totalPages - 2; i <= state.totalPages; i++) {
            state.pagiPageNum.push(i);
          }
        } else {
          state.pagiPageNum.push(1, "...");
          state.pagiPageNum.push(
            state.currentPage - 1,
            state.currentPage,
            state.currentPage + 1
          );
          state.pagiPageNum.push("...", state.totalPages);
        }
      }
    },

    matchCate: (state, action) => {
      const id = state.selectedPost?.id;
      if (id === action.payload) {
        const matchedCatePosts = state.postsData.filter(
          (post) =>
            post.id !== state.selectedPost?.id &&
            post.categories.some((cate) =>
              state.selectedPost?.categories.includes(cate)
            )
        );

        state.filteredPosts = matchedCatePosts;
      }
    },
  },
});

export const { modeChange, showPost, showAllPosts, matchCate } =
  postsSlice.actions;
export default postsSlice.reducer;
