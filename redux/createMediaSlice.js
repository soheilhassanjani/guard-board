import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  IssueId: null,
  SubjectId: null,
  ExcitementId: null,
  SentimentId: null,
  StrategyId: null,
  Keywords: [],
  TextSearch: null,
  Text: null,
  TargetUser: [],
  Images: [],
  Videos: [],
  referredMedia: [],
};

export const createMediaSlice = createSlice({
  name: "create-media",
  initialState,
  reducers: {
    setPageOneState: (state, action) => {
      state.SubjectId = action.payload.SubjectId;
      state.IssueId = action.payload.IssueId;
      state.TextSearch = action.payload.TextSearch;
      state.Keywords = action.payload.Keywords;
    },
    setPageTwoState: (state, action) => {
      state.TargetUser = action.payload.TargetUser;
      state.ExcitementId = action.payload.ExcitementId;
      state.SentimentId = action.payload.SentimentId;
      state.StrategyId = action.payload.StrategyId;
    },
    setPageFourState: (state, action) => {
      state.Text = action.payload.Text;
    },
    toggleReferredMedia: (state, action) => {
      const isExist = state.referredMedia.some((item) => {
        const id = action.payload.id;
        const type = action.payload.type;
        return item.id === id && item.type === type;
      });
      if (isExist) {
        state.referredMedia = state.referredMedia.filter((item) => {
          const id = action.payload.id;
          const type = action.payload.type;
          return !(item.id === id && item.type === type);
        });
      } else {
        state.referredMedia = [...state.referredMedia, action.payload];
      }
    },
    resetMediaStates: (_, action) => {
      if (action.payload) {
        return { ...initialState, ...action.payload };
      }
      return initialState;
    },
  },
});

export const {
  setPageOneState,
  setPageTwoState,
  setPageFourState,
  toggleReferredMedia,
  resetMediaStates,
} = createMediaSlice.actions;

export default createMediaSlice.reducer;
