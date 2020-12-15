const Film = ({name, url}) => {
    return(
        <>

            <a href={url}><p>{name}</p></a>
           
        </>
    )
}

export default Film;