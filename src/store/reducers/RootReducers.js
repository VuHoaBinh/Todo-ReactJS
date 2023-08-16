// create 1 reducers 

const initState = {
    users:[
        {id: '1', name: 'binh dep trai'},
        {id: '2', name: 'binh dep trai qua nha'},
        {id: '3', name: 'binh dep trai that ay'}
    ]
}

const rootReducers = (state = initState, action) => {
    return state;
}
export default rootReducers;



