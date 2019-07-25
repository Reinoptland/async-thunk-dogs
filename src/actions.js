// we make a function that creates an action creator
// a.k.a.

export const createQuestion = () => {
    return function(dispatch, getState){
        const threeRandomDogs = getState().slice(0, 3)
        dispatch({
            type: 'NEW_QUESTION',
            payload: threeRandomDogs 
        })
    }
}

// async await
// How to use it:
// put the keyword 'async' in front of your function
// put the await keyword in front async operations (like superagent.get)
// program as normal ..? What?? yep it's that good

export const getDogs = function(){
    return async function (dispatch, getState){
        if(getState().length !== 0) return // if we have dogs, don't request them

        try {
            const response = await fetch('https://dog.ceo/api/breeds/list/all')
            const json = await response.json()

            console.log('WE ARE FETCHING! WE ARE A GOOD BOY')

            dispatch({
                type: 'FETCH_DOGS_SUCCES',
                payload: Object.keys(json.message)
            })

            dispatch({
                type: 'DISPLAY FEEDBACK'
            })

            setTimeout(() => dispatch({
                type: 'HIDE FEEDBACK'
            }), 3000)

            console.log('HELLO??!')

        } catch (error) {
            window.alert(error)
        }
    }
}