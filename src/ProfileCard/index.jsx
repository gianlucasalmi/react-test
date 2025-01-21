export const ProfileCard = ({name, job, image, checked }) => {
    return <div style = {{
        display: "flex",
        border: "2px solid rgb(218, 218, 218)",
        width: "300px",
        borderRadius: "30px",
        alignItems: "center",
        padding: "20px",
        boxShadow: "0 0 10px rgba(225, 225, 225, 0.5)",
        margin: "20px 100px",
       }}>
        <div style={{ position: "relative", display: "inline-block" }}>
    <img
        src={image}
        alt="profile"
        style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            margin: "0 0 0 10px",
        }}
    />
    {checked && (
        <div
        >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMl7jIF5CgPsnFY3aMsH9Mce0tBDx54ak95w&s" alt="approved" style={{
                position: "absolute",
                bottom: "5px",
                right: "0px",
                backgroundColor: "white", 
                borderRadius: "50%", 
                padding: "2px", 
                width: "25px",
            }}/>
        </div>
    )}
</div>
        <div style={{
           margin: "0 30px",
           fontSize: "20px",
        }}>
            <h3 style={{ margin: "0 "}}> {name} </h3>
            <p style={{ margin: "10px 0 "}}>{job}</p>
        </div>
    </div>
}