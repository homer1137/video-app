import { createSlice, createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { IVideoStamp } from "../../models/IvideoStamp";
import axios from "axios";
// import { API_URL } from "../../http";

// Define a type for the slice state
interface VideoStampState {
  value: number;
  videoStamps: IVideoStamp[];
  loading: boolean;
  error: string | null;
}

// Define the initial state using that type
const initialState: VideoStampState = {
value: 0,
  videoStamps: [],
  loading: false,
  error: null,
};

export const fetchVidoStamps = createAsyncThunk<IVideoStamp[], undefined, {rejectValue: string}>(
    'videoStamps/fetchVideoStamps', 
    async function (_, {rejectWithValue}) {
        
            const resp =  await fetch('https://run.mocky.io/v3/085041d6-c0a5-4d4c-8ba9-829a0212d75b')
        if(!resp.ok) {
            return rejectWithValue('Server error')
        }

        const data = await resp.json();

        return data
    }
)




export const videoStampSlice = createSlice({
  name: "videoStamps",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    
    setVideoStamp(state, action: PayloadAction<IVideoStamp[]>) {
      state.videoStamps = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVidoStamps.pending, (state)=>{
        state.loading  = true;
        state.error = null; 
    })
    builder.addCase(fetchVidoStamps.fulfilled, (state, action)=>{
        state.loading  = false;
        state.videoStamps = action.payload 
    }) 
  },
});

export const { increment, decrement, incrementByAmount } = videoStampSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default videoStampSlice.reducer;
