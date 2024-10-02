import { createSlice } from "@reduxjs/toolkit";
export const karma = createSlice({
  name: "header",
  initialState: {
    value: { val:[0,0,0,0,0,0,0,0,0,0],index:0
    },
  },
  reducers: {
    setindex:(state,action)=>{
      console.log(action.payload.index)
      state.value.index=action.payload.index

    },
    initial:(state,action)=>{
      state.value = { val:[0,0,0,0,0,0,0,0,0,0],index:0
      }
    },
    addval: (state, action) => {
      console.log(action.payload.val,state.value.index);
      if(state.value.index==0){
        state.value.val[state.value.index] = action.payload.val;
      }else{
        state.value.val[state.value.index] =state.value.val[state.value.index-1]+ action.payload.val;
      }
   

    },
    subval:(state,action)=>{
        console.log(action.payload.val);
      state.value = state.value.val-action.payload.val;
    },
    addindex:(state,action)=>{
      console.log("index",state.value.index +1)
      state.value.index = state.value.index+1;
    }, subindex:(state,action)=>{
      console.log("index",state.value.index -1)

      state.value.index = state.value.index-1;
    }
  },
});

export const {
  addval,subval,addindex,subindex,initial,setindex

} = karma.actions;

export default karma.reducer;
