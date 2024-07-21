const All = () =>{

    const items = [
        {
            title : "title1",
            desc : "description"
        },
        {
            title : "title1",
            desc : "description"
        },
        {
            title : "title1",
            desc : "description"
        },
        {
            title : "title1",
            desc : "description"
        },
        {
            title : "title1",
            desc : "description"
        },
    ]
    return(
        <div>
            this is component all
            {items.map(each => (
                <div>
                    {each.title}
                </div>
            ))}
        </div>
    )
}

export default All