export const prinProps = Component => {
    return (props_) => {
        console.log(props_)
        return <Component {...props_}></Component>
    }
}