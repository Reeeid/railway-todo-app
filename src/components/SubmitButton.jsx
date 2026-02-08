export const SubmitButton = ({SubmitState,text}) => {
    return(
        <button type="submit" className="app_button" disabled={SubmitState}>
            {text}
          </button>
    )
}