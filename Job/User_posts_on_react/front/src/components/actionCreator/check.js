const checkDispatch = (check) => dispatch => {
    dispatch({
        type: 'CHECKED',
        check: check,
    })
}

export default checkDispatch