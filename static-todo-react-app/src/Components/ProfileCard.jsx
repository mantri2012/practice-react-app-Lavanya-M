
const ProfileCard= (props) => {
    const { name, age, bio } = props;
    return (
        <div className= "card">
            <p>Name: {name}<br />
            Age: {age}<br />
            Bio: {bio}</p>
    </div>
  )
}

export default ProfileCard