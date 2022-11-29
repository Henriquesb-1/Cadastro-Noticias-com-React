export function uptadeFieldClass(event, element) {
    const news = { ...element.state.news }
    news[event.target.name] = event.target.value
    element.setState({ news })
}

export function uptadeFieldFunction(event, nameState, setStateFunction) {
    nameState = event.target.value
    setStateFunction(nameState)
}