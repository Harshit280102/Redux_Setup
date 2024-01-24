import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface todo{
    completed:boolean
    id:number,
    title:string,
    userId:number,
}

export interface Todos{
 isLoading:boolean,
 data:todo[] | null;
 isError:boolean;
} 

//Action
export const fetchTodos =createAsyncThunk('fetchTodos',async()=>{
    const response =await fetch('https://jsonplaceholder.typicode.com/todos');
    return (await response.json()) as todo[];
})

//Extra Reducers

const todoSlice =createSlice({
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    } as Todos,
    name:'todo',
    extraReducers:(builder) =>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading=true;
        })
       builder.addCase(fetchTodos.fulfilled,(state,action)=>{
        state.isLoading =false;
        state.data=action.payload;
       });
       builder.addCase(fetchTodos.rejected,(state,action)=>{
         console.log('Error',action.payload);
         state.isError=true;
       })
    },
    reducers:{

    }
});

export default todoSlice.reducer;